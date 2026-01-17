import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import ProjectsLists from '../components/ProjectsLists/ProjectsLists'

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
                <ProjectsLists />
            </div>
            <Footer />
        </>
    )
}

export default Home