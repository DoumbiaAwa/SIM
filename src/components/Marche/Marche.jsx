import React from 'react';
import { Link } from 'react-router-dom';
export default function Marche() {
  return (
    
    <div style={{ marginTop: 150 }}>

<div class="row justify-content-center" >
            <div class="col-md-6">
                {/* <!-- Search Bar --> */}
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for items..." aria-label="Search"/>
                    <button class="btn btn-primary" type="button">Rechercher</button>
                </div>
            </div>
            <div class="col-md-4">
                {/* <!-- Filter Dropdown --> */}
                <div class="input-group">
                    <select class="form-select" aria-label="Filter by">
                        <option selected>Filtrer par...</option>
                        <option value="1">Marchée</option>
                        <option value="2">Boutique</option>
                    </select>
                    <button class="btn btn-secondary" type="button">Appliquer</button>
                </div>
            </div>
            </div>
            <br />
    <div className="d-flex flex-wrap justify-content-center gap-3">

        <Link to= "/marche-details"> 
         <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
       </Link>
     
  
      <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      
      <div className="card" style={{ width: '18rem', border: '2px solid green' }}>
        <img className="card-img-top" src={require('./img/baner-1.png')} style={{ width: '100%', height: '150px', objectFit: 'cover' }} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nom</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
  
      {/* Répétez pour les autres cartes */}
    </div>
  </div>
  
                                  
                                 
                                   
                                   
                                    
                                  
                             
  
  )
}

