import { useEffect } from "react";
import { logViolation, uploadScreenshot } from "../services/api";

function FaceDetection() {
  useEffect(() => {
    const captureScreenshot = async () => {
      const video = document.querySelector("video");

      if (!video) return;

      const canvas = document.createElement("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
      );

      canvas.toBlob(
        async (blob) => {
          const file = new File(
            [blob],
            `violation-${Date.now()}.png`,
            {
              type: "image/png",
            }
          );

          await uploadScreenshot(file);
        },
        "image/png"
      );
    };

    const handleVisibility = async () => {
      if (document.hidden) {
        console.log("⚠️ TAB SWITCH");

        await logViolation("TAB_SWITCH");

        await captureScreenshot();

        alert("⚠️ Tab Switch Detected");
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

  return null;
}

export default FaceDetection;