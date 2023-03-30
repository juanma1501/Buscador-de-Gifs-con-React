import React, { useEffect, useState } from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import Loader from './Loader'


export const GifGrid = ({category}) => {

    const {gifs, isLoading} = useFetchGifs (category)
    console.log(gifs)

    

  return (
    <>
        <h3>{category}</h3>

        {
            isLoading && (<Loader />)
        }
        
        <div className="card-grid">
            {
                gifs.map( image => {
                    return (
                        <GifItem key={image.id} image={image}/>
                    )
                } )
            }
        </div>
        
    </>
  )
}
