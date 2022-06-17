import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div id="footer" className="footer">
            <h3>subcribe for more</h3>
            <div className="newlatter">
                <input type="email" placeholder="Enter Your Email" />
                <a href="#subcribe" className="btn subcribe">Subcribe</a>
            </div>
            <div>
                <a href="#icon">
                    <FontAwesomeIcon icon={faFacebookSquare} className="icon fa-brands"/>
                </a>
                <a href="#icon">
                    <FontAwesomeIcon icon={faInstagramSquare} className="icon fa-brands"/>
                </a>
                <a href="#icon">
                    <FontAwesomeIcon icon={faWhatsappSquare} className="icon fa-brands"/>
                </a>
            </div>
        </div>
    )
}