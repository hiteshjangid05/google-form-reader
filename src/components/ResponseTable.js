import React from "react";
import generateHtmlFromTemplate  from "../template/htmlTemplate";

const ResponseTable = ({ responses }) => {
  const handleApprove = (row) => {
    console.log("Approving row:", row);
    const html = generateHtmlFromTemplate(row);
    const newWindow = window.open("", "_blank");
    newWindow.document.write(html);
    newWindow.document.close();
  };

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Serial No</th>
          {Object.keys(responses[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {responses.map((row, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            {Object.values(row).map((value, j) => (
              <td key={j}>{value}</td>
            ))}
            <td>
              <button onClick={() => handleApprove(row)}>Approve</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResponseTable;