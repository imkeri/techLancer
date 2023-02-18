import SecondSharedLayout from '../../../components/layout/shared-layout/SecondSharedLayout'
import NextLink from 'next/link';
import React from 'react'
import LiveSaleProg from './LiveSaleProg'
import NewInSale from './NewInSale'

const MainShortTermCourse = () => {
  return (
    <div>
      <SecondSharedLayout>
        <LiveSaleProg />
        <NewInSale />
      </SecondSharedLayout>
    </div>
  )
}

export default MainShortTermCourse