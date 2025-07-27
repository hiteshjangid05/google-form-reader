import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function App() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your published CSV URL
  const CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQQDq0KCvsfUyhg5cpmcJ9KIkRthoDhi95W1k_37Cnid5Ww6A09ZEcJXJkqaMJXCvoiugEWuR22AfDv/pub?gid=1581606071&single=true&output=csv";

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setResponses(results.data);
            setLoading(false);
          },
        });
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Google Form Responses</h2>
      {loading ? (
        <p>Loading responses...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              {Object.keys(responses[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {responses.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((value, j) => (
                  <td key={j}>{value}</td>
                ))}
              <td>
                <button>Approve</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
