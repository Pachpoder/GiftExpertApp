import { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch']);
  
  const onAddCategory = ( newCategory ) => {

      if( categories.includes(newCategory) ) return;

     setCategories([ newCategory, ...categories ]);
   // OTRAFORMA -> setCategories( cat => [ ...cat, 'Valorant']);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory = {(event) =>  onAddCategory(event)}/>
          {
            categories.map( category => (
                    <GifGrid 
                    Key={ category }
                    category ={ category } />
                )
              )
          }
    </>
  )
}
