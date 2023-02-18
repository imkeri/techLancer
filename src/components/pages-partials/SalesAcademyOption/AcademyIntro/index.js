import React from 'react'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AcademyIntro = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className='grid xl:lg:md:grid-cols-3 grid-cols-1 gap-5 flex place-items-center justify-center'>
                    <div className='col-span-2'>
                        <img src='../img/mentorlogo.png'></img>
                        <p className='text-[45px] font-semibold '>Learn to Master the Art of Sales!</p>
                        <p className='text-[20px] font-medium mr-[85px]'>Become Efficient and Effective at Selling as Possible. Build job-ready sales skills for an in-demand career these specializations are intended for sales professionals at any point in their career, whether they're just starting to apply for sales jobs or leading a global sales organization. . No degree or prior experience required. No matter where you are in your sales career, these specializations will take it to the next level.</p>
                        <div className='enroll flex mt-[50px]'>
                            <button className='text-[15px] font-semibold py-2 px-3'>ENROL NOW</button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center xl:lg:col-span-1 col-span-2'>
                        <div>
                            <img src='../img/Photo holder 1.png'></img>
                        </div>
                        <div className='imgname mt-[-30px] ml-10'>
                            <p className='mt-0 mb-0 text-[30px] font-semibold'>Ankit Raj</p>
                            <p className='mt-0 mb-0 text-[20px] font-medium'>Sales Mentor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademyIntro