import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div style={{marginBottom: '200px'}}>
       {/* /* <!-- Modal Search Start --> */} */
       <div style={{marginTop: '-80px'}}>
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginBottom: 50}}>
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
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text" style={{color: 'red'}}>100% Agro-pastoral</h4>
                        <h1 className="mb-5 display-3 text-primary" style={{ fontSize: '2.5rem',textAlign: 'left' }}>Soyez les premiers à connaître les dernières nouvelles.</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>
                            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: '0', right: '25%' }}>Rechercher</button>
                        </div>
                    </div>
                            <div className="col-md-12 col-lg-5">
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

        {/* <!-- Featurs Section Start --> */}
     <div className="categorie py-5">

      <div className="container py-5">
<div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{marginTop: 10}}>
<button type="button" className="btn btn-danger">Découvrez nos Catégories de produits</button>
<br />
<br />
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row g-4">
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>SIM Agricole</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>SIM Bétail</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>SIM Pêche</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>Magasin d'intrants</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* <!-- Répétez les blocs pour chaque groupe de 4 cartes --> */}
    <div className="carousel-item">
      <div className="row g-4">
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 5</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 6</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 7</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="featurs-item text-center rounded bg-vert p-4">
            {/* <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div> */}
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 8</h5>
            </div>
          </div>
        </div>
        {/* <!-- Autres cartes... --> */}
      </div>
    </div>
  </div>
  
  {/* <!-- Contrôles du slider --> */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{marginTop: '30px', marginLeft: '1px'}}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Précédent</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{marginTop: '30px',marginRight: '1px'}}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Suivant</span>
  </button>
</div>

        
      </div>
    </div>
    {/* <!-- Featurs Section End --> */}

    {/* <!-- Fruits Shop Start--> */}
    <div className ="container-fluid fruite py-5">
            <div className ="container py-5">
                <div className ="tab-class text-center">
                    <div className ="row g-4">
                        <div className ="col-lg-4 text-start">
                            <button type="button" className="btn btn-success">Produits récents</button>
                        </div>
                        <div className ="col-lg-8 text-end">
                            <ul className ="nav nav-pills d-inline-flex text-center mb-0">
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-vert rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className ="text-dark" style= {{width: 130}}> All Products</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex py-2 m-2 bg-vert rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className ="text-dark" style= {{width: 130}}>Vegetables</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-vert rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className ="text-dark" style= {{width: 130}}>Fruits</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-vert rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className ="text-dark" style = {{width: 130}}>Bread</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-vert rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                        <span className ="text-dark" style=  {{width: 130}}>Meat</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require('./img/fruite-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img  src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-4.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apricots</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Banana</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style={{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style={{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-color px-3 py-1 rounded position-absolute" style={{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apple</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apricots</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style ={{top: 10, left: 10}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Banana</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')}className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: 10, left: 10,}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">1000 GNF / kg</p>
                                                        {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    {/* <!-- Fruits Shop End--> */}

    {/* <!-- Featurs Start --> */}

    <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="row g-4 justify-content-center">
                    
                    
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-primary rounded border border-primary">
                                <img src={require ('./img/featur-3.jpg')} className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-secondary text-center p-4 rounded">
                                        <h5 className="text-white">Légumes</h5>
                                        <h3 className="mb-0">500 GNF</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-primary rounded border border-primary">
                                <img src={require ('./img/featur-3.jpg')} className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-secondary text-center p-4 rounded">
                                        <h5 className="text-white">Légumes</h5>
                                        <h3 className="mb-0">500 GNF</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-primary rounded border border-primary">
                                <img src={require ('./img/featur-3.jpg')} className="img-fluid rounded-top w-100" alt=""/>
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-secondary text-center p-4 rounded">
                                        <h5 className="text-white">Légumes</h5>
                                        <h3 className="mb-0">500 GNF</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <!-- Featurs End --> */}


        {/* <!-- Banner Section Start--> */}
        <div className="container-fluid banner bg-secondary my-5 ">
            {/* <div className="container "> */}
                <div className="row g-4 align-items-center">
                    <div className="col-lg-9">
                        <div className="py-6">
                            <h1 className="display-3 text-white" style={{fontSize:50}}>Se perdre dans les allées du marché</h1>
                            <p className="fw-normal display-3 text-dark mb-4" style={{fontSize:50}}>Pour découvrir les trésors cachés de chaque boutique.</p>
                            {/* <p className="mb-4 text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p> */}
                            <Link to="/marche" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">Explorer</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="position-relative">
                            <img  src={require ('./img/baner-1.png')} className="img-fluid w-90 rounded" alt=""/>
                            {/* <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style= {{width: 140, height: 140, top: 0, left: 0}}>
                                <h1 style= {{fontSize: 100}}>1</h1>
                                <div className="d-flex flex-column">
                                    <span className="h2 mb-0">50$</span>
                                    <span className="h4 text-muted mb-0">kg</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        {/* <!-- Banner Section End --> */}



       
        {/* <!-- Bestsaler Product Start --> */}
        <div className="container-fluid py-5" style={{marginTop: 60}}>
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style= {{maxwidth: 1000}}>
                    <h1 className="display-6">Découvrez les produits phares du moment</h1>
                    {/* <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p> */}
                </div>
               <br />
                <div className="row g-4" >
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-vert">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-1.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                   
                                    <h4 className="mb-3">300 GNF</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-vert">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-2.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    
                                    <h4 className="mb-3">300 GNF</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-vert">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-3.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    
                                    <h4 className="mb-3">300 GNF</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-vert">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-4.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                   
                                    <h4 className="mb-3">300 GNF</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-vert">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-5.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    
                                    <h4 className="mb-3">300 GNF</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-vert">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-1.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                   
                                   
                                    <h4 className="mb-3">300 GNF</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                  
                   
                    
                  
                </div>
            </div>
        </div>
       
      




    </div>
  )
}
