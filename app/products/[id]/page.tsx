import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import ProductDetailActions from '@/components/ProductDetailActions';

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = products.find((item) => item.id === id);
  if (!p) return notFound();

  return (
    <main className="page">
      <div className="wrap productDetailLayout">
        <div
          className="productImg productDetailImage"
          role="img"
          aria-label={`Preview image for ${p.title}`}
          style={{ backgroundImage: `url(${p.image})` }}
        />
        <div>
          <span className="pill">{p.category}</span>
          <h1 className="pageTitle productDetailTitle">{p.title}</h1>
          <p className="pageSub">{p.description}</p>
          {p.id === 'free-forex-101' && (
            <section className="notice" style={{ marginTop: 24, lineHeight: 1.75 }}>
              <h2>Forex Trading 101 — Beginner’s Course</h2>
              <p><strong>Important:</strong> Forex trading is risky. This course is for education, not financial advice. You can lose some or all of the money in a trading account. Start with study and a demo account; never borrow money or risk money needed for essentials.</p>

              <h3>1. What is forex?</h3>
              <p><strong>Forex (foreign exchange):</strong> the market where one currency is exchanged for another. Traders try to benefit from changes in exchange rates, but prices can move against them.</p>
              <p><strong>Currency pair:</strong> two currencies quoted together, such as EUR/USD. The first is the <strong>base currency</strong>; the second is the <strong>quote currency</strong>. EUR/USD at 1.0800 means one euro is quoted at 1.08 US dollars.</p>
              <p><strong>Major pairs</strong> include pairs involving the US dollar and other heavily traded currencies. <strong>Minor/cross pairs</strong> exclude USD. <strong>Exotic pairs</strong> often combine a major currency with one from a smaller or emerging market and may have wider costs and lower liquidity.</p>

              <h3>2. Essential terms and definitions</h3>
              <ul>
                <li><strong>Exchange rate:</strong> the quoted price of one currency in another.</li>
                <li><strong>Bid:</strong> the price at which a broker will buy the base currency from you. <strong>Ask:</strong> the price at which it will sell it to you.</li>
                <li><strong>Spread:</strong> the difference between ask and bid; it is one of the costs of trading.</li>
                <li><strong>Pip:</strong> a commonly used unit for measuring price movement. For many pairs it is 0.0001; for JPY pairs it is commonly 0.01. Check the instrument specification.</li>
                <li><strong>Lot:</strong> a trade-size unit. A standard lot is often 100,000 units of the base currency; mini and micro lots are commonly 10,000 and 1,000 units. Broker contract sizes can differ.</li>
                <li><strong>Leverage:</strong> lets you control a larger position relative to your deposit. It magnifies gains and losses and can cause rapid losses.</li>
                <li><strong>Margin:</strong> funds set aside to support a leveraged position. A margin call or stop-out may occur if account equity falls too far.</li>
                <li><strong>Liquidity:</strong> how easily an instrument can be traded without greatly moving its price. <strong>Volatility:</strong> how much and how quickly price changes.</li>
                <li><strong>Slippage:</strong> the difference between the requested price and the price actually filled, often during fast markets or gaps.</li>
                <li><strong>Swap/rollover:</strong> a financing adjustment that may be charged or credited for holding a position overnight; terms vary by broker.</li>
                <li><strong>Drawdown:</strong> a decline from an account’s previous peak. <strong>Equity:</strong> balance plus unrealised profit or loss.</li>
              </ul>

              <h3>3. How prices are displayed</h3>
              <p>In EUR/USD, buying generally means you expect the euro to strengthen against the dollar; selling generally means you expect it to weaken. A long position is a buy position; a short position is a sell position. Both can lose money. Quotes, spreads, fees and execution differ by broker.</p>

              <h3>4. Market sessions and news</h3>
              <p>Forex trading activity is often discussed by the Asian, London and New York sessions. Overlap periods can be busier, but greater activity can also mean faster, less predictable moves. Central-bank decisions, inflation reports, employment data and geopolitical events can move prices sharply. Economic calendars are useful, but announcements do not make price direction certain.</p>

              <h3>5. Reading a candlestick chart</h3>
              <p>Each candle shows four values for its timeframe: <strong>open</strong> (start), <strong>high</strong> (highest), <strong>low</strong> (lowest) and <strong>close</strong> (end). The <strong>body</strong> spans open to close; the <strong>wicks/shadows</strong> show the high and low beyond the body. Colours vary by chart settings. A bullish candle closes above its open; a bearish candle closes below its open. A candle on a 1-hour chart represents one hour, not a prediction of the next hour.</p>
              <p><strong>Common patterns:</strong> doji (open and close are close together), hammer (small body with a long lower wick), shooting star (small body with a long upper wick), engulfing candle (body covers the prior candle’s body). These patterns are not reliable by themselves. Context, trend, location, volatility and confirmation matter; no pattern guarantees a reversal.</p>

              <h3>6. Trends, levels and indicators</h3>
              <ul>
                <li><strong>Uptrend:</strong> price tends to form higher highs and higher lows. <strong>Downtrend:</strong> lower highs and lower lows. Sideways markets move within a range.</li>
                <li><strong>Support:</strong> an area where buying has previously appeared. <strong>Resistance:</strong> an area where selling has previously appeared. These are zones, not guaranteed barriers.</li>
                <li><strong>Moving average (MA):</strong> smooths past prices to help view trend. It lags price and can give false signals in a range.</li>
                <li><strong>RSI:</strong> a momentum indicator often displayed from 0 to 100. Common 70/30 levels are not automatic sell/buy signals.</li>
                <li><strong>MACD:</strong> compares moving averages to study momentum and possible trend changes; it can lag and whipsaw.</li>
                <li><strong>Timeframe:</strong> the duration represented by each candle. Higher and lower timeframes can tell different stories; using more than one does not remove uncertainty.</li>
              </ul>

              <h3>7. Order types</h3>
              <ul>
                <li><strong>Market order:</strong> asks to enter or exit at the best available price; the fill price is not guaranteed.</li>
                <li><strong>Limit order:</strong> aims to buy at or below a specified price, or sell at or above it; it may never fill.</li>
                <li><strong>Stop order:</strong> activates after a trigger price is reached. In fast markets the fill can be worse than the trigger.</li>
                <li><strong>Stop-loss:</strong> an exit instruction intended to limit loss, but gaps and slippage mean the exact loss is not guaranteed.</li>
                <li><strong>Take-profit:</strong> an instruction to close at a target level, subject to execution conditions.</li>
              </ul>

              <h3>8. Risk management and position sizing</h3>
              <p>Decide the maximum acceptable loss <em>before</em> entering. A common learning exercise is to model a small fixed percentage of demo-account equity per trade, but no percentage makes trading safe or guarantees success. Position size depends on account currency, pair, pip value, stop distance and contract rules.</p>
              <p><strong>Illustration:</strong> if a practice account is $1,000 and the hypothetical risk limit is 1%, the planned loss limit is $10 before costs and slippage. This is a maths example, not a recommendation. If the stop is wider, the position size generally needs to be smaller to keep the same planned risk.</p>
              <p><strong>Reward-to-risk ratio:</strong> compares a potential target with the planned risk. A 2:1 ratio means a target twice the planned risk; it does not mean the target is twice as likely to happen. Include spreads, commissions, swaps and slippage in practice calculations. Avoid increasing size to recover losses, and do not risk the whole account on one idea.</p>

              <h3>9. Build a repeatable practice plan</h3>
              <ol>
                <li>Learn one or two currency pairs and the broker’s contract specifications.</li>
                <li>Write clear entry, invalidation/stop, exit and no-trade conditions before opening a demo trade.</li>
                <li>Record the reason, screenshot, timeframe, planned risk, costs, result and lesson in a journal.</li>
                <li>Review a meaningful sample of trades for consistency, drawdown and rule-following; do not judge a method from one win or loss.</li>
                <li>Test strategies across different market conditions and account for spread, fees and slippage. Past results do not predict future results.</li>
              </ol>

              <h3>10. Psychology, scams and common mistakes</h3>
              <p><strong>FOMO</strong> means fear of missing out; <strong>revenge trading</strong> means taking impulsive trades to recover a loss. Both can undermine a plan. Avoid overtrading, moving stops impulsively, using excessive leverage, copying unverified signals and assuming a few wins prove an edge.</p>
              <p>Be cautious of anyone promising guaranteed profits, fixed daily returns, secret indicators or pressure to deposit quickly. Verify broker regulation with the relevant official regulator, understand withdrawal rules and fees, and never share account passwords or remote access. A demo account can teach platform mechanics but does not fully reproduce live emotions or execution.</p>

              <h3>11. Beginner glossary</h3>
              <ul>
                <li><strong>Trading plan:</strong> written rules for when and how you will trade.</li>
                <li><strong>Strategy:</strong> a defined set of conditions for entries, exits and risk.</li>
                <li><strong>Backtesting:</strong> checking rules against historical data; results can be misleading if data or assumptions are poor.</li>
                <li><strong>Forward/demo testing:</strong> trying rules on new or simulated market data before risking money.</li>
                <li><strong>Risk/reward:</strong> the relationship between planned loss and possible gain.</li>
                <li><strong>Fundamental analysis:</strong> studying economic, policy and political factors.</li>
                <li><strong>Technical analysis:</strong> studying price charts, levels and indicators.</li>
                <li><strong>Broker:</strong> the firm or platform that provides access to trading and executes orders.</li>
              </ul>

              <h3>12. Knowledge check</h3>
              <ol>
                <li>What do the base and quote currencies mean?</li>
                <li>What is the difference between spread and slippage?</li>
                <li>Why can leverage increase losses as well as gains?</li>
                <li>What four prices does a candlestick show?</li>
                <li>Why is a stop-loss not a guaranteed maximum loss in every market?</li>
                <li>Why should a strategy be tested after including trading costs?</li>
              </ol>
              <p><strong>Suggested next step:</strong> answer these in your own words, then practise reading charts and recording hypothetical trades in a demo account before considering any live trading.</p>
            </section>
          )}
          <div style={{ fontSize: 20, fontWeight: 800, margin: '28px 0' }}>
            {p.price === 0 ? 'FREE RESOURCE' : p.plan === 'forex' ? 'PREMIUM 2 · FOREX' : 'PREMIUM 1'}
          </div>
          <ProductDetailActions product={p} />
          <div className="notice" style={{ marginTop: 20 }}>
            A product-specific PDF is generated when you download. You must log in or create an account first. Free resources can be claimed at no cost. Premium membership billing and server-side membership enforcement still need to be connected before paid downloads can be securely unlocked.
          </div>
        </div>
      </div>
    </main>
  );
}
