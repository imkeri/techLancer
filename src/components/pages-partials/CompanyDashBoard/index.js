import SecondSharedLayout from '../../layout/shared-layout/SecondSharedLayout'
import React from 'react'
import MainCompDashBoard from './CompDashBoard'

const MainCompanyDashBoard = () => {
  return (
    <div>
      <SecondSharedLayout>
        <MainCompDashBoard />
      </SecondSharedLayout>
    </div>
  )
}

export default MainCompanyDashBoard