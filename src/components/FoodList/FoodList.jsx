import React, { useEffect, useState } from 'react'
import FoodCategoryItem from './FoodCategoryItem';
import supabase from '../../config/supabaseClient';
import MainSwiper from '../Swiper/MainSwiper';
import FoodComp from './FoodComp';

const FoodList = () => {
    // AN STATE FOR CATEGORY SECTION`S ITEMS
    const [foodsCategoryItems, setFoodsCategoryItems] = useState(null)

    // AN STATE FOR ERROR HANDLING
    const [fetchError, setFetchError] = useState(null)

    // AN STATE FOR ALL OF THE FOODS
    const [foods, setFoods] = useState([])

    // an state for selected category foods
    const [selectedCategory, setSelectedCategory] = useState(null)

    const categoryHandler = (event) => {
        setSelectedCategory(event.target.id)
    }
    const selectedFoods = foods.filter(food => food.category === selectedCategory)

    // SET USEEFFECT FOR FETCHING CATEGORY DATA FROM SERVER & ERROR HANDLING
    useEffect(() => {
        const fetchCategoryItems = async () => {
            const { data, error } = await supabase.from('foods_category').select()

            if (error) {
                setFetchError('Could not fetch category items! Please check your connection');
                setFoodsCategoryItems(null)
            }
            if (data) {
                setFoodsCategoryItems(data)
                setFetchError(null)
            }
        }
        fetchCategoryItems()
    }, [])

    // SET USEEFFECT FOR FETCHING ALL OF THE FOODS DATA FROM SERVER & ERROR HANDLING
    useEffect(() => {
        const fetchFoods = async () => {
            const { data, error } = await supabase.from('foods').select()

            if (error) {
                setFetchError('Could not fetch foods! Please check your connection.');
                setFoods(null)
                console.log(error);
            }
            if (data) {
                setFoods(data)
                setFetchError(null)
            }
        }
        fetchFoods()
    }, [])

    return (
        <>
            <div className="foodlist-container w-[95%] mx-auto my-8">
                <div className="foodlist-content flex flex-col" >
                    <section id="Category" className='flex flex-col gap-8 pt-16'>
                        <h2 className='text-2xl w-max md:text-3xl font-semibold after:w-full after:h-[2px] after:bg-primary after:block after:mt-1'>Popular Categories</h2>
                        <div className="foodlist-category grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3">
                            {/* IF foodsCategoryItems was true, then set a map on it */}
                            {foodsCategoryItems ? foodsCategoryItems.map(item => (
                                <FoodCategoryItem key={item.id} {...item} onClick={categoryHandler} />
                            )) : fetchError}
                        </div>
                    </section>
                    {selectedCategory &&
                        <section id='Selected-Category' className='flex flex-col gap-8 pt-16'>
                            <h2 className='text-2xl w-max md:text-3xl font-semibold after:w-full after:h-[2px] after:bg-primary after:block after:mt-1'>Selected Category: <span className='text-green-500'>{selectedCategory}</span></h2>
                            <section className="foodlist-selected w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {selectedFoods.length > 0 ?
                                    selectedFoods.map(food => (
                                    <FoodComp food={food} />
                                ))
                                    :
                                    <span className='text-red-500'>We don`t have any food in this Category :(</span>
                                     }
                            </section>
                        </section>
                    }
                    <section id='PopularFoods' className='flex flex-col gap-8 pt-16'>
                        <h2 className='text-2xl w-max md:text-3xl font-semibold after:w-full after:h-[2px] after:bg-primary after:block after:mt-1'>Popular Foods</h2>
                        <section className="foodlist-main w-full">
                            <MainSwiper foods={foods} error={fetchError} />
                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}

export default FoodList