import SecondSharedLayout from '../../components/layout/shared-layout/SecondSharedLayout'
import React from 'react'
import ViewJob from '../../components/pages-partials/JobPreferences/viewJob'

const Viewjob = () => {
  return (
    <div>
        <SecondSharedLayout title="Home">
        <ViewJob/>
      </SecondSharedLayout>
    </div>
  )
}

export default Viewjob