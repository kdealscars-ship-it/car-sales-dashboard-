"use client";

import { useState } from "react";

export default function Page() {
  const [activeSale, setActiveSale] = useState(false);
  const [dealClosed, setDealClosed] = useState(false);
  const [revenue, setRevenue] = useState<number>(0);
  const [adsSpend, setAdsSpend] = useState<number>(0);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Car Sales Dashboard</h1>

      <div>
        <label>
          <input
            type="checkbox"
            checked={activeSale}
            onChange={() => setActiveSale(!activeSale)}
          />
          Active Sale: {activeSale ? "Active" : "Inactive"}
        </label>
      </div>

      <br />

      <div>
        <p>Revenue Generated</p>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
        />
      </div>

      <br />

      <div>
        <p>Ads Spend</p>
        <input
          type="number"
          value={adsSpend}
          onChange={(e) => setAdsSpend(Number(e.target.value))}
        />
      </div>

      <br />

      <div>
        <label>
          <input
            type="checkbox"
            checked={dealClosed}
            onChange={() => setDealClosed(!dealClosed)}
          />
          Deal Closed
        </label>

        {dealClosed && <p>✔ Deal recorded successfully</p>}
      </div>

      <hr />

      <h3>Summary</h3>
      <p>Revenue: {revenue}</p>
      <p>Ads Spend: {adsSpend}</p>
      <p>Profit: {revenue - adsSpend}</p>
    </div>
  );
}
