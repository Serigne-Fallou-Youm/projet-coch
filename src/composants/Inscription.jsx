import React from "react";

function Incription() {
return (
<div className="inscription">
    <h2>Inscription</h2>
    <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">S'inscrire</button>
    </form>
</div>
)
}

export default Incription