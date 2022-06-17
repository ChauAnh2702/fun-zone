import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function DinCardMore(props) {
    return (
        <>
            <div className="item moreDin showOrHide img">
                <Link to={props.link}><img src={props.img} alt="restaurant"/></Link>
            </div>
            <div className="item moreDin showOrHide text">
                <Link to={props.link}><h4>{props.title}</h4></Link>
                {/* <FontAwesomeIcon icon={faMapLocationDot} className="icon fa-map-location-dot" />
                <div className="map-layer">
                <img className="map-img" src="images/map.gif" alt="map" />
                    <FontAwesomeIcon icon={faCircleXmark} className="icon closeMap fa-circle-xmark"/>
                </div> */}
                <table>
                    <tr>
                        <td>Dishes: </td>
                        <td>{props.dishes}</td>
                    </tr>
                    <tr>
                        <td>Service:</td>
                        <td>{props.service}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}