import React from 'react'
import SaleStory from '../../Comapny/SaleStory'

const AcademySaleStory = () => {
    return (
        <div>
            <div className='mt-[800px]'>
                <SaleStory />
                <div className='max-w-7xl mx-auto justify-between items-center sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                    <p className='text-center text-[30px] font-semibold xl:lg:mx-[260px] md:mx-[200px] sm:[120px] mx-[0]'>The DriveSales™ provides industry-specific & in-
                        demand sales programs for students and working
                        professionals to master the art and science of
                        sales.</p>
                    <p className='text-[35px] font-semibold text-center mt-[50px] text-center pr-[100px]'>Join a vibrant community of sales professionals.
                        By sales professionals, for sales professionals.</p>
                </div>
                <div className='max-w-6xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                    <div className='grid xl:lg:md:grid-cols-4 gap-[60px] sm:grid-cols-2 place-items-center'>
                        <div className='bg-[#3DC0DF] flex flex-col  items-center rounded pt-3  w-[230px]'>
                            <img src="../img/Asset 32 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>25+</h4>
                            <p className='text-center uppercase text-[#fff]'>Sales Programs</p>
                        </div>
                        <div className='bg-[#3DC0DF] flex flex-col items-center  rounded pt-3 w-[230px]'>
                            <img src="../img/Asset 30 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>500+</h4>
                            <p className='text-center uppercase text-[#fff]'>Hours delivered</p>
                        </div>
                        <div className='bg-[#3DC0DF] flex flex-col items-center  rounded pt-3 w-[230px]'>
                            <img src="../img/Asset 28 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>25+</h4>
                            <p className='text-center uppercase text-[#fff]'>Companies
                                Onboarded</p>
                        </div>
                        <div className='bg-[#3DC0DF] flex flex-col items-center rounded pt-3 w-[230px]'>
                            <img src="../img/Asset 38 1.png" className='w-[60px] h-[71px]'></img>
                            <h4 className='text-[#fff] font-semibold text-[38px]'>15+</h4>
                            <p className='text-center uppercase text-[#fff]'>Sales Mentors</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AcademySaleStory