import React from 'react'
const FoodCategoryItem = ({title, img}) => {
  return (
    <>
      <a href='#' className='relative before:absolute before:rounded-md before:left-0 before:bottom-0 before:w-full before:h-[50%] before:z-10 before:bg-gradient-to-b before:from-transparent before:to-black'>
        <img src={img} className='w-full h-full rounded-md' alt="" />
        <span className='absolute left-2 bottom-2 text-xl text-white z-20'>{title}</span>
      </a>
    </>
  )
}

export default FoodCategoryItem