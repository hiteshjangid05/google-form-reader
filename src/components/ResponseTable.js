import React from "react";
import generateHtmlFromTemplate  from "../template/htmlTemplate";
import 'bootstrap/dist/css/bootstrap.min.css';
import html2pdf from "html2pdf.js";

const ResponseTable = ({ responses }) => {
  const handleApprove = (row) => {
    console.log("Approving row:", row);
    const html = generateHtmlFromTemplate(row);

    // Create a temporary container
  const container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  // Generate PDF
  html2pdf()
    .set({ margin: 0, filename: "form.pdf", html2canvas: { scale: 2 } })
    .from(container)
    .save()
    .then(() => {
      document.body.removeChild(container); // Clean up
    });
    // const newWindow = window.open("", "_blank");
    // newWindow.document.write(html);
    // newWindow.document.close();
  };

  return (
    <table className="table table-striped" >
      <thead className="thead-dark">
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
              <button className="btn btn-outline-success" onClick={() => handleApprove(row)}>Approve</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResponseTable;