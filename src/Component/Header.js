import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav className='headerNav'>
                <div className='d-flex incoLogo'>
                    <div className="p-3 mb-2 header">
                        <h2><span className='logoColor'>Healthy</span> <span className='logoColor1'>Solar</span></h2>

                    </div>
                    <div className='barIcon'>
                        <i className="fa-solid fa-bars Bar-Icon"></i>
                    </div>
                </div>
                <div className='p-3 DivNav'>
                    <ul className='innerList '>
                        <li>
                            <a href=""><Link to="">Home</Link></a>
                        </li>
                        <li>
                            <a href=""><Link to="Calculator">Calculator</Link></a>
                        </li>
                        <li>
                            <a href=""><Link to="about">About</Link></a>
                        </li>
                        <li>
                            <a href=""><Link to="career">Career</Link></a>
                        </li>
                        <li>
                            <a href=""><Link to="contact">Contact</Link></a>
                        </li>
                        

                        <DropdownButton
                            variant=''
                            title="Project"
                            className=" text-white bg-light rounded NavDrop"
                        >
                            <Link to="epc" className='dropdown'><Dropdown.Item href="#/action-1">EPC</Dropdown.Item></Link>
                            <Link to="inc" className='dropdown'><Dropdown.Item href="#/action-2">INC</Dropdown.Item></Link>
                            <Link to="maint" className='dropdown'><Dropdown.Item href="#/action-3">Maint</Dropdown.Item></Link>
                            <Link to="services" className='dropdown'><Dropdown.Item href="#/action-4">Service</Dropdown.Item></Link>
                        </DropdownButton>


                        <form className="d-flex form">
                            <input className="form-control  " type="text" placeholder="Search" style={{ width: "180px", marginLeft: "20px" }} />
                            <button className="btn " type="button">Search</button>
                        </form>

                    </ul>
                </div>

            </nav>

        </>
    );
}

export default Header;