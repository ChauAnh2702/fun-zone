import Exp from '../components/Exp'
import Navbar from '../components/Navbar'
import GapDetail from '../components/GapDetail'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

export default function ExpPage() {
    return (
        <>
            <GapDetail/>
            <Navbar />
            <div className="wrapper wrapper-detail">
                {/* <!-- Home Section --> */}
                <section className="home home-detail home-exp">
                    <div className="home-layer"></div>
                    <div className="home-text">
                        <h1 className="text-shadow">Attractions</h1>
                        {/* <a href="#subcribe" className="btn ticket">Reserve</a> */}
                    </div>
                </section>
                
                <Exp />
            </div>
            <Footer />
            <Overlay />
        </>
    )
}