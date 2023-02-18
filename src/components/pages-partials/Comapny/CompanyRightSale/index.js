import React from 'react'

const CompanyRightSale = () => {
    const data = [
        {
            id: "1",
            img: "../img/Asset 28 1.png",
            title: "Verified Talents",
            content: "Before onboarding, each applicant has to go through screening assessments which gives you access to a vetted and verified sales talent pool"
        },
        {
            id: "2",
            img: "../img/Asset 36 1.png",
            title: "AI Based Matchmaking Engine",
            content: "We connect you with the right match of sales talents who fit well with your requirement"
        },
        {
            id: "3",
            img: "../img/Asset 35 1.png",
            title: "Low Cost",
            content: "We assess each applicant through our rigorous screening process which saves a lot of your financial power In place of buying expensive and tedious assessment tools"
        },
        {
            id: "4",
            img: "../img/Asset 37 1.png",
            title: "Agile Onboarding",
            content: "Our recommended sales talents exactly match with your requirement(s) which saves a lot time and effort and enhances the overall efficiancy of the organization through a smooth tech-enabled onboarding process"
        }
    ]
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                <h1 className='text-[32px] font-semibold text-center ml-[70px] mt-[30px]'>How The DriveSales™️ Helps You Find the Right Sales Talent?</h1>
                <div className='mt-6 grid grid-cols-4 py-3  justify-center imgs'>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <div className='main1 relative flex flex-col items-center md:col-span-2 lg:col-span-1 sm:col-span-2'>
                                        <div className='img absolute z-10 bg-[#202040] w-[100px] h-[100px] rounded-full  border-4 border-[#3DC0DF] flex items-center'>
                                            <img src={val.img} className='px-5 slef-center'></img>
                                        </div>
                                        <div className='content  w-[241px] h-[360px] flex flex-col items-center py-[70px] rounded mt-[50px]'>
                                            <h5 className='text-center text-[30px] font-semibold'>
                                                {val.title}
                                            </h5>
                                            <p className='text-center text-[15px] font-medium px-2'>{val.content}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='getstarted flex justify-center my-[40px]'>
                    <button className='bg-[#3DC0DF] text-[#fff] uppercase px-3 py-2 my-3 rounded-xl hover:bg-[#fff] hover:text-[#3DC0DF] hover:border-2 hover:border-[#3DC0DF] uppercase'>getstarted</button>
                </div>

            </div>
        </div>
    )
}

export default CompanyRightSale