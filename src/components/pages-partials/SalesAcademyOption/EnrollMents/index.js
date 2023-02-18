import React from 'react'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const EnrollMents = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10'>
                <div className='grid xl:lg:md:grid-cols-2 grid-cols-1 flex place-content-center'>
                    <div className='en1 place-content-center flex xl:lg:md:flex-col justify-around'>
                        <div className='include '>
                            <p className='text-[35px] font-semibold xl:lg:md:mt-[70px]'>Enrollment Includes:</p>
                            <ul className='list-disc'>
                                <li className='my-2'>Self-Paced Learning Option</li>
                                <li className='my-2'>Free Live Q&A with Trainer</li>
                                <li className='my-2'> No degree or experience required for programs </li>
                                <li className='my-2'>Taught by Top Sales Mentors</li>
                            </ul>
                        </div>
                        <div className='payment flex flex-col xl:lg:md:ml-[50px] xl:lg:md:pt-[170px]'>
                            <p className='text-[35px] font-semibold text-center'>Tuition Payment Options</p>
                            <div className='paybtn flex justify-center'>
                                <button className='border border-[#3DC0DF]  rounded text-[#000] text-[15px] font-bold px-2 py-1 hover:text-[#fff] hover:bg-[#3DC0DF]'>Sponsorship</button>
                                <button className='border  border-[#3DC0DF]  rounded text-[#000] text-[15px] font-bold px-2 py-1 hover:text-[#fff] hover:bg-[#3DC0DF]'>Installments</button>
                                <button className='border  border-[#3DC0DF]  rounded text-[#000] text-[15px] font-bold px-8 py-1 hover:text-[#fff] hover:bg-[#3DC0DF]'>UPfront</button>
                            </div>
                            <p className='text-[12px] font-medium text-center my-3'>40% of employers offer education reimbursement.</p>
                            <div className='paylit flex gap-10 justify-center'>
                                <p className='text-[20px] font-semibold mb-0'>Pay as little as</p>
                                <p className='text-[20px] font-semibold mb-0'>$0</p>
                            </div>
                            <p className='text-[17px] mt-1 '>Get A Letter You Can Customize to pitch your manager on this course.</p>
                        </div>

                    </div>
                    <div className='en2 xl:lg:md:ml-[120px] place-content-center flex xl:lg:md:flex-col xl:lg:md:mt-[-30px]'>
                        <img src='../img/flow.png' className=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrollMents