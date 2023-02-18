import React from 'react'

const AnkitMasterProg = () => {
    const ankitdata = [
        {
            id: "1",
            text: "LinkedIn profile audit and optimisation"
        },
        {
            id: "2",
            text: "Networking and engagement"
        },
        {
            id: "3",
            text: "The importance of building a personal brand"
        },
        {
            id: "4",
            text: "Creating a content/editorial calendar"
        },
        {
            id: "5",
            text: "Consistency and quality of content"
        },
        {
            id: "6",
            text: "Identifying your Buyers' Persona"
        },
        {
            id: "7",
            text: "Ideal Customer/Client Profile (ICP)"
        },
        {
            id: "8",
            text: "Generating inbound and outbound leads"
        },
        {
            id: "9",
            text: "LinkedIn social selling and content marketing"
        }
    ]
    return (
        <div className='master'>
            <h1 className='text-center text-[35px] font-semibold'>What will you Master in the Program?</h1>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div class="row d-flex justify-content-center  mb-3 dap-3">
                    {
                        ankitdata.map((val) => {
                            return (
                                <>

                                    <div class="col-md-4 masterp w-[370px] h-[80
                                        .px] my-[15px]">
                                        <p className='px-1 py-3 text-center text-[15px] '>{val.text}</p>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
                <div className='getcurri text-center pr-[50px]'>
                    <button className='bg-[#3DC0DF] rounded px-3 py-2 text-[#fff] text-[18px] font-semibold hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>GET CURRICULUM</button>
                </div>
            </div>
            <div className='max-w-6xl mx-auto justify-between items-center px-4  sm:px-6 sm:py-4 lg:px-4 lg:justify-start '>

            </div>
        </div>
    )
}

export default AnkitMasterProg