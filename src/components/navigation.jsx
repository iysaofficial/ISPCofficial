import NavDropdown from 'react-bootstrap/NavDropdown';

// Import CSS
import "../assets/css/styles.css"

const navigation = () => {
    const handleAboutClick = (e) => {
        e.preventDefault();
    
        // Mendapatkan id dari href
        const targetId = e.target.getAttribute('href').substring(1);
    
        // Mendapatkan elemen dengan id "about"
        const targetElement = document.getElementById(targetId);
    
        // Scroll ke elemen tersebut
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
            return (
                // Navbar 
                <section>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                        <div className="container">
                            <img src="./assets/logo/ISPC LOGO.png" width="100" />
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-center"
                                id="navbarNavAltMarkup"
                            >
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link" href="/">Home</a>
                                    <a className="nav-item nav-link" href="/#about">About</a>
                                    {/* <a className="nav-item nav-link" href="#">Liputan Media</a> */}
                                    <a className="nav-item nav-link" href="/faq">FAQ </a>
                                    <NavDropdown title="Certificate" id="nav-dropdown">
                                        <NavDropdown.Item eventKey="3.1" href='https://drive.google.com/drive/folders/1OdGfiXdOXx2UTBY4GflTv9rcH8CO6F0q?usp=sharing' target='_blank'>Certificate Supervisor 2024</NavDropdown.Item>
                                    </NavDropdown>
                                    <a className="nav-item nav-link" href="/contact">Contact </a>
                                </div>
                                <div className='ms-lg-3'>
                                    <a href="https://drive.google.com/file/d/1STnLOXA-9nVlKTTcp9WZ-mY3bjoWDbVA/view?usp=sharing" target='_blank' className="btn btn-primary btn-action">Guide Book</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            );
        };
        
        export default navigation;