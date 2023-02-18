import React from 'react'
import '../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const TanayMasterProg = () => {
    const tanaydata = [
        {
            id: "1",
            text: "Understanding different types of restaurant formats"
        },
        {
            id: "2",
            text: "Location, location, location!"
        },
        {
            id: "3",
            text: "Improving the Table Turnover Rate"
        },
        {
            id: "4",
            text: "Social Media Promotion"
        },
        {
            id: "5",
            text: "Upselling"
        },
        {
            id: "6",
            text: "Staff Training"
        }
    ]
    return (
        <div className='master'>
            <h1 className='text-center text-[35px] font-semibold'>What will you Master in the Program?</h1>
            <div className='max-w-4xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div class="row d-flex justify-content-center  mb-3 dap-3">
                    {
                        tanaydata.map((val) => {
                            return (
                                <>

                                    <div class="col-md-6 masterp w-[370px] my-[15px]">
                                        <p className='px-1 py-3 text-center '>{val.text}</p>
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

export default TanayMasterProg