import Din from '../components/Din'
import Navbar from '../components/Navbar'
import GapDetail from '../components/GapDetail'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

export default function DinPage() {
    return (
        <>
            <GapDetail/>
            <Navbar />
            <div className="wrapper wrapper-detail">
                <section className="home home-detail home-din">
                    <div className="home-layer"></div>
                    <div className="home-text">
                        <h1 className="text-shadow">Leisure and Dinner</h1>
                        {/* <a href="#subcribe" className="btn ticket">Reserve</a> */}
                    </div>
                </section>
            
                <Din />
            </div>
            <Footer />
            <Overlay />
        </>
    )
}