import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {

  const [post, setPost] = useState([])

  const getPost = async () => {

    try {
      
      const response = await axios.get("http://localhost:8080/food");
      const data = response.data;
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{

    getPost()
  },[])


  return (
    <div>Home</div>
  )
}

export default Home