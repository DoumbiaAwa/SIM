import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Marche.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

export default function Marche() {
  const [marches, setMarches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [page, setPage] = useState(0); // État pour la page
  const [limit, setLimit] = useState(100); // État pour la limite
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
    }
  };

  // Fetch markets
  useEffect(() => {
    if (accessToken) {
      const url = `https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/parametrages/marches/pagination/par-page?page=${page}&limit=${limit}`;
      fetchData(url).then(data => {
        if (data && Array.isArray(data.data)) {
          setMarches(data.data); // Correctly set the marches state
        } else {
          console.error('Expected marches to be an array, but got:', data);
          setMarches([]); // Fallback to an empty array
        }
      });
    }
  }, [accessToken, page, limit]);
  

  const isValidCoord = (latitude, longitude) => {
    return (
      latitude && longitude &&
      !isNaN(latitude) && !isNaN(longitude) &&
      latitude >= -90 && latitude <= 90 &&
      longitude >= -180 && longitude <= 180
    );
  };

  const defaultPosition = [10.8199236, -14.8981006]; // Guinea coordinates
  const position = marche && isValidCoord(marche.latitude, marche.longitude)
    ? [marche.latitude, marche.longitude]
    : defaultPosition;

  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591037.7366769485!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1675c59517c9f%3A0x118c9b7b6e7bb788!2sGuinea!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd`;

 
  return (
    <div style={{ marginTop: 150, marginBottom: 300, justifyContent: 'center' }}>
      <div className='titre'>
        <br />
        <h3 className='mar'>Trouvez rapidement ce que vous cherchez  par  Marché suivi <i className='fas fa-search'></i></h3>
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
          {/* <div className="mb-3 g-2">
            <br />
            <h4>Categories</h4>

            <ul className="list-unstyled fruite-categorie">
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="#"><i className="fas fa-apple-alt me-2"></i>Agricole</a>
                  <span>(3)</span>
                </div>
              </li>
              <br />
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="#"><i className="fas fa-apple-alt me-2"></i>Bétail</a>
                  <span>(5)</span>
                </div>
              </li>
              <br />
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="#"><i className="fas fa-apple-alt me-2"></i> Pêche</a>
                  <span>(2)</span>
                </div>
              </li>
              <br />
              <li>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="#"><i className="fas fa-apple-alt me-2"></i>Intrant</a>
                  <span>(8)</span>
                </div>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="col-md-9">
          <div className="input-group" style={{ width: '500px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for items..."
              aria-label="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {/* <select
              className="form-select"
              aria-label="Filter by"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            > */}
              {/* <option value="marche">Marché</option>
              <option value="magasin">Magasin</option> */}
            {/* </select> */}
          </div>
          <br />
          <div className="d-flex flex-wrap justify-content-start gap-5">
            {marches.map((item) => (
              <Link
                to={filter === 'marche' ? `/marche-details/${item.id_marche}` : `/magasin-details/${item.id_magasin}`}
                state={filter === 'marche' ? { marche: item } : { magasin: item }}
                key={filter === 'marche' ? item.id_marche : item.id_magasin}
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
                    <h5 className="card-title">{filter === 'marche' ? item.nom_marche : item.nom_magasin}</h5>
                    <p className="card-text">{item.description}</p>
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
