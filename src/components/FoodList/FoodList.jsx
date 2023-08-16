import React from 'react'
import FoodComp from './FoodComp'
import FoodCategoryItem from './FoodCategoryItem';

const FoodList = () => {
    return (
        <>
            <div className="foodlist-container w-[95%] mx-auto my-8">
                <div className="foodlist-content flex flex-col gap-8">
                        <h2 className='text-2xl md:text-3xl font-semibold'>Popular Categories</h2>
                    <div className="foodlist-category p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3">
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                        <FoodCategoryItem/>
                    </div>
                    {/* <div className="foodlist-main flex-grow-[2] border-sm border-gray-300 border rounded-md shadow-md p-4 grid grid-cols-3 gap-y-3">
                        
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default FoodList