// src/components/ResponseTable.js

import React, { useEffect, useState } from "react";
import generateHtmlFromTemplate from "../template/htmlTemplate";
import html2pdf from "html2pdf.js";
import "bootstrap/dist/css/bootstrap.min.css";

const CLIENT_ID = "36420454282-q6a1nbns8dme9nvt36r364nv7tmq3lqb.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/drive.file";

const ResponseTable = ({ responses }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [tokenClient, setTokenClient] = useState(null);

  useEffect(() => {
    if (window.google && window.google.accounts) {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (tokenResponse) => {
          if (tokenResponse?.access_token) {
            setAccessToken(tokenResponse.access_token);
          } else {
            console.error("Token response missing access_token:", tokenResponse);
          }
        },
      });

      setTokenClient(client);
    } else {
      console.error("Google Identity Services SDK not loaded.");
    }
  }, []);

  const signIn = () => {
    if (!tokenClient) {
      alert("Google SDK not ready. Please wait...");
      return;
    }
    tokenClient.requestAccessToken();
  };

  const signOut = () => {
    setAccessToken(null); // Clear token
    alert("Signed out.");
  };

  const uploadPDFToDrive = async (row,pdfBlob, filename) => {
    if (!accessToken) {
      alert("You must sign in first.");
      return;
    }

    const metadata = {
      name: filename || "Generated.pdf",
      mimeType: "application/pdf",
      parents: ["17nNji-rCXoRDPmZ9FZAMk3MGE2aOazoT"], // Replace with your Drive folder ID
    };

    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    form.append("file", pdfBlob);

    const res = await fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
      {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer " + accessToken,
        }),
        body: form,
      }
    );

    const data = await res.json();
    const fileUrl = `https://drive.google.com/file/d/${data.id}/view?usp=drive_link`;

  // ✅ WhatsApp message with clickable link
  const message = `Hello ${row["EMPLOYEE NAME\nकर्मचारी का नाम"]},\n\nPlease find your form at the link below:\n${fileUrl}`;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = `+91${row["EMPLOYEE'S WhatsApp Number\nकर्मचारी के WhatsApp नंबर "]}`// Make sure it includes country code like "918123456789"
  console.log(encodedMessage, phoneNumber);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "whatsappWindow");
  console.log("File uploaded:", data);
  alert(`Hello ${row["EMPLOYEE NAME\nकर्मचारी का नाम"]},\n Please find your form at link : ` + `https://drive.google.com/file/d/${data.id}/view?usp=drive_link`);
  };

  const handleApprove = async (row) => {
    if (!accessToken) {
      alert("Please sign in with Google first.");
      return;
    }

    const html = generateHtmlFromTemplate(row);
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);

    const pdfBlob = await html2pdf()
      .set({ margin: 0, filename: "form.pdf", html2canvas: { scale: 2 } })
      .from(container)
      .outputPdf("blob");

    document.body.removeChild(container);

    const fileName = `Form-${row["EMPLOYEE NAME\nकर्मचारी का नाम"] || "Response"}.pdf`;
    await uploadPDFToDrive(row, pdfBlob, fileName);
  };

  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        {!accessToken ? (
          <button className="btn btn-primary" onClick={signIn}>
            🔐 Sign in with Google
          </button>
        ) : (
          <button className="btn btn-danger" onClick={signOut}>
            🚪 Sign out
          </button>
        )}
      </div>

      <table className="table table-striped">
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
                <button
                  className="btn btn-outline-success"
                  onClick={() => handleApprove(row)}
                  disabled={!accessToken}
                >
                  Approve & Upload
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponseTable;
