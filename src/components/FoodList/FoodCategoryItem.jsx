import React from 'react'
const FoodCategoryItem = (props) => {
  const categoryHandler = (event) => {
    props.onClick(event)
  }
  return (
  
      <a id={props.category} onClick={categoryHandler} className='relative before:absolute before:rounded-md before:left-0 before:bottom-0 before:w-full before:h-[80%] before:z-10 before:bg-gradient-to-b before:from-transparent before:to-black/50'>
        <img src={props.img} className='w-full h-full rounded-md' alt="" />
        <span className='absolute left-2 bottom-2 text-xl text-white z-20'>{props.title}</span>
      </a>
    
  )
}

export default FoodCategoryItem