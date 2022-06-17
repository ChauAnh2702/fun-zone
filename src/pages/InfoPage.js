import Info from '../components/Info'
import Navbar from '../components/Navbar'
import GapDetail from '../components/GapDetail'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

export default function InfoPage() {
    return (
        <>
            <GapDetail/>
            <Navbar />
            <div className="wrapper wrapper-detail">
                {/* <!-- Home Section --> */}
                <section className="home home-detail home-info">
                    <div className="home-layer"></div>
                    <div className="home-text">
                        <h1 className="text-shadow">Contact Us</h1>
                        {/* <a href="#subcribe" className="btn ticket">Reserve</a> */}
                    </div>
                </section>

                <Info/>
            </div>
            <Footer />
            <Overlay />
        </>
    )
}