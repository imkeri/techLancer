import React from 'react'

const AchieveMents = (props) => {
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                <div className="">
                    <div className="achive pb-3 px-4  sm:px-6 lg:px-8  rounded">
                        <div className="mt-6 grid grid-cols-4  gap-0 justify-start imgs ">
                            <div className="col-span-1 flex xl:lg:justify-start justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                                <div className='d1 flex flex-col my-3 float-left'>
                                    <h1 className='text-[40px] font-bold text-start'>{props.job}</h1>
                                    <p className='p-0 m-0'>Sales Jobs</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex xl:lg:justify-start justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                                <div className='d1 flex flex-col my-3'>
                                    <h1 className='text-[40px] font-bold text-center'>{props.salary}</h1>
                                    <p className='p-0 m-0'>Average Salary</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex xl:lg:justify-start justify-center md:col-span-2 lg:col-span-1 sm:col-span-2">
                                <div className='d1 flex flex-col my-3'>
                                    <h1 className='text-[40px] font-bold text-center'>{props.companies} </h1>
                                    <p className='p-0 m-0'>Companies Onboarded</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex xl:lg:justify-start justify-center md:col-span-2  lg:col-span-1 sm:col-span-2">
                                <div className='d1 flex flex-col my-3'>
                                    <h1 className='text-[40px] font-bold text-center'>{props.verijob}</h1>
                                    <p className='p-0 m-0 text-center'>
                                        {props.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchieveMents