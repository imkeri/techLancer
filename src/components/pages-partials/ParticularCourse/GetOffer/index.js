import React from 'react'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const GetOffer = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto  justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start lg:space-x-10">
                <h1 className='text-center text-[35px] font-semibold'>Get the offer while it lasts!</h1>
            </div>
            <div className="max-w-7xl mx-auto  justify-between items-center px-4 py-5  sm:py-4 lg:px-8 lg:justify-start">
                <div className='row flex mainoff'>
                    <div className='col-lg-5 col-md-5 col-sm-5 flex '>
                        <div className='offer1 xl:lg:md:sm:w-[375px] p-3 rounded xl:lg:ml-[50px] md:sm:[0px]'>
                            <h4 className='text-[30px] font-semibold'>Master Sales Strategies
                                for Emerging Markets
                                (NFT & Blockchain)
                                Launch Offer (Save
                                ₹4,000)</h4>
                            <p className='text-[30px] font-semibold'>₹999 <span className='line-through text-[15px]'>₹4,999</span></p>
                            <ul className='list-disc'>
                                <li className='text-[15px]'>Enroll now and get bonuses worth ₹10,000 absolutely free. There was never a better time to grab this course.</li>
                                <li className='text-[15px]'>Enjoy the discounted price of ₹999 and save a total of ₹4,000.</li>
                                <li className='text-[15px]'>The launch offer expires tonight.</li>
                            </ul>
                            <p className='text-[10px]'>Note: No exceptions would be made beyond the offer expiry date. The prices
                                would go up and no free bonuses</p>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-7 col-sm-7'>
                        <div className='offer2 flex flex-col mt-[80px]'>
                            <div className='diff'>
                                <h5 className='text-[20px] font-semibold'>How are we different...</h5>
                                <ul className='list-disc'>
                                    <li className='text-[15px] py-1'> Structured : Thoughtfully designed curriculum helps you to emerge confident & comfortable </li>
                                    <li className='text-[15px] py-1'> 100% online course- Start instantly and learn at your own schedule.</li>
                                    <li className='text-[15px] py-1'> Personalised : Topics, peers & pace of learning are optimized for your needs </li>
                                    <li className='text-[15px] py-1'> Industry-relevant : Industry-tested curriculum to make you job ready</li>
                                </ul>
                            </div>
                            <div className='bonuses'>
                                <h5 className='text-[20px] font-semibold'>And bonuses too...</h5>
                                <ul className='list-disc'>
                                    <li className='text-[15px] py-1'> Exclusive Access to the fastest-growing sales community </li>
                                    <li className='text-[15px] py-1'> Framework for an impactful elevator pitch</li>
                                    <li className='text-[15px] py-1'> Sales IQ Check Report Cars to analyze your sales expertise </li>
                                    <li className='text-[15px] py-1'> Template on How to sell on Social Media</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='offenroll text-center mt-5'>
                    <button className='bg-[#3DC0DF] text-[#fff] text-[15px] font-semibold px-3 py-2 rounded hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>ENROLL NOW</button>
                </div>
            </div>
        </div>
    )
}

export default GetOffer