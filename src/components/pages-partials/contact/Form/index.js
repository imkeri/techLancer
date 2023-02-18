import React from 'react'

const Form = () => {
    const navigation = {
        social: [
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/vaionex/',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/vaionex/',
                img: '../img/Asset 5 16.png'
            },
            {
                name: 'Twitter',
                href: 'https://twitter.com/vaionex_corp',
                img: '../img/Asset 5 15.png'
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 14.png'
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 13.png'
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 12.png'
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 11.png'
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 10.png'
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vaionex/',
                img: '../img/Asset 5 9.png'
            }
        ],
    }

    return (
        <>
            <div className='max-w-7xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-10 mt-[20px]'>
                <div className='grid xl:lg:md:grid-cols-2 sm:grid-cols-1'>
                    <div className='concate1 flex flex-col items-center'>
                        <img src="../img/image 21.png" className='con_imgs img-fluid w-[410px] h-[410px] self-center'></img>
                        <div className="con_icon flex  py-3 justify-center">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <img src={item.img} alt="" className='mx-[0px]'></img>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='concate2  sm:items-center'>
                        <div className='grid grid-cols-2'>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold'>Name*</label><br></br>
                                <input type="text" placeholder='Name' className="w-[95%] mt-2 border-[#3DC0DF] border-t-0 border-l-0 border-r-0 border-b-1" />
                            </div>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold'>Mobile*</label><br></br>
                                <input type="text" placeholder='Mobile' className="w-[90%] mt-2 border-[#3DC0DF] border-t-0 border-l-0 border-r-0 border-b-1" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 cols-span-2'>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold '>Email*</label><br></br>
                                <input type="text" placeholder='Email' className="w-[95%] mt-2  border-[#3DC0DF] border-t-0 border-l-0 border-r-0 border-b-1"/>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 cols-span-2'>
                            <div className='feild1 py-5'>
                                <label className='mx-2 text-[22px] font-semibold'>Message*</label><br></br>
                                <textarea cols="50" rows="5" className="w-[95%] mt-2  border-[#3DC0DF]" placeholder='Your Message'></textarea>
                            </div> 
                        </div>
                        <div className='text-center'>
                            <button className='uppercase bg-[#3DC0DF] text-[#fff] rounded py-1 px-3'>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form