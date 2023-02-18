import React, { useEffect } from 'react'
//  eslint-disable jsx-a11y/anchor-is-valid 
//  eslint-disable @next/next/no-img-element 
import NextLink from 'next/link'
import { useState } from 'react'
import { connect } from "react-redux";
import { userLogin } from '../../../../store/action/user/AddData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginForm = ({ dispatch, res }) => {



  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(userLogin(data))
  }


  useEffect(() => {
    const data = res.data ? res.data.data : []
  if(data)
  {
    if (data.code == 200) {
      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,

      });
      setInterval(() => {
        window.location='/sales-academy'
      }, 1000);
  }
  }
   
  }, [res])



  return (
    <div>
      <ToastContainer />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-[150px] text-center text-3xl font-extrabold text-gray-900 ">
            Login For User
          </h2>
        </div>

        <div className="flex justify-center pt-2">

        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className=''>
                <label>Email*</label><br></br>
                <input type="text" placeholder="email" className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' name='email' value={data.email} onChange={handleChange} />
              </div>
              <div className=''>
                <label>Password*</label><br></br>
                <input type="text" placeholder="password" className='rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0' name='password' value={data.password} onChange={handleChange} />
              </div>
              <NextLink href="forget-password " className='text-[12px] hover:bg-[#3DC0DF] hover:text-[#202040]'>Forget Password ?</NextLink>
              <div className='text-center'>
                <button className='btn bg-[#202040] text-[#fff] py-1 px-[30px] rounded-3xl'>Login</button>
              </div>
            </form>
            <div className='newaacount mt-[15px] flex gap-1 justify-center'>
              <NextLink href="" className='text-[12px]'>New to TheDriveSales?</NextLink>
              <p className='text-[12px]'>|</p>
              <NextLink href="/student-signup" className='text-[12px] hover:bg-[#3DC0DF] hover:text-[#202040]'>Create an Account</NextLink>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex justify-center ">
          <img src='/img/Group 10.png' className=' w-[215px] h-[46px] mt-[360px] '></img>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  res: state.userLogin,
});

export default connect(mapStateToProps)(LoginForm);
