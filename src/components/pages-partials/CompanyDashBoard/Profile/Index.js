import React, { useEffect, useState } from 'react'
import { fetchCompanyView } from '../../../../store/action/compuny/GetData'
import { addCompanyProfile } from '../../../../store/action/compuny/AddData'
import { CompanyProfileRemove } from '../../../../store/action/compuny/UpdateData'
import NextLink from 'next/link';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';

const ProfileSide = ({ dispatch, res, imageAdd, removeImage }) => {

    const [data, setData] = useState('');
    const [img, setImg] = useState('');
    const [value, setValue] = useState(false)
    const form = new FormData();
    form.append('image', img);

    useEffect(() => {
        dispatch(fetchCompanyView())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data
        data && setData(data)
    }, [res])

    const handleInput = (e) => {
        setImg(e.target.files[0])

    }

    useEffect(() => {
        img && dispatch(addCompanyProfile(form))
          setValue(false)
    }, [img])

    useEffect(() => {
        const data = imageAdd.data.data
        dispatch(fetchCompanyView())
        setValue(false)
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
        }
    }, [imageAdd])


    useEffect(() => {
        const data = removeImage.data.data
        console.log(".....................", data)
        dispatch(fetchCompanyView())
      
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
        }
    }, [removeImage])


    const deleteProfile = () => {
        dispatch(CompanyProfileRemove())
        setValue(false)
    }

    return (
        <div>
            <ToastContainer/>
            <div className='md:pl-10 min-h-full border-r-2'>
                <div className='flex'>
                    <div className=''>
                        <div className='d1' >
                            <div className='relative flex'>
                                <div className='absolute z-20  w-[110px] h-[110px] flex items-center top-3 md:left-[-40px] bg-[#E7E7E7] rounded-full border-4 border-[#212A41]' >
                                    {
                                        data.image && <img src={data.image} alt='' className='w-[100%] h-[100%] rounded-full' />
                                    }
                                    <div className='flex absolute bottom-[5%] right-[0%]  rounded-full '>
                                        {
                                            value === false && <div className='bg-[#fff] p-2 rounded-full'>
                                                <AddAPhotoIcon onClick={() => setValue(true)} />
                                            </div>
                                        }
                                        <div className='py-5'>
                                            {
                                                value &&
                                                <>
                                                    <div className='bg-[#fff] flex justify-between '>
                                                        <div>
                                                            <input type="file" id="upload" hidden name='image' onChange={handleInput} />
                                                            <label for="upload" className='h-[36px] cursor-pointer '>ADD </label>
                                                        </div>
                                                        <div onClick={() => setValue(false)}>
                                                            <CloseIcon />
                                                        </div>
                                                    </div>
                                                    <div className='bg-[#fff] p-1' ><button onClick={deleteProfile}>REMOVE</button> </div>
                                                </>
                                            }
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-col items-center xl:ml-[20px] ml-[50px] py-5 rounded'>
                                    <div className='teaname pl-[50px] py-3 bg-[#EFEFEF]  w-[345px] h-[110px]  shadow z-10'>
                                        <p className='text-[30px] font-semibold dashname'>
                                            The Drive Sales
                                        </p>
                                        <p className='text-[18px] font-medium mb-0 dashtwo'>{data.name}</p>
                                        <p className='text-[15px] font-medium mt-0 mb-0 dashthree'>Place and year holder</p>
                                    </div>
                                    <div className='teadetail studdetail px-3 py-3 bg-[#EFEFEF]  w-[340px] h-[100%]  shadow ml-[-20px] '>
                                        <div className='mainstudbtn flex gap-4 py-3 '>
                                            <div className='studbtn1'>
                                                <NextLink href='/company-dashboard/view'> <button className='bg-[#212A41] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded uppercase'>View PROFILE</button></NextLink>
                                            </div>
                                            <div className='studbtn1'>
                                                <NextLink href='/company-dashboard/edit'><button className='bg-[#212A41] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded uppercase'>EDIT</button></NextLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center my-4'>
                            <NextLink href='/company-dashboard/post-internship'> <button className='bg-[#212A41]  text-[#fff] text-[18px] font-semibold px-5 py-2 rounded uppercase'>NEW INTERNSHIP</button></NextLink>
                            <NextLink href='/company-dashboard/job-preferences'> <button className='bg-[#212A41] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded uppercase'>NEW JOB</button></NextLink>
                        </div>
                        <div className='flex flex-col ml-[40px]  gap-4 pb-8'>
                            <NextLink href="/company-dashboard" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Dashboard</NextLink>
                            <NextLink href="/company-dashboard/job-view" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Jobs</NextLink>
                            <NextLink href="/company-dashboard/internship-view" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Internship</NextLink>
                            <NextLink href="" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Messages</NextLink>
                            <NextLink href="" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Referrals</NextLink>
                        </div>
                        <div className='ml-[40px] studhr'>
                            <hr className='mr-[20px] bg-[#8F8F8F] dashhr'></hr>
                        </div>
                        <div className='flex flex-col ml-[40px] gap-3 lg:pb-[200px] pb-[50px] pt-8'>
                            <NextLink href="" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>Offers Sent</NextLink>
                            <NextLink href="" className='text-[20px] px-4 font-semibold hover:bg-[#212A41] hover:text-[#ffff] rounded py-2 '>The Drive Sales Team</NextLink>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchCompanyView,
    imageAdd: state.addCompanyProfile,
    removeImage: state.CompanyProfileRemove

})
export default connect(mapStateToProps)(ProfileSide)
