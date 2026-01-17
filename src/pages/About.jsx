import { useContext } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import AboutText from '../components/AboutText/AboutText'

// CONTEXTS
import { AppContext } from '../contexts/AppContext'

function About() {
    const appContext = useContext(AppContext)
    return (
        <>  
            <Header />
            <Banner image="about-bg.jpg" title={appContext.languages[appContext.language].menu.about} />
            <AboutText />
            <Footer />
        </>
    )
}

export default About