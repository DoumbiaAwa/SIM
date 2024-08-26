import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

export default function Magasin_details() {
    const location = useLocation();
    const magasin = location.state.magasin;
    console.log(location.state.magasin)
    // Vérifiez si la latitude et la longitude sont valides
    const isValidCoord = (latitude, longitude) => {
      return (
        latitude && longitude &&
        !isNaN(latitude) && !isNaN(longitude) &&
        latitude >= -90 && latitude <= 90 &&
        longitude >= -180 && longitude <= 180
      );
    };
  
    const defaultPosition = [10.8199236, -14.8981006]; // Coordonnées de la Guinée
    const position = isValidCoord(magasin.latitude, magasin.longitude)
      ? [magasin.latitude, magasin.longitude]
      : defaultPosition;
    
    const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591037.7366769485!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1675c59517c9f%3A0x118c9b7b6e7bb788!2sGuinea!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd`;
    
    return (
      <div style={{ marginTop: 100 }}>
        <div className="container-fluid py-5 mt-5" style={{ background: 'linear-gradient(rgba(54, 159, 74, 0.7), rgba(255, 255, 255, 0.7))' }}>
          <div className="container py-9">
            <div className="row g-8 mb-9">
              <div className="col-lg-12 col-xl-12">
                <div className="row g-8 align-items-center">
                  <div className="col-lg-7">
                    <br />
                    <div className="border rounded">
                      <div style={{ height: '70vh', width: '100%' }}>
                      <iframe 
  className="rounded w-100" 
  style={{ height: "70vh", width: "100%" }} 
  src={googleMapsUrl} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 text-start">
                    <h4 className="fw-bold mb-3"> {magasin.nom_magasin}</h4>
                    <p className="mb-3">Capacité: {magasin.capacite}</p>
                    <p className="mb-3">Collecteur: {magasin.collecteur}</p>
                    <p className="mb-3">Commune: {magasin.commune}</p>
                    <p className="mb-3">Code: {magasin.code_marche}</p>
                    <p className="mb-4">{magasin.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //produit */}
      </div>
    );
  }
  
