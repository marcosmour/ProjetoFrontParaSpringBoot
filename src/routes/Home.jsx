import apiFetch from "../axios/config"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {

  const [post, setPost] = useState([])

  const getPost = async () => {

    try {
      
      const response = await apiFetch.get("/food");
      const data = response.data;
      setPost(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{

    getPost()
  },[])


  return (
    <div className="home">
      <h1>Ultimos Posts</h1>
      {post.length === 0 ? (<p>Carregando...</p>) : (
        post.map((post) => (
          <div key={post.id} className='post'>
            <h2>{post.title}</h2>
            <p>{post.image}</p>
            <p>{post.price}</p>
            <Link to={`/post/${post.id}`} className='btn'>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home