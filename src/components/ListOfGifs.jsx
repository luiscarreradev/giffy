import React, { useState, useEffect } from 'react'
import getGifs from '../Services/getGifs'
import Gif from './Gif'
import '../styles/ListOfGifs.css'

const ListOfGifs = ({params}) => {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  const { keyword } = params

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if(loading) return <i className='loading'>⚛️</i>

  return <div className="ListOfGifs">
    {
        gifs.map(({ title, url, id }) => 
        <Gif
          title={title}
          url={url}
          key={id}
        />
      )
    }
  </div>
  
}

export default ListOfGifs