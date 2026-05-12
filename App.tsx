import { useState } from "react";

export default function App() {
  const [employee, setEmployee] = useState("");
  const [department, setDepartment] = useState("Operations");

  const [pu, setPu] = useState(4);
  const [trust, setTrust] = useState(4);
  const [risk, setRisk] = useState(2);
  const [aiUsage, setAiUsage] = useState(4);
  const [decisionSupport, setDecisionSupport] = useState(4);
  const [adaptability, setAdaptability] = useState(4);

  // SEM-PLS Weighted Logic
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
    adaptability * 0.55
  ).toFixed(2);

  const organizationalPerformance = (
    Number(leadershipEffectiveness) * 0.50 +
    Number(aiAdoption) * 0.30
  ).toFixed(2);

  const getLevel = (score: number) => {
    if (score >= 4) return "High";
    if (score >= 2.5) return "Moderate";
    return "Low";
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "30px"
          }}
        >
          <h1 style={{ fontSize: "38px" }}>
            Proposed AI Leadership Impact
            Assessment System for Banking Institutions
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "10px",
              fontSize: "18px"
            }}
          >
            SEM-PLS Based Banking Leadership
            Monitoring & AI Readiness Framework
          </p>
        </div>

        {/* EMPLOYEE PROFILE */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "30px"
          }}
        >
          <h2>Employee Assessment Profile</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "20px"
            }}
          >
            <div>
              <label>Employee Name</label>

              <input
                type="text"
                value={employee}
                onChange={(e) =>
                  setEmployee(e.target.value)
                }
                placeholder="Enter employee name"
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px",
                  border: "1px solid #ccc"
                }}
              />
            </div>

            <div>
              <label>Department</label>

              <select
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  borderRadius: "10px",
                  border: "1px solid #ccc"
                }}
              >
                <option>Operations</option>
                <option>Risk & Compliance</option>
                <option>Client Services</option>
                <option>Technology</option>
                <option>Reporting</option>
              </select>
            </div>
          </div>
        </div>

        {/* INPUT SECTION */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "30px"
          }}
        >
          <h2>AI Leadership Assessment Input</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "25px",
              marginTop: "20px"
            }}
          >
            {/* PU */}
            <div>
              <p>
                Perceived Usefulness (PU): {pu}
              </p>

              <input
                type="range"
                min="1"
                max="5"
                value={pu}
                onChange={(e) =>
                  setPu(Number(e.target.value))
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* TRUST */}
            <div>
              <p>
                Trust in AI (TA): {trust}
              </p>

              <input
                type="range"
                min="1"
                max="5"
                value={trust}
                onChange={(e) =>
                  setTrust(Number(e.target.value))
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* RISK */}
            <div>
              <p>
                Perceived Risk (PR): {risk}
              </p>

              <input
                type="range"
                min="1"
                max="5"
                value={risk}
                onChange={(e) =>
                  setRisk(Number(e.target.value))
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* AI Usage */}
            <div>
              <p>
                AI Usage Frequency (AID): {aiUsage}
              </p>

              <input
                type="range"
                min="1"
                max="5"
                value={aiUsage}
                onChange={(e) =>
                  setAiUsage(Number(e.target.value))
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* Decision */}
            <div>
              <p>
                Decision Support Capability:{" "}
                {decisionSupport}
              </p>

              <input
                type="range"
                min="1"
                max="5"
                value={decisionSupport}
                onChange={(e) =>
                  setDecisionSupport(
                    Number(e.target.value)
                  )
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* Adaptability */}
            <div>
              <p>
                Leadership Adaptability:{" "}
                {adaptability}
              </p>

              <input
                type="range"
                min="1"
                max="5"
                value={adaptability}
                onChange={(e) =>
                  setAdaptability(
                    Number(e.target.value)
                  )
                }
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* KPI SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          <div style={cardStyle}>
            <h3>
              AI Adoption & Readiness Score
            </h3>

            <h1>{aiAdoption}</h1>

            <p>
              Measures AI readiness and
              adoption capability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Decision Quality Index</h3>

            <h1>{decisionQuality}</h1>

            <p>
              Measures AI-supported
              operational decision quality.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>
              Leadership Effectiveness
            </h3>

            <h1>
              {leadershipEffectiveness}
            </h1>

            <p>
              Measures leadership
              adaptability and AI-driven
              transformation capability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>
              Organizational Performance
            </h3>

            <h1>
              {organizationalPerformance}
            </h1>

            <p>
              Measures operational
              efficiency and organizational
              outcomes.
            </p>
          </div>
        </div>

        {/* READINESS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          <div style={cardStyle}>
            <h3>AI Readiness Level</h3>

            <h1>
              {getLevel(Number(aiAdoption))}
            </h1>
          </div>

          <div style={cardStyle}>
            <h3>
              Leadership Impact Level
            </h3>

            <h1>
              {getLevel(
                Number(
                  leadershipEffectiveness
                )
              )}
            </h1>
          </div>
        </div>

        {/* FRAMEWORK */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "30px"
          }}
        >
          <h2>
            Proposed AI Leadership Impact
            Assessment Framework
          </h2>

          <div style={{ marginTop: "20px" }}>
            {[
              "Perceived Usefulness + Trust in AI - Perceived Risk",
              "AI Adoption & AI Readiness",
              "Decision-Making Quality",
              "Leadership Effectiveness",
              "Organizational Performance & Operational Efficiency"
            ].map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    background: "#f3f4f6",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center",
                    marginBottom: "10px",
                    fontWeight: "bold"
                  }}
                >
                  {item}
                </div>

                {index !== 4 && (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "24px",
                      marginBottom: "10px"
                    }}
                  >
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RESEARCH CONTRIBUTION */}
        <div style={cardStyle}>
          <h2>Research Contribution</h2>

          <ul
            style={{
              marginTop: "20px",
              lineHeight: "2"
            }}
          >
            <li>
              Converts SEM-PLS findings into
              a measurable managerial
              framework
            </li>

            <li>
              Supports AI readiness
              assessment in banking
              environments
            </li>

            <li>
              Demonstrates AI-driven
              leadership monitoring
              capability
            </li>

            <li>
              Provides conceptual
              decision-support system for
              banking institutions
            </li>
          </ul>

          <p
            style={{
              marginTop: "30px",
              color: "#666"
            }}
          >
            Source: Developed by the Author
            Based on SEM-PLS Findings
          </p>
        </div>
      </div>
    </div>
  );
}
