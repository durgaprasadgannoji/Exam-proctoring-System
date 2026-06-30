import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const logViolation = async (type) => {
  try {
    await axios.post(
      `${API_URL}/log-violation`,
      {
        name: localStorage.getItem("candidateName"),
        email: localStorage.getItem("candidateEmail"),
        type,
        timestamp: new Date().toISOString(),
      }
    );

    console.log("Violation Logged:", type);

  } catch (error) {
    console.error(error);
  }
};

export const uploadScreenshot = async (file) => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post(
      `${API_URL}/upload-screenshot`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(
      "Screenshot Uploaded:",
      response.data
    );

  } catch (error) {
    console.error(
      "Screenshot Upload Failed:",
      error
    );
  }
};