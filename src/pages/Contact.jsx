import { useContext } from 'react'

// COMPONENTS
import ContactForm from '../components/ContactForm/ContactForm'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'

// CONTEXTS
import { AppContext } from '../contexts/AppContext'

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner image="contact-bg.jpg" title={appContext.languages[appContext.language].menu.contact} />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact