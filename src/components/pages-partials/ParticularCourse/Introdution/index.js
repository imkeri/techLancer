import React from 'react'

const Intro = (props) => {
    return (
        <div>
            <div className='max-w-7xl md:mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-6 lg:justify-start lg:space-x-10 mt-[20px] mt-5'>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className=''> 
                        <div className='flex justify-center'>
                            <img src={props.img} className='w-[80%] sm:h-[70%] md:rounded-tr-[180px]'></img>
                        </div>
                    </div>
                    <div className=' mt-0'>
                        <p className="xl:lg:text-[20px] md:text-[16px] sm:text-[15px] font-medium mx-4 mt-[50px]">{props.info} </p>
                        <div className='float-end'>
                            <button className='font-semibold'>read more &gt; </button>
                        </div>
                        <div className='text-bottom ml-6 mt-[60px]'>
                            <h5 className='font-semibold'>{props.name}</h5>
                            <p>Sales Mentor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro