import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PiCowFill } from "react-icons/pi";



export default function Home() {

    const [accessToken, setAccessToken] = useState('');
    const [familles, setFamilles] = useState([]);
    const [phares, setPhares] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    

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
// recuprer les produit phrares 
useEffect(() => {
  if (accessToken) {
    fetchData('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/parametrages/produits/produits/les-plus-consommer')
      .then(data => {
        setPhares(data);
        setLoading(false);
      })
      .catch(err => setError(err.message));
  }
  }, [accessToken]);

  // recuperer le nom des  familles de produit
  useEffect(() => {
    if (accessToken) {
      fetchData('https://cors-proxy.fringe.zone/http://92.112.194.154:8000/api/parametrages/produits/produit/listes')
        .then(data => {
          setFamilles(data);
          setLoading(false);
        })
        .catch(err => setError(err.message));
    }
    }, [accessToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div style={{marginBottom: '200px'}}>
      <div>

          {/* /* <!-- Modal Search Start --> */} */
          <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal Search End --> */}

{/* <!-- Hero Start --> */}
        <div className="container-fluid py-5 mb-5 hero-header" style={{ maxWidth: '100%' }}>
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7" style={{marginTop:'20px'}}>
                        <h4 className="mb-3 text">100% Agro-pastoral</h4>
                        <h1 className="mb-5 display-3 text-primary" style={{ fontSize: '2.5rem',textAlign: 'left' }}>Système d'Information sur les Marchés en Guinée</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>
                            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: '0', right: '25%' }}>Rechercher</button>
                        </div>
                    </div>
                            <div className="col-md-12 col-lg-5" style={{marginTop:'20px'}}>
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src={require('./img/Homeslide1.jpeg')} className="img-fluid w-100 bg-secondary rounded" style={{ height: '250px' }} alt="First slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide2.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide3.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide4.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide5.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide6.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide7.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide8.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide9.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide10.jpeg')} className="img-fluid w-100 rounded" style={{ height: '250px' }} alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}
      </div>
     


        {/* <!-- categorie Section Start --> */}
        <div className="container-fluid featurs py-5" style={{ height: '200px', display: 'flex', flexWrap: 'wrap' }}>
  <div className="container py-5">
    <button type="button" className="btn btn-danger">Découvrez nos Catégories de produits</button>
    <br />
    {/* Ajout de d-flex et de classes d'espacement pour l'alignement horizontal */}
    <div className="d-flex flex-wrap justify-content-around">
      {/* <!-- Intrant (Agricole) --> */}
      <Link to="/categorie" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="featurs-item text-center rounded p-3">
          <i className="fas fa-seedling fa-5x text-red" style={{ marginBottom: '20px' }}></i>
          <div className="featurs-content text-center">
            <h5>SIM Agricole</h5>
          </div>
        </div>
      </Link>

      {/* <!-- Bétail --> */}
      <Link to="/categorie" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="featurs-item text-center rounded p-3">
          <PiCowFill className="fas fa-cow fa-5x text-red" style={{ marginBottom: '20px' }} />
          <div className="featurs-content text-center">
            <h5>SIM Bétail</h5>
          </div>
        </div>
      </Link>

      {/* <!-- Pêche --> */}
      <Link to="/categorie" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="featurs-item text-center rounded p-3">
          <i className="fas fa-fish fa-5x text-red" style={{ marginBottom: '20px' }}></i>
          <div className="featurs-content text-center">
            <h5>SIM Pêche</h5>
          </div>
        </div>
      </Link>

      {/* <!-- Intrant (Transport) --> */}
      <Link to="/categorie" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="featurs-item text-center rounded p-3">
          <i className="fas fa-truck fa-5x text-red" style={{ marginBottom: '20px' }}></i>
          <div className="featurs-content text-center">
            <h5>SIM Intrant</h5>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>


      {/* <!-- categorie Section end--> */}
