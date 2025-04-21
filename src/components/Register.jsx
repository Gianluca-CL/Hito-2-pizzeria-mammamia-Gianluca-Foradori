import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass || !pass2) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    if (pass.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (pass !== pass2) {
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    setMensaje("Registro exitoso ✅");
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={pass} onChange={e => setPass(e.target.value)} />
        <input type="password" placeholder="Confirmar Contraseña" value={pass2} onChange={e => setPass2(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Register;