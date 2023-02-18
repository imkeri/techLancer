
import SecondSharedLayout from '../../layout/shared-layout/SecondSharedLayout'
import React from 'react'
import FixPart from './../login/FixPart'
import CompSignUp from './signupForm'

const MainSignup = () => {
    return (
        <SecondSharedLayout>
            <div className='grid flex gap-5 lg:grid-cols-2 grid-cols-1 '>
                <div className=''>
                    <FixPart />
                </div>
                <div className=''>
                    <CompSignUp />
                </div>
            </div>
        </SecondSharedLayout>
    )
}

export default MainSignup