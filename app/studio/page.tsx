'use client';

import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import Link from 'next/link';

type Template = { id:string; name:string; fields:{key:string;label:string;placeholder:string}[] };
const templates:Template[] = [
 {id:'invoice',name:'Professional Invoice',fields:[{key:'business',label:'Business name',placeholder:'Your business'},{key:'client',label:'Bill to',placeholder:'Client name'},{key:'number',label:'Invoice number',placeholder:'INV-001'},{key:'date',label:'Invoice date',placeholder:'2026-10-21'},{key:'description',label:'Item or service',placeholder:'Website design'},{key:'quantity',label:'Quantity',placeholder:'1'},{key:'rate',label:'Unit price',placeholder:'250'},{key:'currency',label:'Currency',placeholder:'USD'},{key:'notes',label:'Notes / payment terms',placeholder:'Payment due within 7 days'}]},
 {id:'quote',name:'Project Proposal / Quote',fields:[{key:'business',label:'Your name / business',placeholder:'Your business'},{key:'client',label:'Prepared for',placeholder:'Client name'},{key:'title',label:'Project title',placeholder:'Website redesign'},{key:'description',label:'Scope of work',placeholder:'Describe deliverables'},{key:'timeline',label:'Timeline',placeholder:'2 weeks'},{key:'price',label:'Estimated price',placeholder:'500 USD'},{key:'terms',label:'Terms and assumptions',placeholder:'One revision included'}]},
 {id:'resume',name:'Simple CV / Resume',fields:[{key:'name',label:'Full name',placeholder:'Your name'},{key:'role',label:'Professional headline',placeholder:'Web developer'},{key:'email',label:'Email / phone',placeholder:'you@example.com'},{key:'summary',label:'Profile summary',placeholder:'Brief professional summary'},{key:'experience',label:'Experience',placeholder:'Role, company, dates and achievements'},{key:'education',label:'Education',placeholder:'Qualification and institution'},{key:'skills',label:'Skills',placeholder:'Skill 1, skill 2, skill 3'}]},
 {id:'budget',name:'Monthly Budget Planner',fields:[{key:'name',label:'Planner title / name',placeholder:'Monthly budget'},{key:'month',label:'Month',placeholder:'October 2026'},{key:'income',label:'Expected income',placeholder:'2000'},{key:'housing',label:'Housing',placeholder:'600'},{key:'food',label:'Food',placeholder:'250'},{key:'transport',label:'Transport',placeholder:'100'},{key:'utilities',label:'Utilities and bills',placeholder:'150'},{key:'savings',label:'Savings goal',placeholder:'300'},{key:'other',label:'Other costs / notes',placeholder:'Subscriptions, emergency costs'}]},
 {id:'content',name:'Social Content Planner',fields:[{key:'brand',label:'Brand / creator name',placeholder:'Your brand'},{key:'month',label:'Planning period',placeholder:'Week 1 / October'},{key:'audience',label:'Target audience',placeholder:'Who is this for?'},{key:'goal',label:'Main goal',placeholder:'Educate, entertain, promote'},{key:'ideas',label:'Post ideas and schedule',placeholder:'Monday: ...\nTuesday: ...\nWednesday: ...'},{key:'cta',label:'Call to action',placeholder:'Follow, save, visit your site'}]},
 {id:'receipt',name:'Payment Receipt',fields:[{key:'business',label:'Business / seller',placeholder:'Your business'},{key:'client',label:'Paid by',placeholder:'Customer name'},{key:'number',label:'Receipt number',placeholder:'RCP-001'},{key:'date',label:'Payment date',placeholder:'2026-10-21'},{key:'description',label:'Payment for',placeholder:'Service or item'},{key:'amount',label:'Amount received',placeholder:'100 USD'},{key:'method',label:'Payment method',placeholder:'Bank transfer'},{key:'notes',label:'Additional note',placeholder:'Thank you for your payment'}]}
];
export default function TemplateStudio(){
 const [selected,setSelected]=useState('invoice');
 const [values,setValues]=useState<Record<string,string>>({business:'Your Business',number:'INV-001',date:new Date().toISOString().slice(0,10),quantity:'1',rate:'250',currency:'USD',month:'October 2026'});
 const [saved,setSaved]=useState(false);
 const template=useMemo(()=>templates.find(t=>t.id===selected)||templates[0],[selected]);
 const set=(key:string,value:string)=>{setValues(v=>({...v,[key]:value}));setSaved(false)};
 function changeTemplate(id:string){setSelected(id);setSaved(false)}
 function download(){
  const doc=new jsPDF({unit:'mm',format:'a4'});
  const margin=18; let y=23;
  doc.setFillColor(35,48,94);doc.rect(0,0,210,13,'F');
  doc.setTextColor(35,48,94);doc.setFont('helvetica','bold');doc.setFontSize(22);doc.text(template.name,margin,y);
  y+=12;doc.setDrawColor(220,224,234);doc.line(margin,y,192,y);y+=10;
  doc.setTextColor(30,35,45);doc.setFontSize(11);
  for(const field of template.fields){
   const label=field.label;const value=(values[field.key]||'').trim()||'—';
   doc.setFont('helvetica','bold');doc.text(label,margin,y);
   y+=6;doc.setFont('helvetica','normal');
   const lines=doc.splitTextToSize(value,174);
   doc.text(lines,margin,y);y+=Math.max(8,lines.length*5+3);
   if(y>265){doc.addPage();y=22;}
  }
  doc.setTextColor(120,125,140);doc.setFontSize(8);doc.text('Created with Marketly Template Studio',margin,285);
  const safe=template.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  doc.save(safe+'.pdf');setSaved(true);
 }
 return <main className="page"><div className="wrap" style={{paddingTop:38,paddingBottom:70}}>
  <span className="eyebrow">Marketly Studio · Editable templates</span>
  <div style={{display:'flex',justifyContent:'space-between',gap:18,alignItems:'center',flexWrap:'wrap',marginTop:16}}><div><h1 className="pageTitle" style={{marginBottom:8}}>Template Studio.</h1><p className="pageSub" style={{marginTop:0}}>Choose a template, customise every field, preview it, and export your own PDF.</p></div><Link className="button secondary" href="/products">Back to products</Link></div>
  <div className="studioGrid" style={{display:'grid',gridTemplateColumns:'minmax(280px, .9fr) minmax(300px,1.1fr)',gap:22,marginTop:28,alignItems:'start'}}>
   <section className="card" style={{padding:22}}>
    <label className="label">Choose template<select className="input" value={selected} onChange={e=>changeTemplate(e.target.value)}>{templates.map(t=><option key={t.id} value={t.id}>{t.name}</option>)}</select></label>
    <div style={{display:'grid',gap:14,marginTop:18}}>
     {template.fields.map(f=><label className="label" key={f.key}>{f.label}{f.key==='description'||f.key==='summary'||f.key==='experience'||f.key==='education'||f.key==='skills'||f.key==='ideas'||f.key==='terms'||f.key==='notes'||f.key==='other'||f.key==='scope'?<textarea className="input" rows={3} value={values[f.key]||''} onChange={e=>set(f.key,e.target.value)} placeholder={f.placeholder}/>:<input className="input" value={values[f.key]||''} onChange={e=>set(f.key,e.target.value)} placeholder={f.placeholder}/>}</label>)}
    </div>
    <button className="button" onClick={download} style={{width:'100%',marginTop:20}}>Download edited PDF</button>
    {saved&&<p role="status" style={{color:'#16a34a',fontSize:13}}>Your PDF export was started.</p>}
    <p className="muted" style={{fontSize:12,lineHeight:1.6}}>This first version exports editable form content into a clean PDF. It does not yet store your projects in an account or include AI-generated designs.</p>
   </section>
   <section className="card" style={{padding:22,background:'#f8f9fc',color:'#172033',minHeight:460}}>
    <div style={{display:'flex',justifyContent:'space-between',gap:10,alignItems:'center',borderBottom:'1px solid #dfe3ec',paddingBottom:14}}><strong>Live preview</strong><span style={{fontSize:11,color:'#687386'}}>A4 DOCUMENT</span></div>
    <h2 style={{fontSize:26,color:'#293663',marginTop:24}}>{template.name}</h2>
    <div style={{height:3,width:72,background:'#293663',marginBottom:20}}/>
    {template.fields.map(f=><div key={f.key} style={{marginBottom:14,overflowWrap:'anywhere'}}><div style={{fontSize:10,textTransform:'uppercase',letterSpacing:1,color:'#778095',marginBottom:4}}>{f.label}</div><div style={{fontSize:14,whiteSpace:'pre-wrap',lineHeight:1.55}}>{values[f.key]||<span style={{color:'#a0a7b4'}}>{f.placeholder}</span>}</div></div>)}
    <div style={{marginTop:28,borderTop:'1px solid #dfe3ec',paddingTop:12,fontSize:10,color:'#8790a0'}}>Created with Marketly Template Studio</div>
   </section>
  </div>
  <style jsx>{`@media(max-width:760px){.studioGrid{grid-template-columns:1fr!important}}`}</style>
 </div></main>
}
