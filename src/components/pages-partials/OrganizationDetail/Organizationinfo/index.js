import React from 'react'

const OrganizationInfo = () => {
    return (
        <div>
            <div className='max-w-5xl mx-auto justify-between items-center px-0 pt-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[100px] rounded'>
                <div className='border-2 rounded xl:lg:px-[70px] md:px-[30px] md:px-[20px] px-[20px] py-10'>
                    <h1 className='text-center text-[35px] font-semibold'>Organization Details</h1>

                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Orgnization Name</label><br></br>
                            <input type="text" className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3 flex gap-2 ml-2'>
                            <input type="checkbox" className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" /><p className='text-[13px] font-semibold'>I am an independent practitioner (freelancer, architect, lawyer etc) posting for self</p>
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3 '>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Organization description</label><br></br>
                            {/* <input type="checkbox" className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" /><p className='text-[15px] font-semibold'>I am an independent practitioner (freelancer, architect, lawyer etc) posting for self</p> */}
                            <textarea rows="5" cols="50" className='rounded-3xl bg-[#DBDBDB] w-[100%] h-[245px] form-control  border-t-0 border-l-0 border-r-0 border-b-0'></textarea>
                        </div>
                        <div className='secup flex rounded-3xl h-[36px] bg-[#DBDBDB] w-[100%] justify-between'>
                            <p className='text-[#A5A5A5] xl:lg:text-[15px] md:sm:text-[12px] text-[10px] ml-3 mt-2'>Max file size: 1 Mb and max resolution: 500px x 500px. File type: jpg, jpeg, png, gif, bmp</p>
                            <div className='mt-1 rounded-3xl'>
                                <input type="file" id="upload" hidden />
                                <label for="upload" className='h-[36px] hover:bg-[#3DC0DF] hover:text-[#202040]'>Upload</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl mx-auto justify-between items-center px-0 pt-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[30px] mb-[50px] rounded'>
                <div className='border-2 rounded xl:lg:px-[70px] md:px-[30px] md:px-[20px] px-[20px] py-10'>
                    <h1 className='text-center text-[35px] font-semibold'>Organization Verification</h1>

                    <p className='text-[12px] ml-5 font-semibold py-2'> Using any one of the options below, get your organization verified and start posting
                        internships/jobs</p>

                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Organization’s Website</label><br></br>
                            <p className='text-[#A5A5A5] text-[15px] font-medium ml-3'>Verify using your organization's active & functional website</p>
                            <input type="text" placeholder='Enter Website URL' className="w-[100%] mt-2 placeholder:text-[15px] placeholer:text-[#A5A5A5] rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>
                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Active Social Media Page</label><br></br>
                            <p className='text-[#A5A5A5] text-[15px] font-medium ml-3 xl:lg:md:sm:mr-[200px]'>Connect your most active social media profile of which you are an admin with minimum
                                900-1100 likes/followers</p>
                            <input type="text" placeholder='Enter Page Link Here' className="w-[100%] mt-2 placeholder:text-[15px] placeholer:text-[#A5A5A5] rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                        </div>
                    </div>

                    <div className='newac1 grid grid-cols-1 cols-span-2'>
                        <div className='feild1 py-3'>
                            <label className='mx-2 text-[18px] font-semibold ml-4'>Official Company Documents</label><br></br>
                            <p className='text-[#A5A5A5] text-[15px] font-medium ml-3 mb-1'>Verify using Corporate Identification Number (CIN) or any govt. issued business registration document</p>
                            <div className='secup flex rounded-3xl h-[36px] bg-[#DBDBDB] w-[100%] justify-between'>
                                <p className='text-[#A5A5A5] xl:lg:text-[15px] md:sm:text-[12px] text-[10px] ml-3 mt-2'>Adhaar Card, Pan Card, License etc.</p>
                                <div className='mt-1 rounded-3xl'>
                                    <input type="file" id="upload" hidden />
                                    <label for="upload" className='h-[36px] hover:bg-[#3DC0DF] hover:text-[#202040]'>Upload</label>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-[20px]'>
                            <button className='bg-[#202040] text-[#fff] px-4 my-5 rounded-full uppercase font-semibold py-1 hover:bg-[#3DC0DF] hover:text-[#202040]'>Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default OrganizationInfo