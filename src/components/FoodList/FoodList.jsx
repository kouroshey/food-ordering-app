import React, { useEffect, useState } from 'react'
import FoodComp from './FoodComp'
import FoodCategoryItem from './FoodCategoryItem';
import supabase from '../../config/supabaseClient';
import MainSwiper from '../Swiper/MainSwiper';

const FoodList = () => {
    const [foodsCategoryItems, setFoodsCategoryItems] = useState(null)
    const [fetchError, setFetchError] = useState(null)

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
    console.log(foodsCategoryItems);

    return (
        <>
            <div className="foodlist-container w-[95%] mx-auto my-8">
                <div className="foodlist-content flex flex-col gap-8">
                    <h2 className='text-2xl md:text-3xl font-semibold'>Popular Categories</h2>
                    <div className="foodlist-category p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3">
                        {foodsCategoryItems && foodsCategoryItems.map(item => (
                            <FoodCategoryItem key={item.id} {...item} />
                        ))}
                    </div>
                    <h2 className='text-2xl md:text-3xl font-semibold'>Popular Foods</h2>
                    <div className="foodlist-main w-full">
                        <MainSwiper/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodList