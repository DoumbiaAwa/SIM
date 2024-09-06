import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Marche.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

export default function Marche() { 
  const [marches, setMarches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regions, setRegions] = useState([]);  // Correct initialization
  const [selectedRegion, setSelectedRegion] = useState('');  // Separate state for selected region
  const [accessToken, setAccessToken] = useState('');
  const location = useLocation();
  const magasin = location.state;

  // Fetch Access Token
  const fetchAccessToken = async () => {
    try {
      const response = await fetch('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": "Awa",
          "password": "2002"
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
      return null;
    }
  };

  // Fetch Regions
  useEffect(() => {
    if (accessToken) {
      const url = `https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/parametrages/localites/regions`;
      fetchData(url).then(data => {
        if (data && Array.isArray(data)) {
          setRegions(data); 
        } else {
          console.error('Expected regions to be an array, but got:', data);
          setRegions([]); 
        }
      });
    }
  }, [accessToken]);

  // Fetch Marches
  useEffect(() => {
    if (accessToken) {
      const url = `https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/parametrages/marches/marche/listes`;
      fetchData(url).then(data => {
        if (data && Array.isArray(data)) {
          setMarches(data); 
        } else {
          console.error('Expected marches to be an array, but got:', data);
          setMarches([]); 
        }
      });
    }
  }, [accessToken]);

  const isValidCoord = (latitude, longitude) => {
    return (
      latitude && longitude &&
      !isNaN(latitude) && !isNaN(longitude) &&
      latitude >= -90 && latitude <= 90 &&
      longitude >= -180 && longitude <= 180
    );
  };

  const defaultPosition = [10.8199236, -14.8981006]; // Guinea coordinates
  const position = magasin && isValidCoord(magasin.latitude, magasin.longitude)
    ? [magasin.latitude, magasin.longitude]
    : defaultPosition;

  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591037.7366769485!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1675c59517c9f%3A0x118c9b7b6e7bb788!2sGuinea!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd`;

  // Filter marches by search term and selected region
  const filteredItems = marches.filter(marche =>
    marche.nom_marche.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRegion === '' || marche.nom_region === selectedRegion)
  );

  return (
    <div style={{ marginTop: 150, marginBottom: 300, justifyContent: 'center' }}>
      <div className='titre'>
        <br />
        <h3 className='mar'>Trouvez rapidement ce que vous cherchez en filtrant par région <i className='fas fa-search'></i></h3>
      </div>

      <div className="row">
        <div className="col-md-3">
          <iframe
            className="rounded w-100"
            style={{ height: "70vh", width: "100%" }}
            src={googleMapsUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <br />
        </div>

        <div className="col-md-8">
          <div className="input-group" style={{ width: '500px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Recherche"
              aria-label="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {/* Ajouter un filtre de région */}
            <select 
              className="form-select"
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
              style={{ marginLeft: '10px', color:'', backgroundColor:'white'}}
            >
              <option value="">Toutes les régions</option>
              {regions.map((region, index) => (
                <option key={index} value={region.nom_region}>{region.nom_region}</option>
              ))}
            </select>
          </div>
          <br />
          <div className="d-flex flex-wrap justify-content-start gap-5">
            {filteredItems.map((marche) => (
              <Link
                to={`/marche-details/${marche.id_marche}`}
                state={{ marche: marche, marches }}
                key={marche.id_marche}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <motion.div
                  className="card"
                  style={{ width: '14rem', border: '1px solid green' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="card-body">
                    <img src={require('./img/market-icon.jpeg')} alt="" />
                    <h5 className="card-title">{marche.nom_marche}</h5>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
