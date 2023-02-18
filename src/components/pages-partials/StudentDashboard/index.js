import SecondSharedLayout from '../../layout/shared-layout/SecondSharedLayout'
import React from 'react'
import StudDashboard from '../StudentDashboard/edit-profile/index'

const MainStudentDashboard = () => {
  return (
    <div>
      <SecondSharedLayout>
        <StudDashboard />
      </SecondSharedLayout>
    </div>
  )
}

export default MainStudentDashboard