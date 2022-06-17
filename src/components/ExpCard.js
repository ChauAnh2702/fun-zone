import { Link } from 'react-router-dom'

export default function ExpCard(props) {
    return (
        <Link to={props.link} className="item">
            <img src={props.img} alt="attractions" />
            <div className="layer">
                <h4 className="text-shadow">{props.title}</h4>
            </div>
        </Link>
    )
}