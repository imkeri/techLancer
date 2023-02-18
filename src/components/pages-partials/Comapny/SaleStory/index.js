import React from 'react'

const SaleStory = () => {
    return (
        <div>
            <div className='salestroy max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 rounded lg:justify-start lg:space-x-10 mb-[70px]'>
                <h1 className='text-center text-[35px] font-semibold'>Read Our Sales Stories</h1>
                <div className="mt-6 grid grid-cols-4  gap-5 justify-start imgs ">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                        <div className='d1 flex flex-col my-10'>
                            <img src='../img/LinkedIn_Logo 1.png'></img>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                        <div className='d1 flex flex-col my-0'>
                            <img src='../img/Quora-Logo 1.png'></img>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                        <div className='d1 flex flex-col my-0'>
                            <img src='../img/Medium-logo 1.png'></img>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2  lg:col-span-1 sm:col-span-2">
                        <div className='d1 flex flex-col my-10'>
                            <img src='../img/YouTube-Logo 1.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleStory