export type Product={id:string;title:string;category:string;price:number;currency:string;description:string;image:string;tag?:string};

export const products:Product[]=[
{id:'nova',title:'Nova SaaS Landing Page Kit',category:'Website Templates',price:29,currency:'USD',description:'A responsive landing-page starter for SaaS, AI products and startup brands, with clear sections for features, pricing and calls to action.',image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',tag:'Best seller'},
{id:'studio',title:'Studio Brand Identity Pack',category:'Design Templates',price:19,currency:'USD',description:'A coordinated visual identity starter with brand boards, colour direction, social layouts and presentation templates.',image:'https://images.unsplash.com/photo-1634942536790-253e3f2b2f4a?auto=format&fit=crop&w=1200&q=85'},
{id:'launch',title:'Business Launch Toolkit',category:'Business Resources',price:24,currency:'USD',description:'A practical collection of launch checklists, planning worksheets and proposal templates to help organise a new business.',image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85'},
{id:'prompts',title:'AI Creator Prompt Vault',category:'AI Resources',price:15,currency:'USD',description:'Prompt frameworks for content planning, research, marketing, brainstorming and everyday creative workflows.',image:'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',tag:'New'},
{id:'dashboard',title:'Fintech Dashboard UI Kit',category:'UI Kits',price:32,currency:'USD',description:'A polished dashboard design starter for finance, analytics and SaaS products, with a focus on clear data presentation.',image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85'},
{id:'social',title:'Social Media Content Pack',category:'Social Media',price:12,currency:'USD',description:'Reusable post and story design ideas for creators, community managers and small-business social accounts.',image:'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85'},

{id:'free-cv',title:'CV & Resume Starter Pack',category:'Free Resources',price:0,currency:'USD',description:'A clean CV and resume starter resource with a simple checklist for students, graduates and job seekers worldwide.',image:'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=85',tag:'FREE'},
{id:'free-invoice',title:'Small Business Invoice Template',category:'Free Business Tools',price:0,currency:'USD',description:'A simple invoice template for freelancers, independent vendors and small businesses.',image:'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',tag:'FREE'},
{id:'free-social',title:'WhatsApp Business Content Pack',category:'Free Social Media',price:0,currency:'USD',description:'Content ideas for WhatsApp Status, Instagram and Facebook business pages, designed to help you plan consistent updates.',image:'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1200&q=85',tag:'FREE'},
{id:'free-budget',title:'Personal Budget Spreadsheet',category:'Free Finance Tools',price:0,currency:'USD',description:'A practical monthly budgeting resource for tracking income, bills, savings and everyday spending.',image:'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85',tag:'FREE'},
{id:'free-proposal',title:'Freelancer Proposal Template',category:'Free Business Tools',price:0,currency:'USD',description:'A professional proposal starter for freelancers offering design, development, writing, consulting and marketing services.',image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',tag:'FREE'},
{id:'free-content',title:'30-Day Content Planner',category:'Free Creator Tools',price:0,currency:'USD',description:'A simple 30-day content planning resource for creators and businesses building a consistent online presence.',image:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85',tag:'FREE'}
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
['Free Digital Setup Guide','Guidance on choosing basic tools for a small online business.','FREE']
];

// Kept for compatibility with existing parts of the V1 app. The signup page uses a searchable full-country list.
export const countries=[['Nigeria','NGN'],['United States','USD'],['United Kingdom','GBP'],['Canada','CAD'],['Ghana','GHS'],['Kenya','KES'],['South Africa','ZAR'],['Australia','AUD']];
