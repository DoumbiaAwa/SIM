import React from 'react'
import { Link } from 'react-router-dom'
export default function Categorie() {
  return (
    <div style={{marginTop: '150px'}}>
               <div className="container-fluid fruite py-5">
            <div className="container py-5">

                            <div className="col-xl-5 ">
                                <div className="input-group w-100 ">
                                    <input type="search" className="form-control p-3" placeholder="Rechercher" aria-describedby="search-icon-1"/>
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div>
                            </div>

                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-10">

                                {/* card 1 */}
                                <div className="row g-4 justify-content-center">
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-xl-3" >
                                    <Link to="/detail" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="rouned position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img  src={require('./img/fruite-item-5.jpg')} className="img-fluid w-60 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-red px-3 py-1 rounded position-absolute" style= {{top: 10, left: 10}}>Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">2000 GNF / kg</p>
                                                    {/* <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        
                                    </div>
                               
                                    
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
   
  )
}
