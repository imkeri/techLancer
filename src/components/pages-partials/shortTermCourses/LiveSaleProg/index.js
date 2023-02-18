import React, { useEffect, useState } from 'react'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { fetchtermWiseView } from '../../../../store/action/Comman/getdata'
import { connect } from 'react-redux';
import NextLink from 'next/link'



const LiveSaleProg = ({ dispatch, res }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const query = localStorage.getItem("term")
    dispatch(fetchtermWiseView({ "term": query }))
  }, [])

  useEffect(() => {
    const data = res.data && res.data.data && res.data.data.data
    data && setData(data)
  }, [res])

  return (

    <div>
      <div className='max-w-6xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10'>
        <h1 className='text-center text-[35px] font-semibold'>Live Sales Programs</h1>
        <p className='text-center text-[20px] font-medium xl:lg:md:px-[160px]'>Our flagship sales programs teach beneficial skills you don't even know you need.
          Begin something new, break out of a rut or improve your willingness to work.</p>
      </div>
      <div className='max-w-6xl mx-auto justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10'>
        <div className='mainfac grid xl:lg:md:grid-cols-2  lg:md:sm:place-content-center flex'>
          {
            data.map((val) => {
              return (
                <>
                  <div className='d1 ml-[70px]'>
                    <div className='relative flex'>
                      <div className=' absolute z-20  w-[130px] h-[130px] flex items-center top-10 xl:lg:md:left-[-40px]'>
                        <img src='/img/shrotchirag.png' className=''></img>
                      </div>
                      <div className='flex flex-col items-center  ml-[50px] py-5 rounded'>
                        <div className='teaname pl-[50px] py-3 bg-[#EFEFEF]  w-[340px] h-[105px]  shadow z-10'>
                          <h5 className='text-[20px] font-semibold'>
                            {val.teacher_name}
                          </h5>
                          <p className='text-[15px]'>{val.role}</p>
                        </div>
                        <div className='teadetail px-3 py-3 bg-[#EFEFEF]  w-[340px] h-[340px]  shadow ml-[-20px]'>
                          <div className='c1 flex gap-1 mt-[20px]'>
                            <h5 className='float-left text-[20px] font-semibold'>{val.title}</h5>
                            <p className='float-right text-[18px] font-semibold flex flex-col bg-[#D9D9D9] rounded px-2 py-1 h-[50px]'>₹999<span className='text-[8px] text-center line-through'>₹4999</span></p>
                          </div>
                          <p className='text-[15px] my-3'>Fresh batches every week</p>
                          <hr></hr>
                          <div className='stud flex gap-3'>
                            <p className='float-left text-[14px] flex gap-2'><PeopleOutlineIcon className='text-[#D9D9D9] pepoleicon ' />120 Student already enrolled</p>
                            <p className='float-right bg-[#D9D9D9] W-[55px] h-[32px] px-2 rounded text-[15px] py-1'><StarBorderOutlinedIcon className='staricon text-[#EFEFEF]' />9.0</p>
                          </div>
                          <div className='learnmore text-center mt-[20px]'>
                            <NextLink href={`/shorterm-course/sortterm-course-detail/${val._id}`} onClick={()=>localStorage.setItem("courseId",val._id)}><button className='bg-[#3DC0DF] text-[#fff] uppercase rounded px-2 py-2 hover:bg-[white] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>Learn More</button></NextLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className='text-center mt-[80px]'>
          <button className='bg-[#3DC0DF] text-[#fff] uppercase rounded px-2 py-2 hover:bg-[white] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]'>LOAD More</button>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({

  res: state.fetchtermWiseView

});
export default connect(mapStateToProps)(LiveSaleProg)
