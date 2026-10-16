'use client';

import { jsPDF } from 'jspdf';
import type { Product } from '@/lib/data';

function productSections(p: Product): { heading: string; body: string[] }[] {
  const id = p.id;
  if (id === 'free-forex-101' || id === 'forex-textbook' || id === 'free-candles' || id === 'free-trade-journal' || id === 'free-calculator' || id === 'forex-risk' || id === 'chart-reader' || id === 'trading-bot') {
    return [
      { heading: 'Learning goals', body: ['Understand key terms before using any trading platform.', 'Treat every chart idea as uncertain and practise with a demo account first.', 'Keep written records and include trading costs when reviewing any method.'] },
      { heading: 'Core concepts', body: ['Forex is the exchange of one currency for another. A currency pair names the base currency first and the quote currency second.', 'Spread is the difference between bid and ask. A pip is a common unit of price movement. Lot describes trade size. Leverage magnifies both gains and losses; margin supports a leveraged position.', 'Candlesticks show open, high, low and close. Support and resistance are zones, not guaranteed barriers. Indicators can lag and produce false signals.', 'A stop-loss can help define an exit, but gaps and slippage mean the final result may differ from the planned loss. Include spreads, commissions and overnight financing in calculations.'] },
      { heading: 'Practice worksheet', body: ['Instrument/pair: __________________________________________', 'Timeframe and date: ______________________________________', 'What do I observe? ________________________________________', 'What would invalidate this idea? ___________________________', 'What is the planned maximum loss in this hypothetical example? ______________', 'What costs or news events could affect the result? __________________________', 'What did I learn after reviewing the example? ______________________________'] },
      { heading: 'Risk checklist', body: ['[ ] I understand the instrument and its contract specifications.', '[ ] This is a demo or hypothetical exercise, not money needed for essentials.', '[ ] I have written down the possible loss before the hypothetical entry.', '[ ] I have considered spread, fees, slippage and volatility.', '[ ] I will not increase risk to recover a previous loss.', '[ ] I understand that no pattern, indicator, bot or AI output guarantees profit.'] },
      { heading: 'Glossary', body: ['Base currency: first currency in a pair. Quote currency: second currency in a pair.', 'Bid/ask: quoted sell/buy prices from the broker perspective. Spread: difference between bid and ask.', 'Liquidity: how readily an instrument can be traded. Volatility: the pace and size of price changes.', 'Drawdown: decline from an account peak. Backtesting: testing rules on historical data; it does not predict future results.'] },
      { heading: 'Important risk notice', body: ['This document is for general educational purposes only and is not financial or investment advice. Forex and leveraged trading are high risk. You can lose some or all of the money in a trading account. Never borrow or risk money needed for essentials. Verify broker terms and applicable regulation independently.'] }
    ];
  }
  if (id === 'free-cv') return [
    {heading:'CV planning checklist',body:['Name and contact details: __________________________________','Professional headline: _____________________________________','Short profile: 2–4 lines focused on the role and relevant strengths.','Experience: list most recent role first; explain actions and outcomes honestly.','Education and certifications: include dates where relevant.','Skills: match relevant skills to the role and be ready to explain each one.','References: provide only when requested and with permission.']},
    {heading:'Profile statement template',body:['I am a [role/student] with experience or training in [relevant area]. My strengths include [skill 1] and [skill 2]. I am seeking [type of opportunity] where I can contribute through [relevant contribution].']},
    {heading:'Final review',body:['[ ] Contact details are correct. [ ] Dates and spelling are checked. [ ] Claims are accurate. [ ] Layout is readable on mobile and desktop. [ ] File name is professional.']}
  ];
  if (id === 'free-invoice') return [
    {heading:'Invoice template',body:['BUSINESS / FREELANCER: __________________________________','Business contact: _________________________________________','INVOICE NUMBER: ______________   DATE: ___________________','BILL TO: _________________________________________________','Client contact: ___________________________________________','Description of work or item | Quantity | Rate | Amount','__________________________________________________________','__________________________________________________________','Subtotal: ______________   Tax (if applicable): ____________','Total due: ______________   Due date: _____________________','Payment method/details: ___________________________________','Notes / agreed terms: _____________________________________']},
    {heading:'Before sending',body:['Confirm scope and amount with the client. State due date and accepted payment methods. Apply local tax rules where relevant. Keep a copy and do not include sensitive banking credentials in public documents.']}
  ];
  if (id === 'free-budget') return [
    {heading:'Monthly budget worksheet',body:['Month: ____________________   Currency: ________________','INCOME: wages ______ side income ______ other ______ total ______','ESSENTIALS: housing ______ utilities ______ food ______ transport ______','OTHER COSTS: subscriptions ______ education ______ health ______ other ______','SAVING GOAL: ____________________   AMOUNT SAVED: ______________','Income total: ______ minus expenses total: ______ = remaining: ______','Review one expense you can plan better next month: __________________']},
    {heading:'Budget habits',body:['Record income and expenses regularly. Plan for irregular costs. Keep emergency savings goals realistic. A budget is a planning tool, not a guarantee of future income.']}
  ];
  if (id === 'free-social' || id === 'free-content') return [
    {heading:'Audience and message',body:['Who is the audience? _______________________________________','What problem or interest does the content address? __________','What should the viewer learn or do? _________________________','Brand voice: ______________________________________________']},
    {heading:'30-day content planner',body:Array.from({length:15},(_,i)=>'Day '+(i+1)+': Topic __________________ Format __________ Call to action __________________')},
    {heading:'Post checklist',body:['[ ] Opening line is clear. [ ] One main message. [ ] Facts and claims are checked. [ ] Visual is readable on a phone. [ ] Permission obtained for third-party assets. [ ] Call to action is relevant, not misleading.']}
  ];
  if (id === 'free-proposal' || id === 'launch') return [
    {heading:'Project overview',body:['Client / business: _________________________________________','Project name: _____________________________________________','Business goal: ____________________________________________','Target audience: __________________________________________','Scope and deliverables: ____________________________________','Timeline and milestones: ___________________________________','Client responsibilities: ____________________________________']},
    {heading:'Pricing and terms',body:['Deliverable / phase: __________________ Amount: ____________','Payment milestones: ________________________________________','Revision limit and change process: _________________________','Exclusions / assumptions: __________________________________','Proposal expiry date: ______________________________________']},
    {heading:'Next steps',body:['Confirm scope, dates, fees, ownership and cancellation terms in writing before work begins. Adapt this starter to the project and local requirements.']}
  ];
  if (id === 'studio' || id === 'social') return [
    {heading:'Brand direction worksheet',body:['Brand name: ______________________________________________','Audience: _________________________________________________','Brand promise: ____________________________________________','Three brand traits: ________________________________________','Primary colour: __________ Secondary: __________ Accent: ______','Typography direction: ______________________________________','Visual references and what to learn from them: _______________']},
    {heading:'Asset planning',body:['Logo / wordmark: __________________________________________','Social post template: ______________________________________','Story format: _____________________________________________','Presentation / cover layout: _______________________________','Accessibility check: contrast, legibility and alt text.']},
    {heading:'Usage and export checklist',body:['Check licence and permissions for fonts, photos and icons. Export suitable sizes for each platform. Keep editable originals. Preview on mobile and desktop.']}
  ];
  if (id === 'nova' || id === 'dashboard' || id === 'trading-bot' || id === 'chart-reader') return [
    {heading:'Project setup',body:['Project / product: _________________________________________','Primary user: ______________________________________________','Main problem: _____________________________________________','Primary action: ____________________________________________','Success measure: __________________________________________']},
    {heading:'Build checklist',body:['[ ] Define scope and acceptance criteria.', '[ ] Sketch the key user flow before implementation.', '[ ] Make layout responsive and keyboard accessible.', '[ ] Validate forms and show clear error messages.', '[ ] Test empty, loading, success and failure states.', '[ ] Review privacy, permissions and data handling.', '[ ] Test on mobile and desktop before release.']},
    {heading:'Implementation notes',body:['Use this guide as a planning workbook. It is not a source-code bundle, executable software, live AI integration or a production-ready trading bot. Additional implementation and testing are required for those features.']}
  ];
  if (id === 'prompts') return [
    {heading:'Prompt framework',body:['ROLE: Ask the model to take a clearly defined professional perspective.', 'CONTEXT: Provide audience, purpose, constraints and background.', 'TASK: State the desired outcome in one direct instruction.', 'FORMAT: Specify bullets, table, outline, draft or checklist.', 'QUALITY CHECK: Ask for assumptions, uncertainties and missing information.']},
    {heading:'Reusable prompt worksheets',body:['Goal: ____________________________________________________','Audience: ________________________________________________','Context and facts: ________________________________________','Constraints: ______________________________________________','Desired format and tone: ___________________________________','How will I verify the result? _______________________________']},
    {heading:'Responsible use',body:['Do not enter passwords, payment details or private personal information. Check important facts independently. AI outputs can be inaccurate, biased or incomplete.']}
  ];
  return [
    {heading:'Overview',body:[p.description,'This downloadable starter guide turns the product idea into a practical worksheet. Adapt the prompts and fields to your own use case.']},
    {heading:'Action plan',body:['Goal: ____________________________________________________','Audience / user: __________________________________________','Resources required: ________________________________________','First milestone: ___________________________________________','How success will be measured: ______________________________']},
    {heading:'Quality checklist',body:['[ ] Confirm the intended outcome.', '[ ] Check facts, permissions and applicable rules.', '[ ] Test the result before relying on it.', '[ ] Record feedback and improvements.', '[ ] Keep a backup of completed work.']}
  ];
}

