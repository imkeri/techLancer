import React, { useEffect, useState } from 'react'
import NextLink from 'next/link';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {fetchUserView} from '../../../../store/action/user/GetData'
import { addUserProfile } from '../../../../store/action/user/AddData'
import { UserProfileRemove } from '../../../../store/action/user/UpdateData'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';

const ProfileSide = ({ dispatch, res, imageAdd, removeImage }) => {

    const [data, setData] = useState('');
    const [img, setImg] = useState('');
    const [value, setValue] = useState(false)
    const [toggle,setToggle]=useState(false)
    const form = new FormData();
    form.append('profile', img);

    useEffect(() => {
        dispatch(fetchUserView())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data
        console.log("data:::",data)
        data && setData(data)
    }, [res])

    const handleInput = (e) => {
        setImg(e.target.files[0])

    }

    useEffect(() => {
        img && dispatch(addUserProfile(form))
        setValue(false)
    }, [img])

    useEffect(() => {
        const data = imageAdd.data.data
 
        dispatch(fetchUserView())
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
        dispatch(fetchUserView())
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });

            }
        }
    }, [removeImage])


    const deleteProfile = () => {
        dispatch(UserProfileRemove())
        setValue(false)
    }

    return (
        <div>
            <ToastContainer/>
            <div className='md:pl-10 min-h-full border-r-2'>
                <div className='flex'>
                <div className=''>
                        <div className='flex'>
                            <div className=''>
                                <div className='d1' >
                                    <div className='relative flex'>
                                    <div className='absolute z-20  w-[110px] h-[110px] flex items-center top-3 xl:lg:md:left-[-40px] bg-[#E7E7E7] rounded-full border-4 border-[#3DC0DF]' >
                                            {
                                                data.profile && <img src={data.profile} alt='' className='w-[100%] h-[100%] rounded-full' />
                                            }
                                            <div className='flex absolute bottom-[5%] right-[0%]  rounded-full '>
                                                {
                                                    value === false && <div className='bg-[#fff] p-2 rounded-full'>
                                                        <AddAPhotoIcon onClick={() => setValue(true)} />
                                                    </div>
                                                }
                                                <div className=''>
                                                    {
                                                        value &&
                                                        <>
                                                             <div className='bg-[#fff] flex justify-between '>
                                                                <div>
                                                                    <input type="file" id="upload" hidden name='image' onChange={handleInput} />
                                                                    <label for="upload" className='h-[36px] cursor-pointer '>ADD </label>
                                                                </div>
                                                                <div onClick={()=>setValue(false)}>
                                                                    <CloseIcon/>
                                                                </div>
                                                            </div>
                                                            <div className='bg-[#fff] p-1' ><button onClick={deleteProfile}>REMOVE</button> </div>
                                                        </>
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex flex-col items-center  ml-[50px] py-5 rounded'>
                                            <div className='teaname pl-[50px] py-3 bg-[#EFEFEF]  w-[345px] h-[110px]  shadow z-10'>
                                                <p className='text-[30px] font-semibold dashname'>
                                                {data?.first_name} {data?.last_name}
                                                </p>
                                                <p className='text-[18px] font-medium mb-0 dashtwo'>Institute name holder</p>
                                                <p className='text-[15px] font-medium mt-0 mb-0 dashthree'>Place and year holder</p>
                                            </div>
                                            <div className='teadetail studdetail px-3 py-3 bg-[#EFEFEF]  w-[340px] h-[100%]  shadow ml-[-20px]'>
                                                <div className='mainstudbtn flex gap-4 py-3'>
                                                    <div className='studbtn1'>
                                                        <NextLink href='/student-dashboard/edit'><button className='bg-[#3DC0DF] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded'>EDIT PROFILE</button></NextLink>
                                                    </div>
                                                    <div className='studbtn1'>
                                                        <button className='bg-[#3DC0DF] text-[#fff] text-[18px] font-semibold px-5 py-2 rounded'>SETTINGS</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col ml-[60px] gap-4 pb-8'>
                                    <NextLink href="" className='text-[20px] font-semibold hover:bg-[#F1F1F1] rounded py-2 '>Dashboard</NextLink>
                                    <NextLink href="" className='text-[20px] font-semibold hover:bg-[#F1F1F1] rounded py-2' onClick={()=>setToggle(!toggle)}>Applys</NextLink>
                                    {
                                        toggle &&
                                        <div className='insideinter flex flex-col ml-10 gap-2'>
                                        <NextLink href="/student-dashboard/apply-job" className='text-[20px] font-medium '>Jobs</NextLink>
                                        <NextLink href="/student-dashboard/apply-internship" className='text-[20px] font-medium'>Internship</NextLink>
                                    </div>
                                    }
                                    <NextLink href="" className='text-[20px] font-semibold hover:bg-[#F1F1F1] rounded py-2'>Messages</NextLink>
                                </div>
                                <div className='ml-[40px]'>
                                    <hr className='text-[#8F8F8F]'></hr>
                                </div>
                                <div className='flex flex-col ml-[60px] gap-3 pb-[50px] pt-8'>
                                    <NextLink href="" className='text-[20px] font-semibold hover:bg-[#F1F1F1] rounded py-2'>Events</NextLink>
                                    <NextLink href="" className='text-[20px] font-semibold hover:bg-[#F1F1F1] rounded py-2'>Hall of Fame</NextLink>
                                    <NextLink href="" className='text-[20px] font-semibold hover:bg-[#F1F1F1] rounded py-2'>Mentor</NextLink>
                                    <NextLink href="" className='text-[20px] font-semibold hover:bg-[#F1F1F1] rounded py-2'>Job Offers</NextLink>
                                    <NextLink href="" className='text-[18px] hover:bg-[#F1F1F1] rounded py-2'>Pay after Internship policy</NextLink>
                                </div> 
                            </div>
                           
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    res:state.fetchUserView,
    imageAdd: state.addUserProfile,
    removeImage:state.UserProfileRemove


})
export default connect(mapStateToProps)(ProfileSide)

