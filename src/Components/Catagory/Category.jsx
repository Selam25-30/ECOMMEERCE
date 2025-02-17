import React from 'react'
import classes from './Category.module.css'
// import CategoryCard from './CategoryCard'
import categoryInfos from './CategoryFullInfos'
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <section className={classes.Category__container}>
    {categoryInfos.map((infos,i) => {
        return <CategoryCard data ={infos} key={i}/>
    })}

    </section>
  )
}

export default Category
