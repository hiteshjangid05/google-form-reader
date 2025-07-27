import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function App() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your published CSV URL
  const CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5JcQrJmXSJ4FWFLXgR6wYmor08ww8159YjzGFH7XlJT1XkzhAff2m5j043ixe0Ll8U1fNkDtt8TdN/pub?gid=173376634&single=true&output=csv";

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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
