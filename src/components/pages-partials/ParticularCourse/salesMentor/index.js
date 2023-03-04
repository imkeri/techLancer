import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchtCourseDetail } from '../../../../store/action/Comman/getdata'
const annidata = [
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

const SalesMentor = ({ dispatch, res, title, secondtit }) => {

    const [data, setData] = useState("")
    useEffect(() => {
        const id = localStorage.getItem('courseId')
        dispatch(fetchtCourseDetail(id))
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        console.log("data:::::", data)
        data && setData(data)

    }, [res])

    return (
        <div>

            <div className='max-w-7xl mx-auto  px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10'>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    <div className='lg:col-span-2  place-content-center'>
                        <div className=''>
                            <div className='mentorlogo flex'>
                                <img src='/img/mentorlogo.png' className='w-[73px] h-[113px]'></img>
                            </div>
                            <div className='mtit '>
                                <h1 className='xl:lg:text-[50px] md:text-[40px] sm:text-[37px] text-[32px] font-semibold uppercase '>{data.title}</h1>
                            </div>
                            <div className='mentorpra '>
                                <p className='xl:lg:text-[22px] md:[17px] sm:text-[17px] capitalize'>{data.description}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 lg:justify-start justify-center'>
                            <div className='batches bg-[#3DC0DF] rounded py-2 px-3'>
                                <p className='text-[15px] text-[#fff] mb-0'>DATE</p>
                                <h4 className='sm:text-[26px] text-[20px] text-[#fff] font-semibold'>Weekly Batches</h4>
                            </div>
                            <div className='batches bg-[#3DC0DF] rounded py-2 px-3'>
                                <p className='text-[15px] text-[#fff] mb-0'>DATE</p>
                                <h4 className='sm:text-[26px] text-[20px] text-[#fff] font-semibold'>Weekly Batches</h4>
                            </div>
                            <div className='batches bg-[#3DC0DF] rounded py-2 px-3'>
                                <p className='text-[15px] text-[#fff] mb-0'>DATE</p>
                                <h4 className='sm:text-[26px] text-[20px] text-[#fff] font-semibold'>Weekly Batches</h4>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src='/img/saumyainfo.png' className=' w-[90%] h-[90%]  rounded-lg '></img>
                    </div>
                </div>
            </div>
            <div className='master'>
                <h1 className='text-center text-[35px] font-semibold'>What will you Master in the Program?</h1>
                <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 mt-[20px]'>
                    <div class="row d-flex justify-content-center  mb-3 dap-3">
                    <div class="grid md:grid-cols-3 sm:grid-cols-2  gap-4 masterp w-[370px] h-[80
                                .px] my-[15px]">
                        {
                            
                            annidata.map((val) => {
                                return (
                                    <>
                                            <p className='px-1 py-3 text-center text-[15px] '>{val.text}</p>
                                    </>
                                )
                            })
                                
                        }
                        </div>
                    </div>
                    <div className='getcurri text-center pr-[50px]'>
                        <button className='bg-[#3DC0DF] rounded px-3 py-2 text-[#fff] text-[18px] font-semibold'>GET CURRICULUM</button>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto justify-between items-center px-4  sm:px-6 sm:py-4 lg:px-4 lg:justify-start '>

                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchtCourseDetail
})
export default connect(mapStateToProps)(SalesMentor)



