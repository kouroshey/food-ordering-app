import React, { useEffect, useState } from 'react'
import FoodComp from './FoodComp'
import FoodCategoryItem from './FoodCategoryItem';
import supabase from '../../config/supabaseClient';
import MainSwiper from '../Swiper/MainSwiper';

const FoodList = () => {
    const [foodsCategoryItems, setFoodsCategoryItems] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    const [foods, setFoods] = useState(null)

    useEffect(() => {
        const fetchCategoryItems = async () => {
            const { data, error } = await supabase.from('foods_category').select()

            if (error) {
                setFetchError('Could not fetch category items');
                setFoodsCategoryItems(null)
                console.log(error);
            }
            if (data) {
                setFoodsCategoryItems(data)
                setFetchError(null)
            }
        }
        fetchCategoryItems()
    }, [])

    useEffect(() => {
        const fetchFoods = async () => {
            const { data, error } = await supabase.from('foods').select()
            
            if (error) {
                setFetchError('Could not fetch foods');
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
                <div className="foodlist-content flex flex-col gap-8">
                    <h2 className='text-2xl w-max md:text-3xl font-semibold after:w-full after:h-[2px] after:bg-primary after:block after:mt-1'>Popular Categories</h2>
                    <div className="foodlist-category p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3">
                        {foodsCategoryItems && foodsCategoryItems.map(item => (
                            <FoodCategoryItem key={item.id} {...item} />
                        ))}
                    </div>
                    <h2 className='text-2xl w-max md:text-3xl font-semibold after:w-full after:h-[2px] after:bg-primary after:block after:mt-1'>Popular Foods</h2>
                    <div className="foodlist-main w-full">
                        <MainSwiper foods={foods} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodList