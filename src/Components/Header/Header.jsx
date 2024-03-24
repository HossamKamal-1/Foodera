import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Main from '../MainButton/MainButton';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useEffect, useState } from 'react';
import './Header.css';

const Header = forwardRef((_, ref) => {
  console.log('header re-render');
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setToggleDarkMode(theme === 'dark');
      document.documentElement.setAttribute('data-bs-theme', theme);
      console.log('settingmode');
    }
    console.log('theme', theme);
  }, []);
  return (
    <header className="sticky-top bg-white" ref={ref}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="website logo" className="brand-image" />
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Links
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto gap-2 text-center text-lg-start">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#explore">Explore Foods</Nav.Link>
                <Nav.Link href="#review">Reviews</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Main.Link title="1800 789 123" />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="d-flex align-items-center gap-3 ms-lg-2">
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

            <label className="dark-mode-label" htmlFor="darkmodeCheck">
              <input
                type="checkbox"
                id="darkmodeCheck"
                checked={toggleDarkMode}
                hidden
                onChange={() => {
                  setToggleDarkMode(!toggleDarkMode);
                  const selectedTheme = !toggleDarkMode ? 'dark' : 'light';
                  localStorage.setItem('theme', selectedTheme);
                  document.documentElement.setAttribute(
                    'data-bs-theme',
                    selectedTheme
                  );
                }}
              />
              <FontAwesomeIcon icon={faMoon} className="moon-icon" />
              <FontAwesomeIcon icon={faSun}  className='sun-icon'/>
              <div className="toggle"></div>
            </label>
          </div>
        </Container>
      </Navbar>
    </header>
  );
});
export default Header;
