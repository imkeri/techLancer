import React from 'react'
import SaleStory from '../../Comapny/SaleStory'

const OptionHero = () => {
    return (
        <>
            <div>
                <div className='mainoption'>
                    <div className="optiontit pt-[400px]">
                        <h1 className='text-center text-[55px] font-semibold'>Learn From The Top <span className='text-[#3DC0DF]'>1% Sales Mentors!</span></h1>
                        <p className='text-center text-[22px] font-medium'>We partner with the top 1% sales mentors to catalyze your sales career growth.</p>
                    </div>
                    <div className=' flex  mt-5 place-items-center justify-center'>
                        <div className='flex flex-col w-[250px]'>
                            <button className='text-[#fff] bg-[#202040] px-2 py-2 rounded font-semibold'>Explore Sales Programs</button>
                            <img src='../img/Triangle.png' className='h-[120px]'></img>
                        </div>
                    </div>
                    <div className='GRAPHICS'>
                        {/* <img src='../img/Vector graphics.png' className='w-[100%] h-[640px]'></img> */}
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default OptionHero