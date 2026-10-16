'use client';

import { jsPDF } from 'jspdf';
import type { Product } from '@/lib/data';

function productSections(p: Product): { heading: string; body: string[] }[] {
  const id = p.id;
  if (id === 'nova') return [
    {heading:'Offer and conversion brief',body:['Primary audience: _____________________ Main pain point: _____________________','One-sentence promise: _______________________________________________________','Proof available (case study, demo, numbers): __________________________________','Primary call to action: __________________ Secondary action: __________________','Traffic source and visitor intent: ____________________________________________']},
    {heading:'Landing page blueprint',body:['1. Hero: clear outcome, audience, proof and one primary CTA.','2. Problem: name the costly or frustrating task the visitor already recognises.','3. Solution: show the workflow and what is included; avoid unsupported claims.','4. Proof: use real testimonials, product screenshots or measurable results only.','5. Objections: answer setup time, price, compatibility, support and cancellation.','6. Pricing: explain plan differences, billing terms and what is excluded.','7. FAQ and final CTA: resolve remaining friction and repeat the next step.']},
    {heading:'Launch QA checklist',body:['[ ] Mobile layout and readable type tested. [ ] Every CTA goes to the correct destination.','[ ] Forms validated; success and error messages tested. [ ] Page title and social preview set.','[ ] Analytics events defined with privacy respected. [ ] Performance and keyboard access checked.','[ ] Claims, pricing, refund terms and privacy links reviewed before launch.']}
  ];
  if (id === 'studio') return [
    {heading:'Brand strategy decisions',body:['Audience and buying situation: __________________________________________________','Customer problem and desired change: __________________________________________','Positioning statement: For [audience], [brand] helps [outcome] through [difference].','Three brand attributes: _____________________ What the brand is NOT: ______________','Competitors and a clear distinction: ____________________________________________']},
    {heading:'Visual system specification',body:['Primary colour + role: __________________ Secondary + role: __________________','Accent colour + role: ___________________ Background/text contrast checked: ______','Heading font: __________________________ Body font: ____________________________','Logo clear-space and minimum size: ______________________________________________','Photo direction, icon style and illustration rules: ______________________________']},
    {heading:'Client handoff checklist',body:['[ ] Approved logo variations and editable originals. [ ] Colour codes and type hierarchy documented.','[ ] Social avatar/cover and presentation use cases checked. [ ] Font/photo licences recorded.','[ ] Export formats named consistently. [ ] Usage restrictions and revision sign-off documented.']}
  ];
  if (id === 'launch') return [
    {heading:'Validate before building',body:['Target customer: _________________________ Urgent problem: _____________________','What customers do now: ________________________________________________________','Evidence gathered (interviews, pre-orders, pilot): ______________________________','Smallest testable offer: _____________________ Success threshold: _______________','Do not proceed until the test result and next decision are recorded.']},
    {heading:'Offer and operations',body:['Offer and deliverables: _________________________________________________________','Price and rationale: ______________________ Direct costs: _____________________','Delivery process and turnaround: _______________________________________________','Customer support route: ___________________ Refund/cancellation terms: __________','Payment, privacy, tax and local compliance checks: ______________________________']},
    {heading:'Four-week launch plan',body:['Week 1 — Validate the problem and interview likely buyers.','Week 2 — Build the smallest useful offer and test delivery with a small pilot.','Week 3 — Prepare product page, onboarding, support and truthful launch content.','Week 4 — Launch, track visits/conversions/refunds, collect feedback and decide what to improve.','Review metrics: qualified leads ______ conversion ______ refunds ______ repeat use ______']}
  ];
  if (id === 'prompts') return [
    {heading:'Content operating system',body:['Audience segment: _____________________ Their current question: __________________','Content pillar 1: ______________________ Pillar 2: _____________________________','Pillar 3: ______________________________ Offer or next step: ___________________','Choose one goal per campaign: educate, build trust, demonstrate, or invite action.']},
    {heading:'Weekly production workflow',body:['MONDAY — Review audience questions and choose one campaign theme.','TUESDAY — Draft one core asset and verify facts, permissions and claims.','WEDNESDAY — Repurpose the core idea into short, visual and conversational formats.','THURSDAY — Schedule posts with platform-specific opening lines and calls to action.','FRIDAY — Review saves, replies, qualified clicks and conversions; document lessons.']},
    {heading:'Campaign tracking',body:['Date/platform: _____________________ Content pillar: __________________________','Audience problem addressed: __________________________________________________','Hook and CTA: _________________________________________________________________','Reach: ______ Saves: ______ Replies: ______ Qualified clicks: ______ Leads: ______','What to repeat / stop / test next: ______________________________________________']}
  ];
  if (id === 'dashboard') return [
    {heading:'Dashboard information architecture',body:['Primary user role: ________________________ Most important decision: ____________','Key metrics (define each precisely): ____________________________________________','Time range and timezone: __________________ Currency/unit: ____________________','Data source and refresh cadence: ______________ Metric owner: __________________']},
    {heading:'Screen and state specification',body:['Overview cards: label, value, comparison period, definition and destination.','Transactions table: date, reference, status, amount, currency and permitted actions.','Empty state: explain why no data appears and offer one safe next step.','Loading state: preserve layout and communicate progress. Error state: explain recovery without exposing secrets.','Mobile: prioritise the most useful fields and avoid horizontal overflow.']},
    {heading:'Handoff and acceptance',body:['[ ] Role permissions and sensitive fields reviewed. [ ] Amounts, dates and timezone tested.','[ ] Sorting, filtering, pagination and empty states defined. [ ] Keyboard and contrast checked.','[ ] Test data distinguished from live financial data. [ ] Acceptance criteria signed off.']}
  ];
  if (id === 'social') return [
    {heading:'Campaign brief',body:['Campaign objective: ______________________ Audience: __________________________','Offer: _________________________________ Proof/benefit: ______________________','Primary platform: ________________________ CTA destination: ____________________','One measurable outcome: _______________________________________________________']},
    {heading:'Four-week campaign map',body:['Week 1 — Explain the audience problem and introduce the offer.','Week 2 — Demonstrate the process, product or service using real examples.','Week 3 — Answer objections and share genuine customer questions or feedback.','Week 4 — Make a clear offer, follow up responsibly and review the results.','Plan each post with a format, owner, due date, CTA and approval status.']},
    {heading:'Performance review',body:['Post/date: ______________________ Format: _________________________________','Reach: ______ Saves: ______ Replies: ______ Clicks: ______ Leads/sales: ______','What earned qualified attention? ______________________________________________','What will be tested next? _____________________________________________________']}
  ];
  if (id === 'forex-risk') return [
    {heading:'Position-size calculation inputs',body:['Account equity: __________ Account currency: _________ Risk assumption: _________','Instrument/pair: __________ Stop distance (pips/points): _________ Pip value: ______','Planned monetary risk = equity × risk fraction. This is a hypothetical calculation, not a recommendation.','Estimated position size = planned risk ÷ (stop distance × pip value per unit), after confirming broker contract units and account-currency conversion.','Include spread, commission, swap, conversion and possible slippage; if any input is unknown, do not treat the estimate as reliable.']},
    {heading:'Worked-example record',body:['Equity used: ______ Risk fraction used: ______ Planned loss: ______','Entry assumption: ______ Stop assumption: ______ Distance: ______','Pip/point value source and date: ______________________________________________','Broker contract size checked: [ ] Currency conversion checked: [ ] Costs included: [ ]','Recalculate independently before any real-world use.']},
    {heading:'Exposure checklist',body:['[ ] Total open exposure checked across correlated pairs. [ ] Major news and gaps considered.','[ ] Stop order execution limits understood. [ ] No borrowing or essential money involved.','[ ] Loss limit and no-trade conditions written before the hypothetical entry.']}
  ];
  if (id === 'forex-textbook') return [
    {heading:'Chart study routine',body:['Pair/instrument: __________________ Date/time: __________ Timeframe: __________','Market context and scheduled events: __________________________________________','Visible structure (trend/range): ______________________________________________','Candidate support/resistance zones and why: ____________________________________','Alternative scenario: __________________ What would invalidate the idea? _______','Costs and execution risks to check: ____________________________________________']},
    {heading:'Practice exercises',body:['Exercise 1 — Mark a trend or range without predicting the next candle.','Exercise 2 — Mark a zone and write two reasons it may fail.','Exercise 3 — Compare a planned stop distance with hypothetical pip value and costs.','Exercise 4 — Review a completed demo example and note whether the written rules were followed.','Score the quality of the process, not just whether the hypothetical trade won.']},
    {heading:'Review log',body:['Observation: ______________________________ Evidence: _________________________','Alternative explanation: ___________________ Invalidation: ____________________','Planned risk and costs: ____________________ Outcome and lesson: _______________','Educational only. Forex is high risk; no chart pattern or workbook guarantees profit.']}
  ];
  if (id === 'chart-reader') return [
    {heading:'Chart screenshot review',body:['Instrument and broker/source: ______________ Screenshot date/time: _____________','Timeframe: ______________________________ Indicators shown: __________________','Visible facts only (avoid assumptions): ________________________________________','Trend/range description: ______________________________________________________','Potential levels and supporting observations: _________________________________','What is unclear or missing from this screenshot? ______________________________']},
    {heading:'Scenario comparison',body:['Scenario A: ______________________________ Evidence for: ______________________','Scenario B: ______________________________ Evidence for: ______________________','What would invalidate each scenario? ___________________________________________','News, spread, liquidity and timeframe limitations: _____________________________','Do not treat visual interpretation or AI commentary as a reliable prediction.']},
    {heading:'Post-review quality check',body:['[ ] Observations separated from guesses. [ ] At least one alternative considered.','[ ] Uncertainty and missing context recorded. [ ] No claim of guaranteed direction.','[ ] Any conclusion can be independently checked against the original chart.']}
  ];
  if (id === 'trading-bot') return [
    {heading:'Rules before code',body:['Market/data source: _________________________ Timeframe: ______________________','Entry rule: ________________________________ Exit rule: _______________________','Stop/invalidation rule: _____________________ Position sizing rule: ____________','No-trade conditions: ________________________ Fees/slippage assumptions: ________','Rules must be precise enough that two people would label the same historical setup consistently.']},
    {heading:'Backtest protocol',body:['Training period: ___________________________ Out-of-sample period: _____________','Number of trades: ______ Win rate: ______ Average win/loss: ______ Max drawdown: ______','Include spread, commission, swaps, slippage and rejected orders where applicable.','Avoid look-ahead bias, survivorship bias and repeatedly tuning rules to one sample.','Compare with a simple baseline and test across different market conditions.']},
    {heading:'Release gate',body:['[ ] Data quality and timezones checked. [ ] Out-of-sample test completed.','[ ] Paper/demo test completed with logs. [ ] Kill switch and exposure caps defined.','[ ] Credentials kept secret and permissions restricted. [ ] Independent review completed.','This is a planning workbook, not a bot. Backtests do not guarantee future results.']}
  ];
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
