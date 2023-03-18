import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import Pets from "./Pets"
import Breadcrumbs from "./Breadcrumbs"

export default function User(props){

    const {id} = useParams()
    const [data, setData] = useState(null)

    const url = 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/'

    useEffect(() => {
        fetch(`${url}${id}`)
        .then(res => res.json())
        .then(data =>{
            setData(data)
            props.setBreadCrumbs(prevBreadCrumbs => [...prevBreadCrumbs,data])
        } )
    }, [id])

    return(
        <div className="userAndFriends">
            {data &&
            <div className="user-component">
                <img alt="" style={{height: "200px"}} src={`${data.imageUrl}?v=${data.id}`}/>
                <fieldset className="info-fieldset">
                    <legend style={{fontSize: "20px"}}>Info</legend>
                    <h3>{data.prefix} {data.name} {data.lastName}</h3>
                    <h3>{data.title}</h3>
                    <h3><u>Email:</u>{data.email}</h3>
                    <h3><u>Ip Address:</u>{data.ip}</h3>
                    <h3><u>Ip Address:</u>{data.ip}</h3>
                    <h3><u>Job Area:</u>{data.jobArea}</h3>
                    <h3><u>Job Type:</u>{data.jobType}</h3>
                </fieldset>
                <fieldset>
                    <legend style={{fontSize: "20px"}}>Address</legend>
                    <h3>{data.company.name}</h3>
                    <h3>{data.company.suffix}</h3>
                    <h3><u>City:</u>{data.address.city}</h3>
                    <h3><u>Country:</u>{data.address.country}</h3>
                    <h3><u>State:</u>{data.address.state}</h3>
                    <h3><u>Street Address:</u>{data.address.streetAddress}</h3>
                    <h3><u>ZIP:</u>{data.address.zipCode}</h3>
                </fieldset>
            </div>
            }              
        <Breadcrumbs 
            breadCrumbs={props.breadCrumbs}
            setBreadCrumbs={props.setBreadCrumbs}
            id={id}
        />
        <h1>Friends:</h1>


        <Pets id={id}/>
        </div>
    )
}