import Char from '../components/Char'
import Navbar from '../components/Navbar'
import GapDetail from '../components/GapDetail'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

export default function CharPage() {
    return (
        <>
            <GapDetail/>
            <Navbar />
            <div className="wrapper wrapper-detail">
                {/* <!-- Home Section --> */}
                <section className="home home-detail home-char">
                    <div className="home-layer"></div>
                    <div className="home-text">
                        <h1 className="text-shadow">Park Characters</h1>
                        {/* <a href="#subcribe" className="btn ticket">Reserve</a> */}
                    </div>
                </section>

                <Char/>
            </div>
            <Footer />
            <Overlay />
        </>
    )
}