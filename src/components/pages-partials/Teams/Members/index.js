import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Members = () => {
    const data = [
        {
            id: "1",
            img: "../img/teamankit.png",
            name: "Ankit Raj",
            role: "Founder"
        },
        {
            id: "2",
            img: "../img/teamtanay.png",
            name: "Tanay Agarwal",
            role: "Co - Founder"
        },
        {
            id: "3",
            img: "../img/teamkundan.png",
            name: "Kundan Kumar",
            role: "Expert Advisor"
        },
        {
            id: "4",
            img: "../img/teamtanisha.png",
            name: "Tanisha Singh",
            role: "Product and Operations"
        },
        {
            id: "5",
            img: "../img/teamkadam.png",
            name: "Kaustubh Kadam ",
            role: "Lead - Technology"
        },
        {
            id: "6",
            img: "../img/teamshivesh.png",
            name: "Shivesh Chautuvedi ",
            role: " Full-Stack Developer"
        },
        {
            id: "7",
            img: "../img/teammonika.png",
            name: "Monika Upadhyay ",
            role: "Operations"
        },
        {
            id: "8",
            img: "../img/teamsagar.png",
            name: "Sagar Shah",
            role: "Lead - Platform Designer"
        },
        {
            id: "9",
            img: "../img/teamdeep.png",
            name: "Deepanshu Badole",
            role: "Videos Marketing"
        },
        {
            id: "10",
            img: "../img/teamgayu.png",
            name: "Gayatri Menon",
            role: " Business Intelligence and Analytics"
        },
        {
            id: "11",
            img: "../img/teambhup.png",
            name: "Bhupendra Kunwar",
            role: "Technology Advisor"
        },
        {
            id: "12",
            img: "../img/teamkartik.png",
            name: "Kartikeya Arora",
            role: "Cloud Specialist"
        }
    ]
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between  px-10  sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10'>
                <h1 className='text-left text-[35px] font-semibold mx-10 mt-[50px] mb-[40px]'>We are backed by the <span className='text-[#3DC0DF]'>BEST Ally !</span></h1>
                <div className='teammain grid xl:lg:grid-cols-4 grid-cols-3 place-items-center'>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <div className='mainteam flex flex-col bg-[#fff] my-5 justify-center'>
                                        <div className='teamimg'>
                                            <img src={val.img} className='rounded w-[270px]'></img>
                                        </div>
                                        <h1 className='text-[30px] font-semibold'>{val.name}</h1>
                                        <p className='text-[18px]'>{val.role}</p>
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

export default Members