export function downloadProductPdf(p: Product) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const left = 18, right = 18;
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const usable = width - left - right;
  let y = 22;
  const ensure = (need: number) => { if (y + need > height - 18) { doc.addPage(); y = 20; } };

  doc.setFont('helvetica', 'bold'); doc.setFontSize(21); doc.setTextColor(15,15,15);
  const titleLines = doc.splitTextToSize(p.title, usable);
  doc.text(titleLines, left, y); y += titleLines.length * 9 + 2;
  doc.setFont('helvetica', 'normal'); doc.setFontSize(12);
  doc.text(p.category, left, y); y += 8;
  doc.setFontSize(9); doc.setTextColor(100,100,100);
  doc.text('MARKETLY | DIGITAL DOWNLOAD', left, y); y += 8;
  doc.setDrawColor(40,40,40); doc.line(left,y,width-right,y); y += 8;
  doc.setFontSize(10); doc.setTextColor(40,40,40);
  const intro = doc.splitTextToSize(p.description, usable);
  doc.text(intro,left,y); y += intro.length*5+8;

  for (const section of productSections(p)) {
    ensure(14);
    doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(15,15,15);
    doc.text(section.heading,left,y); y += 7;
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(45,45,45);
    for (const para of section.body) {
      const lines = doc.splitTextToSize(para,usable);
      ensure(lines.length*5+5);
      doc.text(lines,left,y); y += lines.length*5+5;
    }
    y += 3;
  }

  if (p.id === 'free-forex-101' || p.category.toLowerCase().includes('forex') || p.category.toLowerCase().includes('trading')) {
    ensure(30);
    doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.text('Educational risk notice',left,y); y += 6;
    doc.setFont('helvetica','normal'); doc.setFontSize(9);
    const warning = doc.splitTextToSize('For general education only, not financial or investment advice. Forex and leveraged trading are high risk and can result in substantial losses. No indicator, strategy, bot or AI output guarantees profit. Practise on a demo account and never borrow or risk money needed for essentials.',usable);
    doc.text(warning,left,y); y += warning.length*4+4;
  }
  const total = doc.getNumberOfPages();
  for (let page=1; page<=total; page++) {
    doc.setPage(page); doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(120,120,120);
    doc.text('Marketly | '+p.title.slice(0,60),left,height-9);
    doc.text(page+' / '+total,width-right,height-9,{align:'right'});
  }
  const safe = p.id.replace(/[^a-z0-9-]/gi,'-');
  doc.save('Marketly-'+safe+'.pdf');
}
