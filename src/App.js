import React, { useEffect, useState } from "react";
import {fetchResponses} from "./utils/fetchResponses";
import ResponseTable from "./components/ResponseTable";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponses = async () => {
      const data = await fetchResponses();
      setResponses(data);
      setLoading(false);
    };

    getResponses();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Google Sheet Responses</h2>
      {loading ? (
        <p>Loading responses...</p>
      ) : (
        <ResponseTable responses={responses} />
      )}
    </div>
  );
}

export default App;