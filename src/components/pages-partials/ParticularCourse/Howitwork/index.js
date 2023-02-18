import React from 'react'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const HowItWork = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-6 lg:justify-start lg:space-x-10 '>
                <h1 className='text-center text-[35px] font-semibold'>How it Works</h1>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-5 flex'>
                        <div className='worktext lg:md:mt-[100px] sm:mt-[50px] mr-[30px]'>
                            <h1 className='text-[35px] font-semibold text-right'>Select Course</h1>
                            <p className=' text-[20px] bold text-right font-medium'>Once you opt to register—bright move, by the way—here’s what happens: you decide on the course that works for you, full-time or part-time. Then, you enroll on our site. Next, you’ll complete the enrollment set-up and obtain the information you would need to go ahead.</p>
                        </div> 
                        {/* <div className='relative'>
                            <div className='bg-[#3DC0DF] w-[15px] h-[15px] rounded-full absolute z-10 mt-[340%] ml-[-5px]'></div>
                            <div className='bg-[#3DC0DF] w-[3px] h-[400px]'></div>

                        </div> */}
                    </div>
                    <div className='col-md-1 cline '>
                        <div className='relative mt-[30px]'>
                            <div className='bg-[#3DC0DF] w-[15px] h-[15px] rounded-full absolute z-10 mt-[250%] ml-[-5px]'></div>
                            <div className='bg-[#3DC0DF] w-[3px] h-[400px]'></div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='workimg mt-[70px] flex'>
                            <img src='/img/enroll 1.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork