import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Advisers = () => {
    const data = [
        {
            id: "1",
            text:"Sales Mentor",
            img: "../img/teamankit.png",
            name: "Ankit Raj",
            role: "Founder"
        },
        {
            id: "2",
            text:"Sales Mentor",
            img: "../img/teamankit.png",
            name: "Ankit Raj",
            role: "Founder"
        },
        {
            id: "3",
            text:"Sales Mentor",
            img: "../img/teamankit.png",
            name: "Ankit Raj",
            role: "Founder"
        },
        {
            id: "4",
            text:"Sales Mentor",
            img: "../img/teamankit.png",
            name: "Ankit Raj",
            role: "Founder"
        }
    ]

    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <p className='text-[35px] text-center font-semibold'>New age Advisers to guide, mentor, upskill and reskill!</p>
                <div className='teammain grid xl:lg:grid-cols-4 grid-cols-3 place-items-center'>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <div className='mainteam flex flex-col bg-[#fff] my-5 justify-center'>
                                        <div className='teamimg'>
                                            <img src={val.img} className='rounded w-[270px]'></img>
                                        </div>
                                        <p className='text-[18px] mb-0'>{val.text}</p>
                                        <h1 className='text-[30px] font-semibold mb-0'>{val.name}</h1>
                                        <p className='text-[18px] mb-0'>{val.role}</p>
                                        <LinkedInIcon className='likenin text-[#3DC0DF]' />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Advisers