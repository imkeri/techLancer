import React from 'react'
import '../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ProgramFor = () => {
    return (
        <>
            <h1 className='text-center text-[40px] font-semibold'>
                Who is this program for?
            </h1>
            <div className='max-w-7xl mx-auto px-4 sm:px-6  lg:px-4 lg:justify-start lg:space-x-10'>
                <div className='prg1 grid grid-cols-4 gap-4'>
                    <div class="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-1 mt-[15px] text-[20px] font-medium text-center'>Sales Professionals</p>
                    </div>
                    <div class="programlist w-[100%]  my-[15px] flex items-center gap-3">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-1 mt-[15px] text-[20px] font-medium text-center'>MBA students</p>
                    </div>
                    <div class="programlist w-[100%]  my-[15px] flex items-center gap-1">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-1 mt-[15px] text-[20px] font-medium text-center'>Digital Marketing
                            Managers</p>
                    </div>
                    <div class="programlist w-[100%]  my-[15px] flex items-center gap-3">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-1 mt-[15px] text-[20px] font-medium text-center'>CXO’s</p>
                    </div>

                </div>
            </div>
            <div className='max-w-7xl mx-auto  px-4 sm:px-6  lg:px-4 lg:justify-start lg:space-x-10 '>
                <div className='prg1 grid grid-cols-3 gap-4'>
                    <div class="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-[20px] font-medium text-center'>Marketing Professionals</p>
                    </div>
                    <div class="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-[20px] font-medium text-center'>Content Creators</p>
                    </div>
                    <div class="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-[20px] font-medium text-center'>Social Media Managers </p>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto items-center px-4 sm:px-6  xl:lg:mx-10 lg:justify-start lg:space-x-10 '>
                <div className='prg1 grid grid-cols-2 gap-4 mx-[200px]'>
                    <div class="programlist w-[70%]  my-[15px] flex items-center gap-3 ml-[55px]">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-[20px] font-medium text-center'>CEO’s</p>
                    </div>
                    <div class="programlist w-[100%] my-[15px] flex items-center gap-3">
                        <img src='/img/Group 54.png' className='w-[24px] h-[24px] ml-[15px]'></img>
                        <p className='px-1 py-3 mt-[15px] text-[20px] font-medium text-center'>Independent consultants</p>
                    </div>
                </div>
            </div>
            <p className='text-center py-2 text-[20px] font-medium'>Anyone who wants to learn more about sales or want to sell their products or services.</p>
        </>
    )
}

export default ProgramFor

