import React from 'react'

export default function Shop_details() {
  return (
    <div>
      
      {/* <!-- Single Product Start --> */}
        <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    <div className="col-lg-8 col-xl-9">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <a href="#">
                                        <img  src={require('./img/single-item.jpg')}  className="img-fluid rounded" alt="Image"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-bold mb-3">Brocoli</h4>
                                <p className="mb-3">Category: Vegetables</p>
                                <h5 className="fw-bold mb-3">300 cfa</h5>
                                
                                <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                                
                                {/* <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a> */}
                            </div>
    
                        </div>
                    </div>
                </div>
                {/* <h1 className="fw-bold mb-0">Related products</h1> */}
                <div className="vesitable">
                    <div className="owl-carousel vegetable-carousel justify-content-center">
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img  src={require('./img/vegetable-item-6.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img  src={require('./img/vegetable-item-1.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img src={require('./img/vegetable-item-4.jpg')}  className="img-fluid w-100 rounded-top bg-light" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Banana</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img src={require('./img/vegetable-item-4.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Bell Papper</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img src={require('./img/vegetable-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Potatoes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img src={require('./img/vegetable-item-6.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img src={require('./img/vegetable-item-5.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Potatoes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img src={require('./img/vegetable-item-6.jpg')} className="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style= {{top: 10, right: 10}}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Single Product End --> */}
    </div>
  )
}
