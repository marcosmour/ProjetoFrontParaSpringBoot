import apiFetch from '../axios/config'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './NewPost.css'

const NewPost = () => {
  return (
    <div className='new-post'>
      <h2>Inserir novo post</h2>
      <form>
        <div className='form-control'>
          <label htmlFor="title">Título:</label>
          <input type="text" name='title' id='title' placeholder='Digite o título' />
        </div>
        <div className='form-control'>
          <label htmlFor="image">Imagem:</label>
          <input type="text" name='image' id='image' placeholder='Insira a imagem' />
        </div>
        <div className='form-control'>
          <label htmlFor="price">Preço:</label>
          <input type="text" name='price' id='price' placeholder='Digite o preço' />
        </div>  
        <input type="submit" value='Criar post' className='btn' />
      </form>
    </div>
  )
}

export default NewPost