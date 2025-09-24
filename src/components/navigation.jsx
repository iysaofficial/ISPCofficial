import NavDropdown from "react-bootstrap/NavDropdown";

// Import CSS
import "../assets/css/styles.css";

const navigation = () => {
  const handleAboutClick = (e) => {
    e.preventDefault();

    // Mendapatkan id dari href
    const targetId = e.target.getAttribute("href").substring(1);

    // Mendapatkan elemen dengan id "about"
    const targetElement = document.getElementById(targetId);

    // Scroll ke elemen tersebut
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
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
              <a className="nav-item nav-link" href="/">
                Home
              </a>
              <a className="nav-item nav-link" href="/lowtahun">
                List of Winners
              </a>
              <NavDropdown title="Certificate" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="2.1"
                  href="https://drive.google.com/drive/folders/1168Gqp_t-une_HfMMhlB8A4tvlbcdxwZ?usp=sharing"
                  target="_blank"
                >
                  Certificate Supervisor 2025
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="2.1"
                  href="https://drive.google.com/drive/folders/1OdGfiXdOXx2UTBY4GflTv9rcH8CO6F0q?usp=sharing"
                  target="_blank"
                >
                  Certificate Supervisor 2024
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gallery" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="3.1"
                  href="https://drive.google.com/drive/folders/1hGC7x3E8gU_achrZ-J0u52uSR2G5R5BL?usp=sharing"
                  target="_blank"
                >
                  2025
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="3.1"
                  href="https://drive.google.com/drive/folders/14Niucp6WAqmeQqTFTdt5A3NW98jsafKz?usp=sharing"
                  target="_blank"
                >
                  2024
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Media" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="4.1"
                  href="/listnews"
                >
                  News from Media
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.1"
                  href="https://drive.google.com/file/d/115ioYB9Yi-oLTRBO2GysgJIoxS_mgI5u/view?usp=sharing"
                  target="_blank"
                >
                  Press Release 2025
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Curation" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="4.2"
                  href="https://drive.google.com/drive/folders/1-3IagOtB_ebgDPgR05Agt3v1ogYUa9Xm?usp=sharing"
                  target="_blank"
                >
                  Curation 2025
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.1"
                  href="https://drive.google.com/drive/folders/1wKdfpoiYnZFSHBtfCtPtdosKWrD0xVaD?usp=drive_link"
                  target="_blank"
                >
                  Curation 2024
                </NavDropdown.Item>
              </NavDropdown>  
              <a className="nav-item nav-link" href="/contact">
                Contact{" "}
              </a>
              <a className="nav-item nav-link" href="/faq">
                FAQ{" "}
              </a>
            </div>
            {/* <div className="ms-lg-3">
              <a
                href=""
                target="_blank"
                className="btn btn-primary btn-action"
              >
                Guide Book
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default navigation;
