import './App.css';
import Pets from "./Pets"
import User from "./User"
import {Route, Routes, useLocation} from "react-router-dom"
import {useState} from "react"


function App() {

  const location = useLocation()
  const [breadCrumbs, setBreadCrumbs] = useState([])

  return(
    <Routes>
      <Route path="/" element={<Pets />}/>
      <Route path="/user/:id" element={
          <User  
            breadCrumbs={breadCrumbs}
            setBreadCrumbs={setBreadCrumbs}
            key={location.key}
          />
        }/>
    </Routes> 
  )
}
export default App;


