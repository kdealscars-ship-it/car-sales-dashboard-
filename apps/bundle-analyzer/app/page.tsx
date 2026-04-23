"use client";

import { useState } from "react";

export default function Page() {
  const [activeSale, setActiveSale] = useState(false);
  const [dealClosed, setDealClosed] = useState(false);
  const [revenue, setRevenue] = useState<number>(0);
  const [adsSpend, setAdsSpend] = useState<number>(0);

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🚗 Car Sales Dashboard</h1>

      <hr />

      {/* Active Sale */}
      <div style={{ marginTop: 20 }}>
        <label>
          <input
            type="checkbox"
            checked={activeSale}
            onChange={() => setActiveSale(!activeSale)}
          />
          <span style={{ marginLeft: 8 }}>
            Active Sale:{" "}
            <strong style={{ color: activeSale ? "green" : "red" }}>
              {activeSale ? "Active" : "Inactive"}
            </strong>
          </span>
        </label>
      </div>

      {/* Revenue */}
      <div style={{ marginTop: 20 }}>
        <p>💰 Revenue Generated (KSH)</p>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
          style={{ padding: 8, width: "100%" }}
        />
      </div>

      {/* Ads Spend */}
      <div style={{ marginTop: 20 }}>
        <p>📢 Ads Spend (KSH)</p>
        <input
          type="number"
          value={adsSpend}
          onChange={(e) => setAdsSpend(Number(e.target.value))}
          style={{ padding: 8, width: "100%" }}
        />
      </div>

      {/* Deal Closed */}
      <div style={{ marginTop: 20 }}>
        <label>
          <input
            type="checkbox"
            checked={dealClosed}
            onChange={() => setDealClosed(!dealClosed)}
          />
          <span style={{ marginLeft: 8 }}>Deal Closed</span>
        </label>

        {dealClosed && (
          <p style={{ color: "green", marginTop: 10 }}>
            ✔ Deal recorded successfully
          </p>
        )}
      </div>

      <hr style={{ marginTop: 30 }} />

      {/* Summary */}
      <div style={{ marginTop: 20 }}>
        <h3>📊 Summary</h3>
        <p>Revenue: {revenue} KSH</p>
        <p>Ads Spend: {adsSpend} KSH</p>
        <p>
          <strong>Profit: {revenue - adsSpend} KSH</strong>
        </p>
      </div>
    </main>
  );
}
