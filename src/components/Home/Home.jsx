import React from 'react';
import './Home.css';

export default function Home() {
  return (
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
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">100% Agricoles</h4>
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
                                    <img src={require('./img/Homeslide1.jpeg')} className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide2.jpeg')} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    {/* <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a> */}
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={require('./img/Homeslide3.jpeg')} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
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


        {/* <!-- Featurs Section Start --> */}
     <div className="container-fluid featurs py-5">

      <div className="container py-5">
      <button type="button" class="btn btn-danger">Découvrez nos Catégories de produits</button>
        {/* <br/>
        <br /> */}

<div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style={{marginTop: 60}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row g-4">
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 1</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 2</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 3</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 4</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* <!-- Répétez les blocs pour chaque groupe de 4 cartes --> */}
    <div class="carousel-item">
      <div class="row g-4">
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 5</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 6</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
            <div className="featurs-content text-center">
              <h5>Catégorie SIM 7</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="featurs-item text-center rounded bg-light p-4">
            <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
              <i className="fas fa-seedling fa-3x text-white"></i>
            </div>
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Précédent</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Suivant</span>
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
                            <button type="button" class="btn btn-success">Produits récentes</button>
                        </div>
                        <div className ="col-lg-8 text-end">
                            <ul className ="nav nav-pills d-inline-flex text-center mb-5">
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className ="text-dark" style= {{width: 130}}> All Products</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className ="text-dark" style= {{width: 130}}>Vegetables</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className ="text-dark" style= {{width: 130}}>Fruits</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className ="text-dark" style = {{width: 130}}>Bread</span>
                                    </a>
                                </li>
                                <li className ="nav-item">
                                    <a className ="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
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
                                        <h3 className="mb-0">1000cfa</h3>
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
                                        <h3 className="mb-0">1000cfa</h3>
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
                                        <h3 className="mb-0">1000cfa</h3>
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
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src={require ('./img/best-product-4.jpg')} className="img-fluid rounded-top w-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Nom Boutique</h5>
        <p>...</p>
      </div>
    </div>
    {/* Ajoutez d'autres items ici */}
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        {/* <!-- Banner Section End --> */}

       
        {/* <!-- Bestsaler Product Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style= {{maxwidth: 700}}>
                    <h1 className="display-4">Bestseller Products</h1>
                    <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-1.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-2.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-3.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-4.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-5.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src={require ('./img/best-product-1.jpg')} className="img-fluid rounded-circle w-100" alt=""/>
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img  src={require ('./img/fruite-item-1.jpg')}className="img-fluid rounded" alt=""/>
                            <div className="py-4">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img src={require ('./img/fruite-item-2.jpg')} className="img-fluid rounded" alt=""/>
                            <div className="py-4">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img src={require ('./img/fruite-item-3.jpg')} className="img-fluid rounded" alt=""/>
                            <div className="py-4">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img src={require ('./img/fruite-item-4.jpg')} className="img-fluid rounded" alt=""/>
                            <div className="py-2">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Bestsaler Product End --> */}

        {/* <!-- Fact Start --> */}
        <div className="container-fluid py-5">
            <div className="container">
                <div className="bg-light p-5 rounded">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>satisfied customers</h4>
                                <h1>1963</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>quality of service</h4>
                                <h1>99%</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>quality certificates</h4>
                                <h1>33</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>Available Products</h4>
                                <h1>789</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Fact Start --> */}


        {/* <!-- Tastimonial Start --> */}
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="testimonial-header text-center">
                    <h4 className="text-primary">Our Testimonial</h4>
                    <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style= {{bottom: 30, right: 0}}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                    <img src={require ('./img/testimonial-1.jpg')}className="img-fluid rounded" style= {{width: 100, height: 100,}} alt=""/>
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style= {{bottom: 30, right: 0}}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                    <img src={require ('./img/testimonial-1.jpg')} className="img-fluid rounded" style= {{width: 100, height: 100}} alt=""/>
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style= {{bottom: 30, right: 0}}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                    <img src={require ('./img/testimonial-1.jpg')} className="img-fluid rounded" style= {{width: 100, height: 100}} alt=""/>
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Tastimonial End --> */}

      




    </div>
  )
}
