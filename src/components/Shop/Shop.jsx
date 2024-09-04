import React, { useEffect, useState } from 'react';
import './Shop.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Shop() {
    const [accessToken, setAccessToken] = useState('');
    const [familles, setFamilles] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [selectedFamily, setSelectedFamily] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

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

    const handleFamilyClick = (famille) => {
        setSelectedFamily(famille);
    };

    // filtrer par tout 
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    
    // Nouvelle fonction de filtrage
const filterBySearchQuery = (famille, query) => {
    // Convertir toutes les propriétés de la famille en minuscules
    const values = Object.values(famille).map(value => value?.toString().toLowerCase());

    // Vérifier si l'une des valeurs contient la query de recherche
    return values.some(value => value && value.includes(query));
};

// Filtrage des familles
const filteredFamilles = familles
    .filter(famille => famille.nom_produit) // Vérifier si le nom du produit existe
    .filter(famille => filterBySearchQuery(famille, searchQuery)) // Filtrer par toutes les propriétés
    .filter(famille => famille.image) // Filtrer par présence d'image
    .filter(famille => selectedFamily ? famille.nom_produit === selectedFamily.nom_produit : true); // Filtrer par famille sélectionnée

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ marginTop: 150 }}>
            {/* Fruits Shop Start */}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input
                                            type="search"
                                            className="form-control p-3"
                                            placeholder="Rechercher"
                                            aria-describedby="search-icon-1"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                        <span id="search-icon-1" className="input-group-text p-3">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3"></div>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <br />
                                                <h4>Famille de produits</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    {familles
                                                    .filter(famille => famille.nom_produit) // Verifier si le nom de famille est vide
                                                    .map((famille, index) => (
                                                        <li key={index}>
                                                            <div className="d-flex justify-content-between fruite-name">
                                                                <a href="#!" onClick={() => handleFamilyClick(famille)}>
                                                                    <i className="fas fa-apple-alt me-2"></i>{famille.nom_produit}
                                                                </a>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                        {filteredFamilles
                                        .map((famille, index) => (
                                            <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src={famille.image} className="img-fluid w-100 rounded-top" alt={famille.nom_produit} style={{width: '500px', height:'250px' }} />
                                                    </div>
                                                    <div className="text-white bg-red px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>{famille.nom_produit}</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>{famille.nom_produit}</h4>
                                                        {/* Add more details as needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Pagination */}
                                        {/* <div className="col-12">
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
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fruits Shop End */}
        </div>
    );
}
