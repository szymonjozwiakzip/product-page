import React from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#start">Start</a></li>
        <li><a href="#prosun">Ochrona UV</a></li>
        <li><a href="#tested">Testy</a></li>
        <li><a href="#aloe">Pielęgnacja</a></li>
        <li><a href="#hydration">Nawilżenie</a></li>
        <li><a href="#usage">Sposób użycia</a></li>
        <li><a href="#composition">Skład</a></li>
        <li><a href="#contact">Kontakt</a></li>
        <li><a href="#map">Tu jesteśmy</a></li>
      </ul>
    </nav>
  );
}
