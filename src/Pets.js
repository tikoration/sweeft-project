
import {useState, useEffect, useRef} from "react"
import Card from "./Card"
import {nanoid} from 'nanoid'
// import User from "./User"

function Pets(props) {
    
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const fetchable = useRef(true)
    
    function fetchData(userId){
        let url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
        if(userId){
            url =  `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/20`
        }
      fetch(url)
      .then(res => res.json())
      .then(data => setData((prevData) =>{
        if(prevData){
        return [...prevData, ...data.list]
        } else {
            return data.list
        }
        }))
      }

    useEffect(() => {
        setIsLoading(true)
        fetchable.current = true
        fetchData(props.id)
    }, [page])

    useEffect(() => {
        function handleScroll(){
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if(scrollHeight - clientHeight - scrollTop <= 150 && fetchable){
            setPage(prevPage => prevPage + 1)
            fetchable.current = false
        }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
}, [])

  return (
        <div className="cards">
        {data?.map((user) => (
            <Card key={nanoid()} users={user}/>
          ))}
        {isLoading &&  <span className="loader"></span>}
        </div>
  )
}

export default Pets;


