import React from 'react'

const Skillset = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[20px]'>
        <h1 className='text-center text-[35px] mt-[40px] font-semibold'>Find Sales Jobs That's Fits Your Skillset!</h1>
        <div className="mt-6 grid grid-cols-3 gap-10 py-3  justify-center imgs">
          <div className='s1 flex gap-2'>
            <div className='sline w-[2%] h-[80%] bg-[#3DC0DF]'></div>
            <div className='sname'>
              <p className='text-[#000] text-[25px] font-semibold bg-[#EBEBEB] rounded'>Business Development</p>
              <p className='text-[#9F9F9F] text-[20px]'>Sales Interz</p>
              <p className='text-[#9F9F9F] text-[20px]'>Sales Consultant</p>
              <p className='text-[#9F9F9F] text-[20px]'>Sales Coach</p>
              <p className='text-[#9F9F9F] text-[20px]'>Sales Trainer</p>
            </div>
          </div>
          <div className='s2 col-span-2'>
            <p className='leading-relaxed text-[18px]'>B2C   CRM   Client Relationship   RFPs   PowerPoint</p>
            <p className='leading-relaxed text-[18px]'> Presentation   Design Thinking   System Design   Corporate Sales</p>
            <p className='leading-relaxed text-[18px]'>Enterprise Sales   SaaS Sales   Agile   Pitch   Outbound Sales</p>
            <p className='leading-relaxed text-[18px]'> Direct Selling   Key Account Management   Inside Sales</p>
            <p className='leading-relaxed text-[18px]'> Email Marketing   Sales Engagement   Forecasting</p>
            <p className='leading-relaxed text-[18px]'> Business Intelligence   B2B   Pre-sales   Inbound Sales   B2C2B</p>
            <p className='leading-relaxed text-[18px]'> Sales Enablement   Channel Sales</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skillset