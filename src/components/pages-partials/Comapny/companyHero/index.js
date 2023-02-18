import React from 'react'

const CompanyHero = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4  sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                            <div className="lg:pt-20">
                                <h1 className="mt-4  tracking-tight font-bold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                    <span className="block text-[50px] lg:text-[40px] md:text-[35px] sm:text-[32px]">Hire Top & Verified</span>
                                    <span className="block text-indigo-400 text-[50px] lg:text-[40px] md:text-[35px] sm:text-[32px] text-[#000]"><span className='text-[#3DC0DF]'> Sales Talent </span> in 72 Hours</span>
                                </h1>
                                <div className=' flex items-center lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'>
                                    <h6 className='text-[22px] w-[400px] leading-7 py-3'>India’s First AI Based Matchmaking Talent Platform</h6>
                                </div>
                                <div>
                                    <div className='bottomborder flex items-center flex-row w-[162px] h-[7px] bg-[#3DC0DF] my-3 lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'></div>
                                </div>
                                <div className='mr-[100px]'>
                                    <p>The DriveSales™️ scans and verifies thousands of applicants via
                                        our stringent onboarding process and match you with right
                                        sales talents who fits well with your culture and job responsibilities.</p>
                                </div>
                                <div className='homebtn flex flex-col items-center lg:inline-flex items-center md:inline-flex items-center sm:inline-flex items-center'>
                                    <div className='apply companget text-[18px] font-extrablod text-[#fff] mr-3'>
                                        <button className='px-[10px] py-[5px] hover:bg-[white] hover:text-[#3DC0DF] my-5'>Get Started</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='relative flex justify-center place-items-center '>
                            <div className='compimg'>
                                <img src='../img/companyhomeimg.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CompanyHero