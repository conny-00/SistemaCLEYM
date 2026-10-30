import React, { useState } from 'react';

export default function LoginDropdown() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Botón principal */}
      <button 
        type="button" 
        onClick={() => setAbierto(!abierto)}
        className="btn-login"
      >
        Iniciar Sesión {abierto ? '▲' : '▼'}
      </button>

      {/* Menú que aparece solo si 'abierto' es true */}
      {abierto && (
        <div className="dropdown-menu">
          <a href="/login?rol=alumno" className="dropdown-item">
            Como Alumno
          </a>
          <a href="/login?rol=docente" className="dropdown-item">
            Como Docente
          </a>
        </div>
      )}
    </div>
  );
}