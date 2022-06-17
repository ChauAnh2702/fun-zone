import Whatsup from '../components/Whatsup'
import Navbar from '../components/Navbar'
import GapDetail from '../components/GapDetail'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

export default function WhatsupPage() {
    return (
        <>
            <GapDetail/>
            <Navbar />
            <div className="wrapper wrapper-detail">
                {/* <!-- Home Section --> */}
                <section className="home home-detail home-whatsup">
                    <div className="home-layer"></div>
                    <div className="home-text">
                        <h1 className="text-shadow">Shows and Entertainment</h1>
                        {/* <a href="#subcribe" className="btn ticket">Reserve</a> */}
                    </div>
                </section>

                <Whatsup />
            </div>
            <Footer />
            <Overlay />
        </>
    )
}