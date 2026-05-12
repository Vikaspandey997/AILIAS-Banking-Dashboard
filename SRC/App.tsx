import { useState } from "react";

export default function App() {
  const [employee, setEmployee] = useState("");
  const [department, setDepartment] =
    useState("Operations");

  const [pu, setPu] = useState(4);
  const [trust, setTrust] = useState(4);
  const [risk, setRisk] = useState(2);
  const [aiUsage, setAiUsage] = useState(4);
  const [decisionSupport, setDecisionSupport] =
    useState(4);
  const [adaptability, setAdaptability] =
    useState(4);

  // SEM-PLS weighted logic
  const aiAdoption = (
    pu * 0.39 +
    trust * 0.28 +
    aiUsage * 0.33 -
    risk * 0.25
  ).toFixed(2);

  const decisionQuality = (
    Number(aiAdoption) * 0.63 +
    decisionSupport * 0.37
  ).toFixed(2);

  const leadershipEffectiveness = (
    Number(decisionQuality) * 0.45 +
    adaptability
