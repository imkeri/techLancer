import React from 'react'

const EnrollNow = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-6 lg:justify-start  mt-[20px]'>
                <h1 className='text-left text-[35px] font-semibold'>Enroll Now!</h1>
                <div className="schedual1">
                    <div className="">
                        <ul
                            className="flex mb-0 list-none  pt-3 pb-4  pl-0"
                            role="tablist"
                        >
                            <li className="last:mr-0 mr-5 ">
                                <a
                                    className={
                                        "text-xs font-bold uppercase py-2 px-5 shadow-lg rounded leading-normal no-underline " +
                                        (openTab === 1
                                            ? "text-white bg-[#3DC0DF]"
                                            : "text-[#3DC0DF] bg-white border-2 border-[#3DC0DF]")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Show All
                                </a>
                            </li>
                            <li className=" last:mr-0 mr-5  ">
                                <a
                                    className={
                                        "text-xs font-bold uppercase py-2 px-5 shadow-lg rounded leading-normal no-underline  " +
                                        (openTab === 2
                                            ? "text-white bg-[#3DC0DF]"
                                            : "text-[#3DC0DF] bg-white border-2 border-[#3DC0DF]")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Part-time
                                </a>
                            </li>
                            <li className="last:mr-0 mr-5 ">
                                <a
                                    className={
                                        "text-xs font-bold uppercase py-2 px-5 shadow-lg rounded leading-normal no-underline  " +
                                        (openTab === 3
                                            ? "text-white bg-[#3DC0DF]"
                                            : "text-[#3DC0DF] bg-white border-2 border-[#3DC0DF]")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Full-time
                                </a>
                            </li>
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div className='row mx-5'>
                                            <div className='col-md-4'>
                                                <p className='text-[18px] font-semibold'>DATES</p>
                                            </div>
                                            <div className='col-md-3'>
                                                <p className='text-[18px] font-semibold'>HOURS</p>
                                            </div>
                                            <div className='col-md-5'>
                                                <p className='text-[18px] font-semibold'>INSTRUCTOR</p>
                                            </div>
                                        </div>
                                        <hr className='m-0'></hr>
                                        <div className='row mx-5 mt-3'>
                                            <div className='col-md-4'>
                                                <div className='flex flex-col'>
                                                    <p className='text-[18px] font-semibold'>October 10-December 1</p>
                                                    <p className='text-[15px] font-semibold'>Part-time, Mondays and Wednesdays</p>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='flex flex-col'>
                                                    <p className='text-[18px] font-semibold'>11:00 PM-1:00 AM</p>
                                                    <p className='text-[15px]'>Time Zone: Asia/Calcutta</p>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='lastcl flex justify-between '>
                                                    <div className='float-start'>
                                                        <p></p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <button className='float-start bg-[#3DC0DF] text-[#fff] text-[15px] px-2 py-1 rounded text-center hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>SOLD OUT</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='m-0'></hr>
                                        <div className='row mx-5 mt-3'>
                                            <div className='col-md-4'>
                                                <div className='flex flex-col'>
                                                    <p className='text-[18px] font-semibold'>October 12-December 9</p>
                                                    <p className='text-[15px] font-semibold'>Part-time, Tuesdays and Thursdays</p>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='flex flex-col'>
                                                    <p className='text-[18px] font-semibold'>6:00 AM-8:00 AM</p>
                                                    <p className='text-[15px]'>Time Zone: Asia/Calcutta</p>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='lastcl flex justify-between'>
                                                    <div className='float-start'>
                                                        <p className='text-[15px] font-semibold'>To Be Announced.</p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <button className='float-start bg-[#3DC0DF] text-[#fff] text-[15px] px-2 py-1 rounded text-center hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>Enroll Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='m-0'></hr>
                                        <div className='row mx-5 mt-3'>
                                            <div className='col-md-4'>
                                                <div className='flex flex-col'>
                                                    <p className='text-[18px] font-semibold'>October 15-December 18</p>
                                                    <p className='text-[15px] font-semibold'>Part-time, Saturdays</p>
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='flex flex-col'>
                                                    <p className='text-[18px] font-semibold'>8:30 PM-1:30 AM</p>
                                                    <p className='text-[15px]'>Time Zone: Asia/Calcutta</p>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className='lastcl flex justify-between'>
                                                    <div className='float-start w-[200px]'>
                                                        <p className='text-[15px] font-semibold'>Top Instructor &
                                                            Group Product Manager
                                                            at Apple.
                                                            Formerly at eBay.</p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <button className='float-start bg-[#3DC0DF] text-[#fff] text-[15px] px-2 py-1 rounded text-center hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>Enroll Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='m-0'></hr>
                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <p>
                                                Completely synergize resource taxing relationships via
                                                premier niche markets. Professionally cultivate one-to-one
                                                customer service with robust ideas.
                                                <br />
                                                <br />
                                                Dynamically innovate resource-leveling customer service for
                                                state of the art customer service.
                                            </p>
                                        </div>
                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                            <p>
                                                Efficiently unleash cross-media information without
                                                cross-media value. Quickly maximize timely deliverables for
                                                real-time schemas.
                                                <br />
                                                <br /> Dramatically maintain clicks-and-mortar solutions
                                                without functional solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrollNow