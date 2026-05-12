import { useState } from "react";

export default function App() {
  const [employee, setEmployee] = useState("");
  const [department, setDepartment] = useState("Operations");

  const [pu, setPu] = useState(4);
  const [trust, setTrust] = useState(4);
  const [risk, setRisk] = useState(2);
  const [aiUsage, setAiUsage] = useState(4);

  const aiAdoption = (
    pu * 0.39 +
    trust * 0.28 +
    aiUsage * 0.33 -
    risk * 0.25
  ).toFixed(2);

  const leadershipEffectiveness = (
    Number(aiAdoption) * 0.74
  ).toFixed(2);

  const organizationalPerformance = (
    Number(leadershipEffectiveness) * 0.69
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "30px"
          }}
        >
          <h1 style={{ fontSize: "36px" }}>
            AILIAS
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "10px"
            }}
          >
            AI Leadership Impact Assessment
            System for Banking Institutions
          </p>
        </div>

        {/* Employee Profile */}
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
                <option>Technology</option>
                <option>Client Services</option>
              </select>
            </div>
          </div>
        </div>

        {/* Assessment Inputs */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "30px"
          }}
        >
          <h2>AI Leadership Assessment</h2>

          <div style={{ marginTop: "20px" }}>
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

          <div style={{ marginTop: "20px" }}>
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

          <div style={{ marginTop: "20px" }}>
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

          <div style={{ marginTop: "20px" }}>
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
        </div>

        {/* KPI Cards */}
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
            <h3>AI Adoption Score</h3>

            <h1>{aiAdoption}</h1>

            <p>
              AI readiness and adoption
              capability
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Leadership Effectiveness</h3>

            <h1>
              {leadershipEffectiveness}
            </h1>

            <p>
              AI-driven leadership
              adaptability
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
              Operational efficiency and
              outcomes
            </p>
          </div>
        </div>

        {/* Readiness */}
        <div
          style={{
            ...cardStyle,
            marginBottom: "30px"
          }}
        >
          <h2>AI Readiness Level</h2>

          <h1>
            {getLevel(Number(aiAdoption))}
          </h1>
        </div>

        {/* Framework */}
        <div style={cardStyle}>
          <h2>
            Proposed AI Leadership Impact
            Framework
          </h2>

          <div style={{ marginTop: "20px" }}>
            {[
              "Perceived Usefulness + Trust - Risk",
              "AI Adoption",
              "Leadership Effectiveness",
              "Organizational Performance"
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

                {index !== 3 && (
                  <div
                    style={{
                      textAlign: "center",
                      marginBottom: "10px",
                      fontSize: "24px"
                    }}
                  >
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
