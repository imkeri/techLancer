import SharedLayout from '@/components/layout/shared-layout'
import FormSharedLayout from '@/components/layout/shared-layout/FormSharedLayout'
import React from 'react'
import ForgetPassWord from './ForgetPass'

const MainForgetPassword = () => {
    return (
        <div>
            <FormSharedLayout>
                <ForgetPassWord />
            </FormSharedLayout>
        </div>
    )
}

export default MainForgetPassword