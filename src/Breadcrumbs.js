import {Link} from "react-router-dom"

export default function Breadcrumbs(props){
    return(
        <div className="bread-crumbs">
            {props.breadCrumbs.map((brCr,i) => {
               return <Link key={`breadCrumbs`+i}to={`/user/${props.id}`}><h6> {brCr.prefix} {brCr.name} {brCr.lastName} {` > `}</h6></Link>
            })}
        </div>
    )
}