import SharedLayout from '@/components/layout/shared-layout'
import React from 'react'
import Members from './Members'
import OnBoard from './Onboard'

const MainTeam = () => {
  return (
    <div>
        <SharedLayout>
            <Members />
            <OnBoard/>
        </SharedLayout>
    </div>
  )
}

export default MainTeam