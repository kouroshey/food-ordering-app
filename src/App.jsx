import React from 'react'
import Navigation from './components/Navigation/Navigation'
import FoodList from './components/FoodList/FoodList'

const App = () => {
  return (
    <>
      <Navigation/>
      <main className='relative'>
        <img className='w-full z-40' src="./pictures/bg.png" alt="bg-imgage" />
        <div className="main-texts absolute top-[50%] left-[50%] flex flex-col items-center w-[35%] translate-x-[-50%] translate-y-[-50%] ">
          <p className='text-4xl font-thin text-primary tracking-[1rem]'>WE SERVE</p>
          <p className='text-white text-8xl font-black'>THE BEST</p>
          <p className='text-primary text-8xl font-black'>FOOD</p>
          <p className='py-8 leading-5 text-gray-300 font-thin px-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci, praesentium temporibus nulla dolor commodi illo
            ipsum odit possimus corporis. Sunt unde provident facere
            temporibus explicabo quia ratione consequatur sit ab.
          </p>
          <button className='main-button border-primary text-primary px-12 py-4 rounded-md border-2'>ORDER NOW</button>
        </div>
      </main>
      {/* <FoodList/> */}
    </>
  )
}

export default App