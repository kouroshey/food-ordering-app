import React from 'react';
import FoodList from '../components/FoodList/FoodList'
import supabase from '../config/supabaseClient';


const Home = () => {
    console.log(supabase);
    return (

        <>
            <main className='relative w-full'>
                <div className="main-img bg-[url('./images/bg-sm.png')] bg-cover md:bg-center h-screen md:bg-[url('./images/bg.png')]"></div>
                <div
                    className="main-texts absolute top-[55%] left-5 flex flex-col
                    items-start translate-y-[-50%] w-[40%] md:w-[60%] md:left-[50%] md:items-center md:translate-x-[-50%]">
                    <p className='text-3xl md:text-4xl font-thin text-primary tracking-[1rem]'>WE SERVE</p>
                    <p className='text-white text-6xl font-black md:text-8xl'>THE BEST</p>
                    <p className='text-primary text-6xl font-black md:text-8xl'>FOOD</p>
                    <p className='py-8 leading-5 md:w-[60%] text-gray-300 font-thin text-sm md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, praesentium temporibus nulla dolor commodi illo
                    </p>
                    <button
                        className='main-button border-primary text-primary px-8 py-2 rounded-md border-2'
                    >
                        ORDER NOW
                    </button>
                </div>
            </main>
            <FoodList />
        </>
    )
}

export default Home