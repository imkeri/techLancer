import React from 'react'

const GetGame = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className='grid xl:lg:md:grid-cols-3 grid-cols-1 flex justify-center gap-10 xl:lg:md:place-content-between sm:place-content-center'>
                    <div className='getPngame xl:lg:md:col-span-2 xl:lg:md:text-left sm:text-center'>
                        <p className='text-[35px] font-semibold'>Get into the PM game.</p>
                        <p className='text-[20px] font-medium leading-6'>Breaking into Product Management is hard—keeping the job is<br />
                            even harder. We designed our certification to give you the support<br />
                            you’ll need to get on the field and quickly put points on the board.<br />
                            Led by top PMs from leading Silicon Valley companies, this widely<br />
                            recognized Product Manager Certification teaches you how to<br />
                            succeed: Learn to build products end to end and get the hands-on<br />
                            experience you need to be a great PM. Along the way, you’ll get all<br />
                            the mentoring, resume prep, and mock interviews you’ll need to land<br />
                            your dream job.</p>
                    </div>
                    <div className='flex  justify-center'>
                        <div className='flex flex-col gap-2 '>
                            <div className='weektime flex gap-2 '>
                                <div className='part bg-[#3DC0DF] rounded w-[210px] pl-3'>
                                    <p className='text-[15px] text-[#fff] mb-0 mt-2'>PART - TIME</p>
                                    <p className='text-[40px] text-[#fff] font-semibold mb-0'>8 Weeks</p>
                                </div>
                                <div className='full bg-[#3DC0DF] rounded w-[210px] pl-3'>
                                    <p className='text-[15px] text-[#fff] mb-0 mt-2'>FULL - TIME</p>
                                    <p className='text-[40px] text-[#fff] font-semibold mb-0'>5 Days</p>
                                </div>
                            </div>
                            <div className='weektime flex'>
                                <div className='hour bg-[#3DC0DF] rounded pl-3 xl:lg:md:w-[432px] w-[432px]'>
                                    <p className='text-[15px] text-[#fff] mb-0 mt-2'>LIVE ONLINE INSTRUTOR LED CLASSES</p>
                                    <p className='text-[40px] text-[#fff] font-semibold mb-0'>32.5 Hours</p>
                                </div>
                            </div>
                            <div className='weektime flex gap-2'>
                                <div className='part bg-[#3DC0DF] w-[280px] rounded pl-3'>
                                    <p className='text-[15px] text-[#fff] mb-0  mt-2'>AVG. CLASS SIZE</p>
                                    <p className='text-[40px] text-[#fff] font-semibold mb-0'>14 Students</p>
                                </div>
                                <div className='part bg-[#3DC0DF] rounded w-[150px] pl-2'>
                                    <p className='text-[15px] text-[#fff] mb-0 mt-2'>DISCUSSION</p>
                                    <p className='text-[40px] text-[#fff] font-semibold mb-0'>Forum</p>
                                </div>
                            </div>
                            <div className='weektime flex gap-2 rounded'>
                                <div className='part bg-[#3DC0DF] rounded w-[280px] pl-3'>
                                    <p className='text-[15px] text-[#fff] mb-0 mt-2'>MATERIAL ACCESS</p>
                                    <p className='text-[40px] text-[#fff] font-semibold mb-0'>2 Years</p>
                                </div>
                                <div className='part bg-[#3DC0DF] rounded w-[150px] pl-3'>
                                    <p className='text-[15px] text-[#fff] mb-0 mt-2'>FREE TOOLS</p>
                                    <p className='text-[40px] text-[#fff] font-semibold mb-0'>Yes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetGame