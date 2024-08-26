import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

export default function Market_detail() {
  const location = useLocation();
  const marche = location.state.marche;

  // Vérifiez si la latitude et la longitude sont valides
  const isValidCoord = (lat, lng) => {
    return (
      lat && lng &&
      !isNaN(lat) && !isNaN(lng) &&
      lat >= -90 && lat <= 90 &&
      lng >= -180 && lng <= 180
    );
  };


  // Utilisez les coordonnées de 'marche' si elles sont valides, sinon utilisez les coordonnées par défaut
  const defaultPosition = [10.8199236, -14.8981006]; // Coordonnées de la Guinée
  const position = isValidCoord(marche.latitude, marche.longitude)
    ? [marche.latitude, marche.longitude]
    : defaultPosition;
    const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591037.7366769485!2d${position[1]}!3d${position[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1675c59517c9f%3A0x118c9b7b6e7bb788!2sGuinea!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd`;
  return (
    <div style={{ marginTop: 150 }}>
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
                  <h4 className="fw-bold mb-3">{marche.nom_marche}</h4>
                  <p className="mb-3">Superficie: {marche.superficie}</p>
                  <p className="mb-3">Collecteur: {marche.collecteur}</p>
                  <p className="mb-3">Commune: {marche.commune}</p>
                  <p className="mb-3">Code: {marche.code_marche}</p>
                  <p className="mb-4">{marche.description}</p>
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
