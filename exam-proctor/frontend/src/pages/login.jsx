import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");

const startVerification = () => {
localStorage.setItem("candidateName", name);
localStorage.setItem("candidateEmail", email);

navigate("/verification");

};

return (
<div
style={{
minHeight: "100vh",
background: "#000000",
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
<div
style={{
width: "450px",
padding: "40px",
borderRadius: "20px",
background: "#111111",
border: "1px solid #333",
boxShadow: "0px 0px 30px rgba(37,99,235,0.3)",
}}
>
<h1
style={{
color: "white",
textAlign: "center",
marginBottom: "30px",
fontSize: "32px",
}}
>
Online Exam Portal </h1>

    <input
      type="text"
      placeholder="Candidate Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{
        width: "100%",
        padding: "14px",
        marginBottom: "15px",
      }}
    />

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        width: "100%",
        padding: "14px",
        marginBottom: "15px",
      }}
    />

    <button
      onClick={startVerification}
      style={{
        width: "100%",
        padding: "14px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Start Verification
    </button>
  </div>
</div>

);
}

export default Login;
