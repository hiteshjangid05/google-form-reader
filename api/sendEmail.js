// /api/sendEmail.js

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Only POST allowed" });

  const { to, name, link } = req.body;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": "ZURq3DSscXkgvGy4", // Add this in Vercel
    },
    body: JSON.stringify({
      sender: { name: "test", email: "jangid.hitesh2112@gmail.com" }, // Must match verified sender
      to: [{ email: to, name }],
      subject: "📄 Your Form is Ready",
      htmlContent: `
        <p>Hello <strong>${name}</strong>,</p>
        <p>Your form is ready: <a href="${link}">${link}</a></p>
        <p>Regards,<br/>Your App</p>
      `,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    return res.status(500).json({ success: false, error: result });
  }

  res.status(200).json({ success: true });
}
