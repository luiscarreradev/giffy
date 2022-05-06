import React, { useState, useEffect } from 'react'
import getGifs from '../Services/getGifs'
import Gif from './Gif'
import '../styles/ListOfGifs.css'

const ListOfGifs = ({params}) => {
  const [gifs, setGifs] = useState([])
  const { keyword } = params

  useEffect(() => {
    getGifs({ keyword })
    .then(gifs => setGifs(gifs))
  }, [keyword])

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