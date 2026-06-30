import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
const [violations, setViolations] = useState([]);

useEffect(() => {
loadViolations();


const interval = setInterval(
  loadViolations,
  3000
);

return () =>
  clearInterval(interval);


}, []);

const loadViolations = async () => {
try {
const res = await axios.get(
"http://127.0.0.1:8000/violations"
);


  setViolations(res.data);
} catch (error) {
  console.error(
    "Failed to load violations",
    error
  );
}


};

return (
<div
style={{
minHeight: "100vh",
background: "#0f172a",
color: "white",
padding: "30px",
}}
>
<h1
style={{
textAlign: "center",
marginBottom: "20px",
}}
>
Admin Dashboard </h1>


  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      background: "#111827",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            border: "1px solid white",
            padding: "10px",
          }}
        >
          Candidate
        </th>

        <th
          style={{
            border: "1px solid white",
            padding: "10px",
          }}
        >
          Email
        </th>

        <th
          style={{
            border: "1px solid white",
            padding: "10px",
          }}
        >
          Violation
        </th>

        <th
          style={{
            border: "1px solid white",
            padding: "10px",
          }}
        >
          Time
        </th>
      </tr>
    </thead>

    <tbody>
      {violations.length === 0 ? (
        <tr>
          <td
            colSpan="4"
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            No Violations Found
          </td>
        </tr>
      ) : (
        violations.map((v, index) => (
          <tr key={index}>
            <td
              style={{
                border:
                  "1px solid white",
                padding: "10px",
              }}
            >
              {v.name}
            </td>

            <td
              style={{
                border:
                  "1px solid white",
                padding: "10px",
              }}
            >
              {v.email}
            </td>

            <td
              style={{
                border:
                  "1px solid white",
                padding: "10px",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {v.type}
            </td>

            <td
              style={{
                border:
                  "1px solid white",
                padding: "10px",
              }}
            >
              {v.timestamp}
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>


);
}

export default Admin;
