import React from "react";

function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Connexion</h1>
      <input type="text" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Mot de passe" /><br /><br />
      <button>Se connecter</button>
    </div>
  )
}

export default Login;