import React from 'react'
import Card from '../Card/Card'
const FoodCategoryItem = () => {
  return (
    <>
      <a href='#' className='relative before:absolute before:rounded-md before:left-0 before:bottom-0 before:w-full before:h-[50%] before:z-10 before:bg-gradient-to-b before:from-transparent before:to-black'>
        <img src="https://tlchavixcqjrhibbpwjg.supabase.co/storage/v1/object/sign/foods_img/cactegory/10.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb29kc19pbWcvY2FjdGVnb3J5LzEwLmpwZyIsImlhdCI6MTY5MjE5Njg3NSwiZXhwIjoxNzIzNzMyODc1fQ.O-jZWvLBQ3luJmgQ7V1J7J4P3mgjFkMbZYsfawQaiXY&t=2023-08-16T14%3A41%3A14.030Z" className='w-full h-full rounded-md' alt="" />
        <span className='absolute left-2 bottom-2 text-xl text-white z-20'>Pizz a</span>
      </a>
    </>
  )
}

export default FoodCategoryItem