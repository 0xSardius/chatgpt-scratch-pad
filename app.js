require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function fetchData() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content:
            "gm! Please give me 10 decentralized app ideas for sustainable small projects!",
        },
      ],
    }),
  });
  const data = await response.json();
  console.log(data);
}

fetchData();
