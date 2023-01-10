import React from "react";
import { getData } from "../lib/register";
import register from "./../data/register.json";
import https from "https";

function teste({ dados }) {
  return (
    <div>
      <h3>nome: {dados.firstName} </h3>
      <h3>sobrenome: {dados.lastName} </h3>
      <h3>id: {dados.id} </h3>
      <h3>token: {dados.token} </h3>
    </div>
  );
}

export default teste;

export async function getServerSideProps() {
  // const httpsAgent = new https.Agent({
  //   rejectUnauthorized: false,
  // });

  const registerData = register;
  const res = await fetch("http://localhost:5077/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
    // agent: httpsAgent,
  });
  const dados = res.json();
  return {
    props: {
      dados, // will be passed to the page component as props
    },
  };
}
