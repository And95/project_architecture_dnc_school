import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/dnc-logo.png'

// COMPONENTS
import Button from '../../components/Button/Button'

// CONTEXTS
import { AppContext } from '../../contexts/AppContext'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const appContext = useContext(AppContext)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="al-center d-flex">
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} alt="img" /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>Menu</Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : 'closed'}`}>
                        <button className="mobile-menu close-btn" onClick={toggleMenu}>X</button>
                        <ul className="d-flex">
                            <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                            <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                            <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                            <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header