<br />
    {/* <!-- Famille produit debut--> */}
    <div className="container-fluid fruite py-5">
  <div className="container py-5">
    <div className="tab-class text-center">
      <div className="row g-4">
        <div className="col-lg-4 text-start">
          <button type="button" className="btn btn-success">Groupes Produits</button>
        </div>
        <div className="col-lg-8 text-end">
          <ul className="nav nav-pills d-inline-flex text-center mb-5">
            <li className="nav-item">
              <a className="d-flex py-2 m-2 bg-vert rounded-pill active" data-bs-toggle="pill" href="#tab-all">
                <span className="text-dark" style={{ width: 130 }}>Tous</span>
              </a>
            </li>
            {Array.from(new Set(familles.map(famille => famille.famille_produit)))
              .slice(0, 3)
              .map((famille_produit, index) => (
                <li className="nav-item" key={index}>
                  <a className="d-flex py-2 m-2 bg-vert rounded-pill" data-bs-toggle="pill" href={`#tab-${index}`}>
                    <span className="text-dark" style={{ width: 160, whiteSpace: 'nowrap' }}>{famille_produit}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="tab-content">
        {/* Onglet "Tous" */}
        <div id="tab-all" className="tab-pane fade show active p-0">
          <div className="row g-4">
            {familles
              .filter(famille => famille.image) // Vérification que l'image existe
              .slice(0, 8)
              .map((famille, index) => (
                <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                  <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img src={famille.image} className="img-fluid w-100 rounded-top" alt={famille.nom_produit} style={{width: '500px', height:'250px' }}/>
                    </div>
                    <div className="text-white bg-color px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>{famille.famille_produit}</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>{famille.nom_produit}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Onglets des familles de produits */}
        {Array.from(new Set(familles.map(famille => famille.famille_produit))).map((famille_produit, index) => (
          <div key={index} id={`tab-${index}`} className="tab-pane fade p-0">
            <div className="row g-4">
              {familles
                .filter(famille => famille.famille_produit === famille_produit && famille.image) // Vérification que l'image existe
                .map((famille, subIndex) => (
                  <div key={subIndex} className="col-md-6 col-lg-4 col-xl-3">
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img">
                        <img src={famille.image} className="img-fluid w-100 rounded-top" alt={famille.nom_produit} style={{width: '500px', height:'250px' }} />
                      </div>
                      <div className="text-white bg-color px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>{famille.famille_produit}</div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>{famille.nom_produit}</h4>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* famille produit fin */}
          

        {/* <!-- marche pub  Section--> */}
      <div className="container-fluid banner my-5">
      <div className="row g-4 align-items-center">
        <div className="col-lg-9">
          {/* Animation d'entrée du titre */}
          <motion.h1 
            className="display-3 text-jaune"
            style={{ fontSize: 50 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Se perdre dans les allées du marché
          </motion.h1>

          {/* Animation d'entrée du paragraphe */}
          <motion.p 
            className="fw-normal display-3 text-dark mb-4"
            style={{ fontSize: 50 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pour découvrir les trésors cachés de chaque boutique.
          </motion.p>

          {/* Animation d'entrée du bouton */}
          <Link to="/marche" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.a
              href="#"
              className="banner-btn btn border-2 border-white rounded-pill text-dar py-3 px-5"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Explorer
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
            {/* <!-- marche pub  Section--> */}    

        {/* <!-- Product phare --> */}
        <div className="container-fluid py-5" style={{marginTop: 60}}>
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style= {{maxwidth: 1000}}>
                    <h1 className="display-7">Découvrez les produits phares du moment</h1>
                    {/* <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p> */}
                </div>
               <br />
               <div className="row g-4">
  {/* Affichage des produits phares, en limitant à 6 avec slice */}
  {phares
  .filter((produit) => produit.image)
  .slice(0, 6).map((produit, index) => (
    <div className="col-lg-6 col-xl-4" key={index}>
      <div className="p-4 rounded bg-vert">
        <div className="row align-items-center">
          <div className="col-6">
            <img src={produit.image} className="img-fluid rounded-circle w-100" alt={produit.nom_produit}  style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
          </div>
          <div className="col-6">
            <a href="#" className="h5">{produit.nom_produit}</a>
            
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
{/* <button type="button" className="btn btn-danger">Voir plus</button> */}

            </div>
        </div>
        

      




    </div>
  )
}