



const Footer = () => {
    return (
        <footer className="">
            <div className="d-flex flex-column mx-auto py-5" style={{"width": "80%"}}>
                <div className="flex-wrap d-flex justify-content-between">
                    <div>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                          
                            <span className="ms-3 h3 fw-bold"><span className='logoColor text-decoration-none'>Healthy</span> <span className='logoColor1'>Solar</span></span>
                        </a>
                        <p className="my-2" style={{"width":"250px"}}>
                            We are creating High Quality Resources and tools to Aid developers during the developement
                            of their projects
                        </p>
                    </div>
                    <div>
                        <p className="h5 mb-4 fw-bold" style={{"font-weight": "600"}}>
                            Overview
                        </p>
                        <div className="d-flex flex-column" style={{"cursor": "pointer", "padding": "0"}}>
                            <a href="/" className="text-decoration-none text-dark">Resources</a>
                            <a href="/" className="text-decoration-none text-dark">About Us</a>
                            <a href="/" className="text-decoration-none text-dark">Contact</a>
                            <a href="/" className="text-decoration-none text-dark">Blog</a>
                        </div>
                    </div>
                    <div>
                        <p className="h5 mb-4 fw-bold" style={{"font-weight": "600"}}>
                            Help
                        </p>
                        <div className="d-flex flex-column" style={{"cursor": "pointer", "padding": "0"}}>
                            <a href="/" className="text-decoration-none text-dark">Support</a>
                            <a href="/" className="text-decoration-none text-dark">Sign Up</a>
                            <a href="/" className="text-decoration-none text-dark">Sign In</a>
                        </div>
                    </div>
                    <div>
                        <p className="h5 mb-4 fw-bold" style={{"font-weight": "600"}}>
                            Products
                        </p>
                        <div className="d-flex flex-column text-dark " style={{"cursor": "pointer", "padding": "0"}}>
                            <a href="/" className="text-decoration-none text-dark">Windframe</a>
                            <a href="/" className="text-decoration-none text-dark">Loop</a>
                            <a href="/" className="text-decoration-none text-dark">Contrast</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-5 mx-auto" style={{"width":"100%"}}>
                    <small className="text-center" style={{"width":"50%", fontSize:"18px"}}>
                        &copy; Devwares, 2024. All rights reserved.
                    </small>
                    <div style={{width:"20%", display:"flex", justifyContent:"space-around", marginLeft:"20px"}}>
                    <button className="btn btn-dark p-3">
                        <i className="fab fa-facebook-f fa-2xl" />
                    </button>
                    <button className="btn btn-dark p-3">
                        <i className="fab fa-twitter fa-2xl" />
                    </button>
                    <button className="btn btn-dark  p-3">
                        <i className="fab fa-instagram fa-2xl" />
                    </button>
                    </div>
                </div>
            </div>
        </footer>
    );


}

export default Footer;