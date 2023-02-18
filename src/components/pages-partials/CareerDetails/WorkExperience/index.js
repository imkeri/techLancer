import React from 'react'

const MainWorkExperience = () => {
    return (
        <div>
            <div className='max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 my-[90px]'>
                <div className='border-2 px-10 rounded-2xl py-10'>
                    <p className='text-[35px] font-semibold text-center'>Career Details</p>
                    <p className='uppercase text-[18px] font-semibold text-center tracking-tight'>Work experience</p>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Company name</label><br></br>
                            <input type="text" placeholder='Please enter company name here' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Company bio</label><br></br>
                            {/* <input type="text" placeholder='Please enter company name here' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" /> */}
                            <textarea cols="40" row="4" placeholder='Include company discription and Introduction in 150 words' className="w-[100%] h-[135px] mt-2  rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0"></textarea>
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Period</label><br></br>
                            <div className='flex'>
                                <div className='sdate flex gap-5'>
                                    <input type="text" className='w-[35%] h-[30px] rounded bg-[#DBDBDB] form-control  border-t-0 border-l-0 border-r-0 border-b-0' ></input>
                                    <label className='text-[18px] '>Start date</label>
                                </div>
                                <div className='sdate flex gap-5'>
                                    <input type="text" className='w-[40%] h-[30px] rounded bg-[#DBDBDB] form-control  border-t-0 border-l-0 border-r-0 border-b-0' ></input>
                                    <label className='text-[18px] '>End date</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Position</label><br></br>
                            <input type="text" placeholder='Please enter your  post/designation here' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Your role</label><br></br>
                            {/* <input type="text" placeholder='Please enter company name here' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" /> */}
                            <textarea cols="40" row="4" placeholder='Please mention day to day work here' className="w-[100%] h-[105px] mt-2  rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0"></textarea>
                        </div>
                    </div>
                    <div className='cadd flex rounded-3xl h-[36px] bg-[#DBDBDB] w-[100%] justify-center'>
                        <div className='mt-1 rounded-3xl'>
                            <input type="file" id="upload" hidden />
                            <label for="upload" className='h-[36px] '>Add another work experience  +</label>
                        </div>
                    </div>
                    <div className='text-center py-10 pb-5 mt-[20px]'>
                        <button className='bg-[#202040] text-[#fff] text-[18px] font-semibold rounded-3xl px-5 py-1 uppercase hover:bg-[#3DC0DF] hover:text-[#202040]'>SAve & Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWorkExperience