import React, { useState } from "react";

export default function App() {
  const [pu, setPu] = useState(4);

  return (
    <div style={{ padding: "40px" }}>
      <h1>AILIAS Dashboard</h1>

      <p>Perceived Usefulness: {pu}</p>

      <input
        type="range"
        min="1"
        max="5"
        value={pu}
        onChange={(e) => setPu(Number(e.target.value))}
      />
    </div>
  );
}