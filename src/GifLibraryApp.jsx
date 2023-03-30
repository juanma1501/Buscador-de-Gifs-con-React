import React from 'react'
import {useState} from 'react'
import {AddCategory, GifGrid} from './components'

export const GifLibraryApp = () => {

    const [categories, setCategories] = useState(['Marvel'])

    //Función de flecha para el set
    const addCategory = (newCategory) => {
        if (categories.some( category => category.toLowerCase() === newCategory.toLowerCase())) return
        setCategories([ newCategory, ...categories])
    }

    console.log(categories)


  return (
    <>
        
        <h1>GifLibraryApp</h1>

        <AddCategory onNewCategory = {addCategory} />

            {categories.map( category => {
                return (
                        <GifGrid key={category} category= {category}/>
                        
                )
            } )}
    </>
  )
}
