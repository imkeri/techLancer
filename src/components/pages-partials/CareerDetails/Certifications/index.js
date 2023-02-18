import React from 'react'

const MainCertifications = () => {
    return (
        <div>
            <div className='max-w-2xl mx-auto justify-between items-center px-0 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 my-[90px]'>
                <div className='border-2 px-10 rounded-2xl py-10'>
                    <p className='text-[35px] font-semibold text-center'>Career Details</p>
                    <p className='uppercase text-[18px] font-semibold text-center tracking-tight'>CERTIFICATIONS</p>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-2'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Certificate Title</label><br></br>
                            <input type="text" placeholder='Please enter project name here' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-2'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>From</label><br></br>
                            <input type="text" placeholder='Please enter School/Institute/Company name here' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-2'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Year</label><br></br>
                            <input type="text" placeholder='YYYY' className="w-[20%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className=''>
                        <label className='mx-2 text-[18px] font-semibold ml-4 py-2'>Attachment</label><br></br>
                        <div className='secup flex rounded-3xl h-[36px] bg-[#DBDBDB] w-[100%] justify-between'>
                            <p className='text-[15px] font-medium float-start text-[#A5A5A5] ml-3 mt-2'>max: 4MB, PDF format</p>
                            <div className='mt-1 rounded-3xl'>
                                <input type="file" id="upload" hidden />
                                <label for="upload" className='h-[36px] hover:bg-[#3DC0DF] hover:text-[#202040]'>Upload</label>
                            </div>
                        </div>
                    </div>
                    <div className='cadd flex rounded-3xl h-[36px] bg-[#DBDBDB] w-[100%] justify-center mt-[30px] hover:bg-[#3DC0DF] hover:text-[#202040]'>
                        <div className='mt-1 rounded-3xl'>
                            <input type="file" id="upload" hidden />
                            <label for="upload" className='h-[36px] '>Add another work experience  +</label>
                        </div>
                    </div>
                    <div className='text-center py-10 pb-5'>
                        <button className='bg-[#202040] text-[#fff] text-[18px] font-semibold rounded-3xl px-5 py-1 uppercase hover:bg-[#3DC0DF] hover:text-[#202040]'>SAve & Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCertifications