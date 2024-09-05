import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation, Link} from 'react-router-dom';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import './Market_details.css'
export default function Market_detail() {


  const location = useLocation();
  const marche = location.state?.marche;
  const { marches } = location.state;
  
//   console.log(location.state);

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
         <div className="container-fluid fruite py-5">

<div className="container py-5">
    {/* <h1 className="mb-4">Fresh fruits shop</h1> */}
    <div className="row g-4">
        <div className="col-lg-12">
            {/* <br />
            <br /> */}
            <div className="row g-6">
                <div className="col-xl-6">
                    <div className="input-group">
                        <input type="search" className="form-control p-3" placeholder="Rechercher" aria-describedby="search-icon-1"/>
                        <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                    </div>
                </div>
                
            </div>
 
            <div className="row g-4">
            <div className="col-lg-3">
      <div className="row g-4">
        <div className="col-lg-12"  style={{marginTop: '-50px'}}>
          <div className="mb-3">
            <h4>Marchés</h4>
            <ul className="list-unstyled fruite-categorie">
              {marches
              .slice(0, 10)
              .map((marche) => (
                <li key={marches.id_marche} className="marche-item">
                 <Link
             to={`/marche-details/${marche.id_marche}`}
             state={{ marche: marche, marches }}
             key={marche.id_marche}
             style={{ textDecoration: 'none', color: 'inherit' }}
>
                    {marche.nom_marche}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>

      
                <div className="col-lg-9">

                    {/* card 1 */}
                     <br />
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-4" >
                            <div className="rouned position-relative fruite-item">
                                <div className="fruite-img">
                                    <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                </div>
                                <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                    <h4>Grapes</h4>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p> */}
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                      
            
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                    <img  src={require('./img/fruite-item-4.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                </div>
                                <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                    <h4>Apricots</h4>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p> */}
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                    <img  src={require('./img/fruite-item-3.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                </div>
                                <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                    <h4>Banana</h4>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p> */}
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12">
                            <div className="pagination d-flex justify-content-center mt-5">
                                <a href="#" className="rounded">&laquo;</a>
                                <a href="#" className="active rounded">1</a>
                                <a href="#" className="rounded">2</a>
                                <a href="#" className="rounded">3</a>
                                <a href="#" className="rounded">4</a>
                                <a href="#" className="rounded">5</a>
                                <a href="#" className="rounded">6</a>
                                <a href="#" className="rounded">&raquo;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
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
                  <h4 className="fw-bold mb-3" style={{fontSize: '45px'}}>{marche.nom_marche}</h4>
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
