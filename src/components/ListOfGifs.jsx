import React, { useState, useEffect } from 'react'
import getGifs from '../Services/getGifs'
import Gif from './Gif'

const ListOfGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword })
    .then(gifs => setGifs(gifs))
  }, [keyword])

  return gifs.map(({ title, url, id }) => 
    <Gif
      title={title}
      url={url}
      key={id}
    />
  )
}

export default ListOfGifs