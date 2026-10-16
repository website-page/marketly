'use client';

import { jsPDF } from 'jspdf';

const lessons: [string, string[]][] = [
  ['1. What is forex?', [
    'Forex (foreign exchange) is the market where one currency is exchanged for another. A pair such as EUR/USD compares the euro with the US dollar.',
    'The base currency is first; the quote currency is second. EUR/USD at 1.0800 means one euro is quoted at 1.08 US dollars. Buying generally means expecting the base currency to strengthen; selling generally means expecting it to weaken. Either position can lose.',
    'Major pairs commonly include USD and heavily traded currencies. Cross pairs exclude USD. Exotic pairs often include a smaller or emerging-market currency and may have wider spreads and lower liquidity.'
  ]],
  ['2. Essential terms and definitions', [
    'Exchange rate: quoted price of one currency in another. Bid: price at which a broker buys the base currency. Ask: price at which it sells it. Spread: difference between ask and bid, one trading cost.',
    'Pip: common unit for measuring price movement. For many pairs it is 0.0001; for JPY pairs it is commonly 0.01. Check instrument specifications.',
    'Lot: trade-size unit. A standard lot is often 100,000 base-currency units; mini and micro lots are commonly 10,000 and 1,000. Broker rules can differ.',
    'Leverage lets you control a larger position relative to your deposit and magnifies gains and losses. Margin is funds set aside to support a leveraged position.',
    'Liquidity describes how easily an instrument can be traded without greatly moving price. Volatility is how much and how quickly price changes. Slippage is the difference between requested price and actual fill.',
    'Swap or rollover is a financing adjustment for holding a position overnight. Drawdown is a decline from an account peak. Equity is balance plus unrealised profit or loss.'
  ]],
  ['3. Market sessions and economic news', [
    'Forex activity is often discussed by the Asian, London and New York sessions. Overlap periods may be busier, but fast markets can also be less predictable.',
    'Central-bank decisions, inflation reports, employment data and geopolitical events can move prices sharply. An economic calendar shows scheduled events but cannot tell you which way price will move.'
  ]],
  ['4. Reading candlesticks', [
    'Each candle shows open, high, low and close for its timeframe. The body spans open to close; wicks show the high and low beyond the body. A bullish candle closes above its open; a bearish candle closes below it.',
    'Common names include doji (open and close are close together), hammer (small body with a long lower wick), shooting star (small body with a long upper wick) and engulfing candle (one body covers the prior body).',
    'Patterns are not reliable by themselves and never guarantee a reversal. Consider trend, context, volatility and confirmation.'
  ]],
  ['5. Trends, levels and indicators', [
    'An uptrend tends to form higher highs and higher lows. A downtrend tends to form lower highs and lower lows. A sideways market moves within a range.',
    'Support is an area where buying has previously appeared; resistance is an area where selling has previously appeared. They are zones, not guaranteed barriers.',
    'A moving average smooths past prices but lags. RSI is a momentum indicator often displayed from 0 to 100; common 70/30 levels are not automatic buy or sell signals. MACD compares moving averages to study momentum and can lag or give false signals.',
    'A timeframe is the duration represented by each candle. Different timeframes can show different patterns and none removes uncertainty.'
  ]],
  ['6. Order types', [
    'Market order: asks to enter or exit at the best available price; the fill price is not guaranteed. Limit order: aims to buy at or below a set price, or sell at or above it; it may never fill.',
    'Stop order: activates after a trigger price is reached. Stop-loss: an exit instruction intended to limit loss, but gaps and slippage can mean the final loss is larger than planned. Take-profit: an instruction to close at a target, subject to execution conditions.'
  ]],
  ['7. Risk management and position sizing', [
    'Decide what loss you can tolerate before considering a trade. No risk percentage makes trading safe or guarantees success. Position size depends on account currency, pair, pip value, stop distance and contract rules.',
    'Math example only: if a practice account is $1,000 and a hypothetical risk limit is 1%, the planned loss limit is $10 before costs and slippage. This is not a recommendation. A wider stop generally requires a smaller position to keep the same planned risk.',
    'Reward-to-risk compares a potential target with planned risk. A 2:1 ratio means the target is twice the planned risk; it does not mean the target is twice as likely. Include spread, commissions, swaps and slippage in practice calculations.',
    'Never increase size just to recover a loss. Avoid risking an entire account on one idea and do not borrow money to trade.'
  ]],
  ['8. A structured demo practice plan', [
    '1) Learn one or two pairs and read the broker contract specifications. 2) Write entry, invalidation, exit and no-trade conditions before a simulated trade. 3) Record the reason, screenshot, timeframe, planned risk, costs, result and lesson.',
    '4) Review a meaningful sample for consistency, drawdown and rule-following; do not judge a method from one result. 5) Test across different market conditions and include spread, fees and slippage. Past results do not predict future results.'
  ]],
  ['9. Psychology and scam awareness', [
    'FOMO means fear of missing out. Revenge trading means taking impulsive trades to recover a loss. Both can undermine a plan. Avoid overtrading, moving stops impulsively, excessive leverage and assuming a few wins prove a strategy works.',
    'Be cautious of guaranteed-profit claims, fixed daily returns, secret indicators and pressure to deposit quickly. Verify broker regulation with the relevant official regulator. Understand withdrawal rules and fees. Never share account passwords or give strangers remote access.',
    'A demo account teaches platform mechanics but does not fully reproduce live emotions or execution.'
  ]],
  ['10. Beginner glossary', [
    'Trading plan: written rules for when and how to trade. Strategy: defined conditions for entries, exits and risk. Backtesting: checking rules against historical data; poor data or assumptions can mislead.',
    'Forward or demo testing: trying rules on new or simulated data. Fundamental analysis: studying economic, policy and political factors. Technical analysis: studying price charts, levels and indicators. Broker: a firm or platform providing trading access and executing orders.'
  ]],
  ['11. Knowledge check', [
    '1. What do base and quote currencies mean? 2. What is the difference between spread and slippage? 3. Why can leverage increase losses as well as gains?',
    '4. What four prices does a candlestick show? 5. Why is a stop-loss not a guaranteed maximum loss in every market? 6. Why should a strategy be tested after including trading costs?',
    'Suggested next step: answer in your own words, then practise reading charts and recording hypothetical trades in a demo account.'
  ]]
];

