import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

export const SESSION_COOKIE = 'marketly_session';
const SESSION_DAYS = 14;
function tokenHash(token:string){ return createHash('sha256').update(token).digest('hex'); }
export function hashPassword(password:string){ const salt=randomBytes(16).toString('hex'); return salt+':'+scryptSync(password,salt,64).toString('hex'); }
export function verifyPassword(password:string,stored:string){
 const [salt,expected]=stored.split(':'); if(!salt||!expected)return false;
 const actual=scryptSync(password,salt,64), expectedBuffer=Buffer.from(expected,'hex');
 return actual.length===expectedBuffer.length&&timingSafeEqual(actual,expectedBuffer);
}
export async function createSession(userId:string){
 const token=randomBytes(32).toString('base64url'), expiresAt=new Date(Date.now()+SESSION_DAYS*86400000);
 await prisma.session.create({data:{userId,tokenHash:tokenHash(token),expiresAt}});
 const jar=await cookies(); jar.set(SESSION_COOKIE,token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',expires:expiresAt});
}
export async function getCurrentUser(){
 const jar=await cookies(), token=jar.get(SESSION_COOKIE)?.value; if(!token)return null;
 const session=await prisma.session.findUnique({where:{tokenHash:token},include:{user:true}});
 if(!session||session.expiresAt<=new Date())return null;
 return {id:session.user.id,email:session.user.email,name:session.user.name,createdAt:session.user.createdAt};
}
export async function destroySession(){
 const jar=await cookies(),token=jar.get(SESSION_COOKIE)?.value;
 if(token)await prisma.session.deleteMany({where:{tokenHash:token}});
 jar.set(SESSION_COOKIE,'',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:0});
}
export function isAdmin(email:string){const configured=process.env.MARKETLY_ADMIN_EMAIL?.trim().toLowerCase();return !!configured&&email.trim().toLowerCase()===configured;}
