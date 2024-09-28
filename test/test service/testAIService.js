const axios = require("axios");

const sendToAI = async () => {
  const aiApiUrl = "https://api.anthropic.com/v1/messages"; // Replace with actual Claude AI API URL
  const API_KEY = `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`;



  const data = {
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1000,
    temperature: 0,
    messages: [
      {
        role: "user",
        content: `Say hello to the world!`,
      },
    ],
  };

  try {
    const response = await axios.post(aiApiUrl, data, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error in AI API request",
      error.response?.data || error.message || error
    );
    throw new Error("AI API request failed");
  }
};

module.exports = {
  sendToAI,
};
