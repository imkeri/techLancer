    import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { connect } from "react-redux";
import {compunyRagistration} from '../../../../store/action/compuny/AddData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompSignUp = ({ dispatch, res }) => {

    const [data,setData] = useState({
        name:"",
        type:"",
        industry_type:"",
        no_of_emp:"",
        your_name:"",
        your_role:"",
        email:"",
        country:"",
        state:"",
        city:"",
        mobile:"",
        wallet:"",
        whats_app:0,
        password:"",
        confirmPassword:""
    })

    const Ragistration =(e)=>{
        e.preventDefault()
        dispatch(compunyRagistration(data));     
    }


    useEffect(()=>{
        const data = res.data ? res.data.data  : []
         if(data)
         {
            if (data.code == 201) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
    
                });
                setTimeout(()=>{
                    window.location="/company-login";
                }, 1000);
            }

         }
    },[res])



    const handleInput =(e)=>{
       const {name,value} = e.target
       setData({...data,[name]:value})
       if(e.target.name=='whats_app')
       {
        if (e.target.checked)
        {
            setData({...data,[name]:1})
        }
        else{
            setData({...data,[name]:0})
        }
       
       }
    }

    return (
        <div>
            <ToastContainer/>
            <h1 className='CMPSIGN text-center text-[35px] font-semibold mt-[50px] mb-[20px]'>Create New Account For Your Company</h1>
            <div className='SIGNUP1 mx-[100px] sm:items-center'>
                <div className='newac1 grid grid-cols-2 gap-5'>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold '>Company Name*</label><br></br>
                        <input type="text" placeholder='Your Company Name' name='name' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} value={data.name}/>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Company Type*</label><br></br>
                        <select className='form-control w-[100%] rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]  border-t-0 border-l-0 border-r-0 border-b-0' placeholder='Choose' name='type' onChange={handleInput} value={data.type}>
                            <option value="1" className=''>Choose</option>
                            <option value="Private Limited ">Private Limited </option>
                            <option value="Public Limited ">Public Limited </option>
                            <option value="Micro Companies">Micro Companies</option>
                            <option value="Small Companies.">Small Companies.</option>
                            <option value="Medium Companies.">Medium Companies. </option>
                            <option value="Limited by Guarantee.">Limited by Guarantee.</option>
                        </select>
                    </div>
                </div>        
                <div className='newac1 grid grid-cols-2 gap-5'> 
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Industry Type*</label><br></br>
                        <select className='form-control w-[100%] rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]  border-t-0 border-l-0 border-r-0 border-b-0' placeholder='Choose' name='industry_type' onChange={handleInput} value={data.industry_type}>
                            <option value="1" className=''>Choose</option>
                            <option value="Commercial">Commercial</option>
                            <option value="IT">It</option>
                     
                        </select>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>No. Of Employees</label><br></br>
                        <input type="text" placeholder='No. Of Employees' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='no_of_emp' onChange={handleInput} value={data.no_of_emp} />
                    </div>
                </div>
                <div className='newac1 grid grid-cols-2 gap-5'>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Your Name*</label><br></br>
                        <input type="text" placeholder='Your Company Name' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='your_name' onChange={handleInput} value={data.your_name}/>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Your Role*</label><br></br>
                        <select className='form-control w-[100%] rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px]  border-t-0 border-l-0 border-r-0 border-b-0' placeholder='Choose' name='your_role' onChange={handleInput} value={data.your_role}>
                            <option value="1" className=''>Choose</option>
                            <option value="CEO">CEO</option>
                            <option value="founder">Founder</option>
                            <option value="co-founder">Co-founder</option>
                        </select>
                    </div>
                </div>
                <div className='newac1 grid grid-cols-3 gap-2'>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Country*</label><br></br>
                        <input type="text" placeholder='Enter Country' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0"  name='country' onChange={handleInput} value={data.country}/>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>State*</label><br></br>
                        <input type="text" placeholder='Enter State' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0"  name='state' onChange={handleInput} value={data.state}/>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>City*</label><br></br>
                        <input type="text" placeholder='Enter City' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} name="city" value={data.city}/>
                    </div>
                </div>
                <div className='newac1 grid grid-cols-2 cols-span-2 gap-5'>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold '>Your Work Email*</label><br></br>
                        <input type="text" placeholder='Your Work  Email' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" name='email' onChange={handleInput} value={data.email}/>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold '>Wallet*</label><br></br>
                        <input type="text" placeholder='Your wallet' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" name='wallet' onChange={handleInput} value={data.wallet}/>
                    </div>
                </div>
               
                <div className='newac1 grid grid-cols-2 gap-5'>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Mobile Number*</label><br></br>
                        <input type="text" placeholder='Mobile Number*' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" name='mobile' onChange={handleInput} value={data.mobile}/>
                    </div>
                    <div className='feild1wp flex  lg:md:py-3 sm:py-3 lg:md:mt-[30px] sm:mt-[30px] gap-3'>
                        <input type="checkbox"  className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" name='whats_app' onChange={handleInput} value={data.whats_app}/><p>WhatsApp</p>
                    </div>
                </div>
                <div className='newac1 grid grid-cols-2 gap-5'>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Password*</label><br></br>
                        <input type="text" placeholder='Enter Password' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0"  name='password' onChange={handleInput} value={data.password}/>
                    </div>
                    <div className='feild1 py-3'>
                        <label className='mx-2 text-[18px] font-semibold'>Confirm Password*</label><br></br>
                        <input type="text" placeholder='Confirm Password' className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={handleInput} name="confirmPassword" value={data.confirmPassword}/>
                    </div>
                </div>
                <div className='feild1chk flex  gap-3 py-3 mx-2'>
                    <input type="checkbox" placeholder='Mobile' className="rounded bg-[#DBDBDB] form-control w-[20px] h-[20px] border-t-0 border-l-0 border-r-0 border-b-0" /><p>I agree to Terms & Conditions</p>
                </div>
                <div className='text-center '>
                    <button className='btn btncompnew bg-[#202040] text-[#fff] py-1 px-[45px] rounded-3xl hover:bg-[#3DC0DF] hover:text-[#202040] font-semibold' onClick={(e)=>{Ragistration(e)}}>Create New Account</button>
                </div>
                <div className='newaacount mt-[12px] flex gap-1 justify-center'>
                    <NextLink href="/company-login" className='text-[12px]'>Have an Account?</NextLink>
                    <p className='text-[12px]'>|</p>
                    <NextLink href="/company-login" className='text-[12px]' ><button>Login Now</button></NextLink>
                </div>
                <div className="relative flex justify-center py-3  items-center">
                    <img src='/img/Group 10.png' className='bottomimg absolute w-[215px] h-[46px] lg:mt-[350px]'></img>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.compunyRagistration,
});

export default connect(mapStateToProps)(CompSignUp);
