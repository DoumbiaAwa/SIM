import React from 'react';
import './Shop.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Shop() {

    

  return (
    <div style={{marginTop:150}}>
        
        {/* <!-- Fruits Shop Start--> */}
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                {/* <h1 className="mb-4">Fresh fruits shop</h1> */}
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            <div className="col-xl-3">
                                <div className="input-group w-100 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="Rechercher" aria-describedby="search-icon-1"/>
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                            <div className="col-6"></div>
                            <div className="col-xl-3">
                                {/* <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label for="fruits">Default Sorting:</label>
                                    <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="volvo">Nothing</option>
                                        <option value="saab">Popularity</option>
                                        <option value="opel">Organic</option>
                                        <option value="audi">Fantastic</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <br />
                                            <h4>Categories</h4>
                                            
                                            <ul className="list-unstyled fruite-categorie">
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Apples</a>
                                                        <span>(3)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Oranges</a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Strawbery</a>
                                                        <span>(2)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Banana</a>
                                                        <span>(8)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between fruite-name">
                                                        <a href="#"><i className="fas fa-apple-alt me-2"></i>Pumpkin</a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                            <div className="col-lg-9">

                                {/* card 1 */}
                                
                                <div className="row g-4 justify-content-center">
                                    <div className="col-md-6 col-lg-6 col-xl-4" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img   src={require('./img/fruite-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
                                                <img  src={require('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Raspberries</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
                                                <img  src={require('./img/fruite-item-1.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Oranges</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
                                                <img  src={require('./img/fruite-item-2.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10,}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Raspberries</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Oranges</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
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
        {/* <!-- Fruits Shop End--> */}
    </div>
  )
}
