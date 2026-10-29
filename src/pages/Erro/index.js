import React from "react";
import { Link } from "react-router-dom";
import "./erro.css"

function Erro() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página não encontrada!</h1>
      
      <Link className="voltar" to="/">👉Voltar para a Home</Link>
    </div>
  );
}

export default Erro;