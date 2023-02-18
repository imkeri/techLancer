import React from 'react'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const MasterProgram = (props) => {
    const data = [
        {
            id: "1",
            text: "How to do prospecting in the right way?"
        },
        {
            id: "2",
            text: "Conducting the discovery meeting."
        },
        {
            id: "3",
            text: "Carving out the Value Proposition"
        },
        {
            id: "4",
            text: "Handling objections into opportunity"
        },
        {
            id: "4",
            text: "Negotiate and close"
        }
    ]
    return (
        <div className='master mt-[100px]'>
            <h1 className='text-center text-[35px] font-semibold'>What will you Master in the Program?</h1>
            <div className='max-w-4xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div class="row d-flex justify-content-center  mb-3 dap-3">
                    {
                        data.map((val) => {
                            return (
                                <>

                                    <div class="col-md-6 masterp w-[370px] my-[15px]">
                                        <p className='px-1 py-3 text-center text-[20px] font-medium'>{val.text}</p>
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

export default MasterProgram