export function downloadForexCoursePdf() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const left = 18;
  const right = 18;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const usableWidth = pageWidth - left - right;
  let y = 22;

  const ensureSpace = (height: number) => {
    if (y + height > pageHeight - 18) {
      doc.addPage();
      y = 20;
    }
  };

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(23);
  doc.text('FOREX TRADING 101', left, y);
  y += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.text("Beginner's Complete Guide", left, y);
  y += 9;
  doc.setFontSize(9);
  doc.setTextColor(95, 95, 95);
  doc.text('MARKETLY | FREE EDUCATIONAL RESOURCE', left, y);
  y += 9;
  doc.setDrawColor(30, 30, 30);
  doc.line(left, y, pageWidth - right, y);
  y += 8;
  doc.setTextColor(35, 35, 35);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Before you begin', left, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  const intro = 'This guide is for general education only, not financial, investment or trading advice. Forex is high risk and you can lose some or all of the money in a trading account. Start with learning and a demo account. Never borrow or risk money needed for essentials. No strategy, indicator or pattern guarantees profit.';
  const introLines = doc.splitTextToSize(intro, usableWidth);
  ensureSpace(introLines.length * 5 + 5);
  doc.text(introLines, left, y);
  y += introLines.length * 5 + 8;

  for (const lesson of lessons) {
    ensureSpace(15);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(15, 15, 15);
    doc.text(lesson[0], left, y);
    y += 7;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    for (const paragraph of lesson[1]) {
      const lines = doc.splitTextToSize(paragraph, usableWidth);
      ensureSpace(lines.length * 5 + 5);
      doc.text(lines, left, y);
      y += lines.length * 5 + 5;
    }
    y += 2;
  }

  const pages = doc.getNumberOfPages();
  for (let page = 1; page <= pages; page++) {
    doc.setPage(page);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text('Marketly | Forex Trading 101 | Education only', left, pageHeight - 9);
    doc.text(String(page) + ' / ' + String(pages), pageWidth - right, pageHeight - 9, { align: 'right' });
  }

  doc.save('Marketly-Forex-Trading-101.pdf');
}
