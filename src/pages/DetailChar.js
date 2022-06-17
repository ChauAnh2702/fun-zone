import Navbar from '../components/Navbar'
import GapDetail from '../components/GapDetail'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'

export default function DetailChar(props) {
    return (
        <>
            <GapDetail/>
            <Navbar />
            <div className="wrapper wrapper-detail">
                {/* <!-- Home Section --> */}
                <section className="home home-detail home-char" style={{backgroundImage: `url(${props.homeImg})`}}>
                    <div className="home-layer"></div>
                    <div className="home-text">
                        <h1 className="text-shadow">{props.homeTitle}</h1>
                        <a href="#subcribe" className="btn ticket">Reserve</a>
                    </div>
                </section>

                <section className="details-char">
                    <img className="char-img" src={props.img} alt="character"/>
                    <div>
                        <h3 className="heading-deatail">Do you know me?</h3>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{props.name}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{props.age}</td>
                            </tr>
                            <tr>
                                <td>Is afraid of</td>
                                <td>{props.afraid}</td>
                            </tr>
                            <tr>
                                <td>Lives in</td>
                                <td>{props.loc}</td>
                            </tr>
                            <tr>
                                <td>Likes to eat</td>
                                <td>{props.like}</td>
                            </tr>
                            <tr>
                                <td>Dislikes</td>
                                <td>{props.dislike}</td>
                            </tr>
                            <tr>
                                <td>Is really good at</td>
                                <td>{props.good}</td>
                            </tr>
                            <tr>
                                <td>Favourite place in Fun Zone</td>
                                <td>{props.favourite}</td>
                            </tr>
                            <tr>
                                <td>Likes to spend time with</td>
                                <td>{props.time}</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <h3 className="heading-deatail">Want to listen to my stories?</h3>
                        <p>{props.desc}</p>
                    </div>
                    <h3 className="heading-deatail">Where can you find me?</h3>
                </section>

                <section className="map-char">
                    <img src={props.map} alt="map-char"/>
                </section>
            </div>
            <Footer />
            <Overlay />
        </>
    )
}