export type Product={id:string;title:string;category:string;price:number;currency:string;description:string;image:string;tag?:string};

export const products:Product[]=[
{id:'nova',title:'Nova SaaS Landing Kit',category:'Website Templates',price:29,currency:'USD',description:'A premium responsive landing page system for SaaS, AI and startup brands.',image:'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',tag:'Best seller'},
{id:'studio',title:'Studio Brand Identity Pack',category:'Design Templates',price:19,currency:'USD',description:'Editable brand boards, social layouts and presentation templates.',image:'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'},
{id:'launch',title:'Business Launch Toolkit',category:'Business Resources',price:24,currency:'USD',description:'Practical launch checklists, proposal templates and planning resources.',image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80'},
{id:'prompts',title:'AI Creator Prompt Vault',category:'AI Resources',price:15,currency:'USD',description:'Curated prompt frameworks for content, research, marketing and ideation.',image:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',tag:'New'},
{id:'dashboard',title:'Fintech Dashboard UI Kit',category:'UI Kits',price:32,currency:'USD',description:'Clean dashboard components for modern fintech and analytics products.',image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'},
{id:'social',title:'Social Media Content Pack',category:'Social Media',price:12,currency:'USD',description:'Modern post and story layouts for creators and small businesses.',image:'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'},

{id:'free-cv',title:'Nigerian CV & Resume Starter Pack',category:'Free Resources',price:0,currency:'NGN',description:'Clean CV templates and a simple checklist for Nigerian students, graduates and job seekers.',image:'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',tag:'FREE'},
{id:'free-invoice',title:'Small Business Invoice Template',category:'Free Business Tools',price:0,currency:'NGN',description:'A simple invoice template for Nigerian freelancers, vendors and small businesses.',image:'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',tag:'FREE'},
{id:'free-social',title:'WhatsApp Business Content Pack',category:'Free Social Media',price:0,currency:'NGN',description:'Ready-to-edit content ideas for WhatsApp Status, Instagram and Facebook business pages.',image:'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1200&q=80',tag:'FREE'},
{id:'free-budget',title:'Nigerian Personal Budget Sheet',category:'Free Finance Tools',price:0,currency:'NGN',description:'A practical monthly budget template for tracking income, bills, savings and everyday spending.',image:'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',tag:'FREE'},
{id:'free-proposal',title:'Freelancer Proposal Template',category:'Free Business Tools',price:0,currency:'NGN',description:'A professional proposal starter for Nigerian freelancers offering design, development, writing and marketing services.',image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',tag:'FREE'},
{id:'free-content',title:'30-Day Content Planner',category:'Free Creator Tools',price:0,currency:'NGN',description:'A simple 30-day planning sheet for creators and Nigerian small businesses growing online.',image:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',tag:'FREE'}
];

export const services=[
['Website Development','Launch a fast, responsive website built around your brand.','From $250'],
['Brand Identity','Logo direction, visual system and premium marketing assets.','From $120'],
['UI/UX Design','High-converting interfaces and polished product experiences.','From $180'],
['SEO Setup','Technical SEO foundations, metadata and search-ready structure.','From $100'],
['Free CV Review','Get practical feedback on your CV structure, clarity and presentation.','FREE'],
['Free Website Consultation','A short discovery session to discuss your website idea, goals and next steps.','FREE'],
['Free Social Media Audit','Quick feedback on your public business social profile and content direction.','FREE'],
['Free Business Idea Session','Brainstorm and validate a digital business idea with a simple action plan.','FREE'],
['Free Portfolio Review','Feedback on your developer, designer or creative portfolio structure.','FREE'],
['Free Digital Setup Guide','Guidance on choosing basic tools for a Nigerian online business.','FREE']
];

export const countries=[['Nigeria','NGN'],['United States','USD'],['United Kingdom','GBP'],['Canada','CAD'],['Ghana','GHS'],['Kenya','KES'],['South Africa','ZAR'],['Australia','AUD']];