import { useState, useEffect } from "react";
import { logViolation } from "../services/api";
function Exam() {
const [timeLeft, setTimeLeft] = useState(3600);
const [violations, setViolations] = useState(0);

const questions = [
{
question: 'What is the output of console.log(2 + "2")?',
options: ["4", "22", "Error"],
},
{
question: "Which company developed React?",
options: ["Google", "Facebook", "Microsoft"],
},
{
question: "Which hook is used for state management?",
options: ["useState", "useEffect", "useRef"],
},
{
question: "Which language runs in browser?",
options: ["Python", "Java", "JavaScript"],
},
{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Transfer Markup Language",
],
},
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [answers, setAnswers] = useState({});

// Timer
useEffect(() => {
const timer = setInterval(() => {
setTimeLeft((prev) => {
if (prev <= 1) {
clearInterval(timer);
submitExam();
return 0;
}
return prev - 1;
});
}, 1000);


return () => clearInterval(timer);


}, []);

// Tab Switch Detection
useEffect(() => {
const handleVisibility = () => {
if (document.hidden) {
setViolations((prev) => prev + 1);

logViolation("TAB_SWITCH");

console.log("⚠️ Tab Switch Detected");
}
};


document.addEventListener(
  "visibilitychange",
  handleVisibility
);

return () =>
  document.removeEventListener(
    "visibilitychange",
    handleVisibility
  );


}, []);

// Fullscreen Exit Detection
useEffect(() => {
const handleFullscreen = () => {
if (!document.fullscreenElement) {
setViolations((prev) => prev + 1);


logViolation("FULLSCREEN_EXIT");


    console.log(
      "⚠️ Fullscreen Exit Detected"
    );
  }
};

document.addEventListener(
  "fullscreenchange",
  handleFullscreen
);

return () =>
  document.removeEventListener(
    "fullscreenchange",
    handleFullscreen
  );


}, []);

// Auto Terminate
useEffect(() => {
if (violations >= 5) {
alert(
"Exam Terminated - Too Many Violations"
);


  window.location.href = "/";
}


}, [violations]);

const submitExam = () => {
alert("🎉 Exam Completed Successfully");


console.log(
  "Submitted Answers:",
  answers
);

window.location.href = "/";


};

const handleNext = () => {
const updatedAnswers = {
...answers,
[currentQuestion]: selectedAnswer,
};


setAnswers(updatedAnswers);

if (currentQuestion < questions.length - 1) {
  setCurrentQuestion(currentQuestion + 1);

  setSelectedAnswer(
    updatedAnswers[currentQuestion + 1] || ""
  );
} else {
  alert("🎉 Exam Submitted Successfully");

  console.log(
    "Final Answers:",
    updatedAnswers
  );

  window.location.href = "/";
}


};

const mins = Math.floor(timeLeft / 60);
const secs = timeLeft % 60;

return (
<div
style={{
minHeight: "100vh",
background: "#0f172a",
color: "white",
}}
>
{/* Header */}
<div
style={{
background: "#111827",
padding: "20px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
}}
> <h2>Remote Proctoring System</h2>


    <h2>
      ⏳ {String(mins).padStart(2, "0")}:
      {String(secs).padStart(2, "0")}
    </h2>
  </div>

  <h2
    style={{
      textAlign: "center",
      marginTop: "20px",
    }}
  >
    Violations
  </h2>

  <p
    style={{
      textAlign: "center",
      color:
        violations > 0
          ? "red"
          : "lightgreen",
      fontWeight: "bold",
      fontSize: "28px",
    }}
  >
    {violations}
  </p>

  <div style={{ display: "flex" }}>
    {/* Question Navigator */}
    <div
      style={{
        width: "250px",
        background: "#111827",
        minHeight: "90vh",
        padding: "20px",
      }}
    >
      <h2>Questions</h2>

      {questions.map((_, index) => (
        <div key={index}>
          <button
            onClick={() =>
              setCurrentQuestion(index)
            }
            style={{
              background:
                currentQuestion === index
                  ? "#2563eb"
                  : "gray",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Q{index + 1}
          </button>

          <br />
          <br />
        </div>
      ))}
    </div>

    {/* Question Area */}
    <div
      style={{
        flex: 1,
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>
        Question {currentQuestion + 1}
      </h1>

      <p
        style={{
          fontSize: "22px",
        }}
      >
        {
          questions[currentQuestion]
            .question
        }
      </p>

      {questions[
        currentQuestion
      ].options.map((option) => (
        <div key={option}>
          <label
            style={{
              fontSize: "20px",
            }}
          >
            <input
              type="radio"
              name={`q${currentQuestion}`}
              value={option}
              checked={
                selectedAnswer === option
              }
              onChange={(e) =>
                setSelectedAnswer(
                  e.target.value
                )
              }
            />
            {" "}
            {option}
          </label>

          <br />
          <br />
        </div>
      ))}

      <button
        onClick={handleNext}
        style={{
          background: "#2563eb",
          color: "white",
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {currentQuestion ===
        questions.length - 1
          ? "Submit Exam"
          : "Save & Next"}
      </button>
    </div>

    {/* Proctor Panel */}
    <div
      style={{
        width: "300px",
        background: "#111827",
        padding: "20px",
      }}
    >
      <h2>Proctor Status</h2>

      <p>📷 Camera Active</p>
      <p>🖥 Screen Sharing Active</p>
      <p>👤 Face Detected</p>
      <p>🔒 Fullscreen Active</p>
      <p>⚠️ Violations: {violations}</p>
    </div>
  </div>
</div>


);
}

export default Exam;
