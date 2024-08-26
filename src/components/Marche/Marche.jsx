import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Marche.css'
export default function Marche() {
  const [marches, setMarches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [magasins, setMagasins] = useState([]);
  const [filter, setFilter] = useState('marche');
  const [accessToken, setAccessToken] = useState('');

  // Fonction pour récupérer un nouveau token
  const fetchAccessToken = async () => {
    try {
      const response = await fetch('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          
            "username": "Awa",
            "password": "12345"
          
        })
     
     
      });
      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error('Erreur lors de la récupération du token:', error);
    }
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  // Requête API avec le token
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      });
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  // Récupération des marchés
  useEffect(() => {
    if (accessToken) {
      fetchData('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/marches').then(data => setMarches(data));
    }
  }, [accessToken]);

  // Récupération des magasins
  useEffect(() => {
    if (accessToken) {
      fetchData('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/magasins').then(data => setMagasins(data));
    }
  }, [accessToken]);

  // Filtrage des marchés ou des magasins en fonction du terme de recherche
  const filteredItems = filter === 'marche'
    ? marches.filter(marche =>
        marche.nom_marche.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : magasins.filter(magasin =>
        magasin.nom_magasin.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div style={{ marginTop: 100, marginBottom: 200 }}>
      <div className="search row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for items..."
              aria-label="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" type="button">Rechercher</button>
          </div>
        </div>
        
        <div className="col-md-2">
          <div className="input-group">
            <select
              className="form-select"
              aria-label="Filter by"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            >
              <option value="marche">Marché</option>
              <option value="magasin">Boutique</option>
            </select>
          </div>
        </div>
      </div>

      <br />
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
