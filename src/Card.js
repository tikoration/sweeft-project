import {Link} from "react-router-dom"

export default function Card(props){
    return(
        <Link className="card" to={`/user/${props.users.id}`}>
            <img className="image" src={`${props.users.imageUrl}?v=${props.users.id}`} alt=""/>
            <h3 className="name">{props.users.prefix} {props.users.name} {props.users.lastName}</h3>
            <h4 className="title">{props.users.title}</h4>  
        </Link>
    )
}