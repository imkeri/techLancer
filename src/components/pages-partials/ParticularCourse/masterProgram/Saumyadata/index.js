import React from 'react'

const SaumyaMasterProg = () => {
    const saumyadata = [
        {
            id: "1",
            text: "What is Distribution?"
        },
        {
            id: "2",
            text: "What is distribution channels of sales?"
        },
        {
            id: "3",
            text: "Various terminologies used in distribution"
        },
        {
            id: "4",
            text: "Understand different channels of sales"
        },
        {
            id: "5",
            text: "Importance of using channels of sales in consumer goods as well as product"
        },
        {
            id: "6",
            text: "What is DPL,PDO and its importance in growing distribution & business"
        },
        {
            id: "7",
            text: "Various distribution channel partners"
        },
        {
            id: "8",
            text: "How to assess market potential for your company"
        },
        {
            id: "9",
            text: "Sales team structure and span of control"
        }
    ]
    return (
        <div className='master'>
            <h1 className='text-center text-[35px] font-semibold'>What will you Master in the Program?</h1>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div class="row d-flex justify-content-center  mb-3 dap-3">
                    {
                        saumyadata.map((val) => {
                            return (
                                <>

                                    <div class="col-md-4 masterp w-[370px] h-[80px] my-[15px]">
                                        <p className='px-1 py-3 text-center text-[15px] '>{val.text}</p>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
                <div className='getcurri text-center pr-[50px]'>
                    <button className='bg-[#3DC0DF] rounded px-3 py-2 text-[#fff] text-[18px] font-semibold'>GET CURRICULUM</button>
                </div>
            </div>
            <div className='max-w-6xl mx-auto justify-between items-center px-4  sm:px-6 sm:py-4 lg:px-4 lg:justify-start '>

            </div>
        </div>
    )
}

export default SaumyaMasterProg