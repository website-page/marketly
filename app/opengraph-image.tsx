import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Marketly — Digital products. Real services. One marketplace.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() { return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'80px',background:'radial-gradient(circle at 78% 15%, #35235e 0, #111522 35%, #07090d 75%)',color:'white',fontFamily:'Arial'}}><div style={{display:'flex',alignItems:'center',gap:18,fontSize:32,fontWeight:800}}><div style={{width:64,height:64,borderRadius:18,display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#fff,#a78bfa)',color:'#090b12',fontSize:43}}>M</div>Marketly</div><div style={{fontSize:68,fontWeight:800,lineHeight:1.05,marginTop:60,letterSpacing:-3}}>Digital products.<br/>Real services.</div><div style={{fontSize:28,color:'#c4c9d4',marginTop:28}}>One global marketplace for useful tools and resources.</div><div style={{marginTop:55,fontSize:20,color:'#b9a4ff'}}>marketlyweb.vercel.app</div></div>,size); }
