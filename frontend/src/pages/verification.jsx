import { useEffect, useRef, useState } from "react";
import FaceDetection from "../components/FaceDetection";
import { useNavigate } from "react-router-dom";

function Verification() {
  const videoRef = useRef(null);

  const [cameraReady, setCameraReady] = useState(false);
  const [screenReady, setScreenReady] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const navigate = useNavigate();

  // Start Camera
  useEffect(() => {
    startCamera();
  }, []);

  // Tab Switch Detection
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        alert("⚠️ Tab Switching Detected!");
        console.log("Violation: Tab Switch");
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    ;

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
        alert("⚠️ Fullscreen Exited!");
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

  const startCamera = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraReady(true);
      setCameraError("");
    } catch (err) {
      console.error(err);

      setCameraReady(false);

      setCameraError(
        err.message || "Unable to access camera"
      );
    }
  };

  const startScreenShare = async () => {
    try {
      const displayStream =
        await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

      setScreenReady(true);

      displayStream.getVideoTracks()[0].onended =
        () => {
          setScreenReady(false);

          alert(
            "⚠️ Screen sharing stopped!"
          );
        };
    } catch (err) {
      console.error(err);

      alert(
        "Screen sharing is required."
      );
    }
  };

  const enterFullscreen = () => {
    document.documentElement.requestFullscreen();
  };

 const continueToExam = () => {
  navigate("/exam");
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <FaceDetection />

      <h1
        style={{
          fontSize: "60px",
          marginBottom: "30px",
        }}
      >
        Candidate Verification
      </h1>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "900px",
          maxWidth: "95%",
          height: "500px",
          borderRadius: "16px",
          border: "2px solid white",
          background: "#000",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          marginTop: "25px",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        <p>
          Camera Status:
          {cameraReady
            ? " ✅ Active"
            : " ❌ Not Active"}
        </p>

        <p>
          Screen Share:
          {screenReady
            ? " ✅ Active"
            : " ❌ Not Active"}
        </p>
      </div>

      {cameraError && (
        <p
          style={{
            color: "red",
            marginTop: "10px",
          }}
        >
          {cameraError}
        </p>
      )}

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={enterFullscreen}
          style={{
            padding: "14px 30px",
            background: "#9333ea",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Enter Fullscreen
        </button>

        <button
          onClick={startScreenShare}
          style={{
            padding: "14px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Start Screen Sharing
        </button>
      </div>

      {cameraReady && screenReady && (
        
        
       <button
  onClick={continueToExam}
  style={{
    marginTop: "25px",
    padding: "14px 30px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
  }}
>
  Continue To Exam
</button>
      )}
    </div>
  );
}

export default Verification;