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
  
    // Coordonnées par défaut (Guinée)
    const defaultPosition = [9.9456, -9.6966];
  
    // Utilisez les coordonnées de 'marche' si elles sont valides, sinon utilisez les coordonnées par défaut
    const position = isValidCoord(magasin.latitude, magasin.longitude)
      ? [magasin.latitude, magasin.longitude]
      : defaultPosition;
  
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
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "70vh", width: "100%" }}>
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={position}>
                            <Popup>
                              {magasin.nom_magasin}
                            </Popup>
                          </Marker>
                        </MapContainer>
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
  
