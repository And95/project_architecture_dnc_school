import { useContext } from 'react'

// COMPONENTS
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import ProjectsLists from '../components/ProjectsLists/ProjectsLists'

// CONTEXTS
import { AppContext } from '../contexts/AppContext'

function Projects() {
    const appContext = useContext(AppContext)

    return (
        <>
            <Header />
            <Banner image="projects-bg.jpg" title={appContext.languages[appContext.language].menu.projects} />
            <div className="container">
                <ProjectsLists />
            </div>
            <Footer />
        </>
    )
}

export default Projects