import Papa from "papaparse";

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQQDq0KCvsfUyhg5cpmcJ9KIkRthoDhi95W1k_37Cnid5Ww6A09ZEcJXJkqaMJXCvoiugEWuR22AfDv/pub?gid=1581606071&single=true&output=csv";

export const fetchResponses = async () => {
  const response = await fetch(CSV_URL);
  const csvText = await response.text();
  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });
  return results.data;
};