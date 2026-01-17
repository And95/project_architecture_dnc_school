import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

// ASSETS
import BrazilLogo from '../../assets/brazil-icon.svg'
import FacebookLogo from '../../assets/facebook-icon.svg'
import InstagramLogo from '../../assets/instagram-icon.svg'
import LinkedinLogo from '../../assets/linkedin-icon.svg'
import Logo from '../../assets/dnc-logo.png'
import TwitterLogo from '../../assets/twitter-icon.svg'
import UsaLogo from '../../assets/usa-icon.svg'

// COMPONENTS
import Button from '../../components/Button/Button'

// CONTEXTS
import { AppContext } from '../../contexts/AppContext'

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer className="al-center d-flex">
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} alt="img" className="footer-logo" />
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="#" target="_blank"><img src={FacebookLogo} alt="img" /></a>
                            <a href="#" target="_blank"><img src={InstagramLogo} alt="img" /></a>
                            <a href="#" target="_blank"><img src={LinkedinLogo} alt="img" /></a>
                            <a href="#" target="_blank"><img src={TwitterLogo} alt="img" /></a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link className="grey-1-color" to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link className="grey-1-color" to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link className="grey-1-color" to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link className="grey-1-color" to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={BrazilLogo} alt="star" height="29px" />
                        </Button> 
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={UsaLogo} alt="star" height="29px" />
                        </Button> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer