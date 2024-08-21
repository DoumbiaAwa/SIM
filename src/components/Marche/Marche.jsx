import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Marche() {
  const [marches, setMarches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [magasins, setMagasins] = useState([]);
  const [filter, setFilter] = useState('marche'); // Initialisation du filtre avec 'marche'

  // Gestion du changement de la barre de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Gestion du changement du filtre
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Récupération des marchés
  useEffect(() => {
    fetch('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/marches',  {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiaW50b3UiLCJleHAiOjE3MjQzNDI5Njh9.DDM2W4hMBsRvnUrakWhy3Df9CsCMSzEoPzBNmyTO0jA"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMarches(data))
      .catch(err => console.error('Erreur lors de la récupération du marché:', err));
  }, []);

  // Récupération des magasins
  useEffect(() => {
    fetch('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/magasins', {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiaW50b3UiLCJleHAiOjE3MjQzNDI5Njh9.DDM2W4hMBsRvnUrakWhy3Df9CsCMSzEoPzBNmyTO0jA"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMagasins(data))
      .catch(err => console.error('Erreur lors de la récupération des magasins:', err));
  }, []);

  // Filtrage des marchés ou des magasins en fonction du terme de recherche
  const filteredItems = filter === 'marche'
    ? marches.filter(marche =>
        marche.nom_marche.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : magasins.filter(magasin =>
        magasin.nom_magasin.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div style={{ marginTop: 150, marginBottom: 200 }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for items..."
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-primary" type="button">Rechercher</button>
          </div>
        </div>
        {/* Filtre dynamique */}
        <div className="col-md-2">
          <div className="input-group">
            <select
              className="form-select"
              aria-label="Filter by"
              value={filter}
              onChange={handleFilterChange} // Mise à jour du filtre lors du changement
            >
              <option value="marche">Marché</option>
              <option value="magasin">Boutique</option>
            </select>
          </div>
        </div>
      </div>

      <br />
      {/* Affichage dynamique des éléments filtrés */}
      <div className="d-flex flex-wrap justify-content-center gap-4" style={{ maxWidth: '100%', margin: '0 auto' }}>
        {filteredItems.map((item) => (
          <Link
            to={filter === 'marche' ? `/marche-details/${item.id_marche}` : `/magasin-details/${item.id_magasin}`}
            state={filter === 'marche' ? { marche: item } : { magasin: item }}
            key={filter === 'marche' ? item.id_marche : item.id_magasin}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              className="card"
              style={{ width: '18rem', border: '1px solid green' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="card-body">
                <h5 className="card-title">{filter === 'marche' ? item.nom_marche : item.nom_magasin}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
