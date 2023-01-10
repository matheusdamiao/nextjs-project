import register from "./../data/register.json";

export async function getData() {
  const registerData = register;
  const httpsAgent = new Https.Agent({
    rejectUnauthorized: false,
  });

  const res = await fetch("https://localhost:7291/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
    agent: httpsAgent,
  });
  return res.json();
}
