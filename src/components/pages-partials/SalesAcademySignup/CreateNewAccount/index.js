import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { connect } from 'react-redux'
import { userRagistration } from '../../../../store/action/user/AddData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateNewAccount = ({ dispatch, res }) => {

    const [data, setData] = useState({
        first_name: "",
        email: "",
        mobile: "",
        whats_app: "",
        password: "",
        confirmPassword: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        if (e.target.name == 'whats_app') {
            if (e.target.checked) {
                setData({ ...data, [name]: 1 })
            }
            else {
                setData({ ...data, [name]: 0 })
            }

        }
        console.log(data)
    }

    const AddUser = (e) => {
        console.log("hello")
        e.preventDefault()
        dispatch(userRagistration(data))
    }

    useEffect(() => {
        const data = res.data && res.data.data
        if (data) {
            if (data.code == 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
                setTimeout(()=>{
                    window.location="/student-login"
                }, 1000);
            }
        }
    }, [res])
    return (
        <div>
            <ToastContainer/>
            <div className=' max-w-2xl mx-auto justify-between items-center px-10 xl:lg:md:sm:px-0 lg:justify-start lg:space-x-10 border rounded my-[150px] py-5 pb-[50px]'>
                <div className=" flex flex-col justify-center sm:px-6 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className=" text-center text-3xl font-extrabold text-gray-900  pt-[50px]">
                            Create New Account
                        </h2>
                    </div>

                    <div className="flex justify-center pt-2">
                    </div>
                    <div className="mt-8">
                        <div className="saleAcademynew bg-white   sm:rounded-lg sm:px-10">
                            <form className="space-y-2" method='post'>
                                <div className='newac1 grid grid-cols-2 gap-5'>
                                    <div className='feild1 py-4'>
                                        <label className='mx-2 text-[18px] font-semibold '>Your Name*</label><br></br>
                                        <input type="text" placeholder='Your Company Name' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name="first_name" onChange={handleInput} value={data.first_name} />
                                    </div>
                                    <div className='feild1 py-4'>
                                        <label className='mx-2 text-[18px] font-semibold '>Your Work Email*</label><br></br>
                                        <input type="text" placeholder='Your Work  Email' className="w-[100%]  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" name="email" onChange={handleInput} value={data.email} />
                                    </div>
                                </div>
                                <div className='newac1 grid grid-cols-2 gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold'>Mobile Number*</label><br></br>
                                        <input type="text" placeholder='Mobile Number*' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name="mobile" onChange={handleInput} value={data.mobile} />
                                    </div>
                                    <div className='feild1wp flex  lg:md:py-3 sm:py-3 lg:md:mt-[30px] sm:mt-[30px] gap-3'>
                                        <input type="checkbox" placeholder='Mobile' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" name="whats_app" onChange={handleInput} value={data.whats_app} /><p>WhatsApp</p>
                                    </div>
                                </div>
                                <div className='newac1 grid grid-cols-2 gap-5'>
                                    <div className='feild1 py-3'>
                                        <label className='mx-2 text-[18px] font-semibold py-2'>Password*</label><br></br>
                                        <input type="text" placeholder='Enter Password' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name="password" onChange={handleInput} value={data.password} />
                                    </div>
                                    <div className='feild1 py-3 '>
                                        <label className='mx-2 text-[18px] font-semibold'>Confirm Password*</label><br></br>
                                        <input type="text" placeholder='Confirm Password' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name="confirmPassword" onChange={handleInput} value={data.confirmPassword} />
                                    </div>
                                </div>
                                <div className='feild1chk flex  gap-3 py-3'>
                                    <input type="checkbox" placeholder='Mobile' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] ml-[10px] border-t-0 border-l-0 border-r-0 border-b-0" /><p>I agree to Terms & Conditions</p>
                                </div>
                                <div className='text-center '>
                                    <button className='btn btncompnew bg-[#202040] text-[#fff] py-1 px-[45px] rounded-3xl hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={(e) => { AddUser(e) }}>Create New Account</button>
                                </div>
                                <div className='newaacount mt-[12px] flex gap-1 justify-center'>
                                    <NextLink href="" className='text-[12px]'>Have an Account?</NextLink>
                                    <p className='text-[12px]'>|</p>
                                    <NextLink href="/student-login" className='text-[12px]'>Login Now</NextLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' max-w-2xl mx-auto flex place-content-center items-center px-10 xl:lg:md:sm:px-0 lg:justify-center lg:space-x-10 py-5 pb-[50px]'>
                <div className=''>
                    <img src='../img/Group 10.png'></img>
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    res: state.userRagistration,
});

export default connect(mapStateToProps)(CreateNewAccount)