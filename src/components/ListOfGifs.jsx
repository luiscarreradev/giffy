import React from 'react'
import Gif from './Gif'

const ListOfGifs = ({gifs}) => {
  return (
    <div>
      {
        gifs.map(({ title, url, id }) => <Gif title={title} url={url} id={id} key={id} />)
      }
    </div>
  )
}

export default ListOfGifs