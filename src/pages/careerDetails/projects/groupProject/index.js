import SharedLayout from '@/components/layout/shared-layout'
import FormSharedLayout from '@/components/layout/shared-layout/FormSharedLayout'
import MainGroupProject from '@/components/pages-partials/CareerDetails/MainProject/GroupProject'
import React from 'react'

const groupProject = () => {
  return (
    <div>
      <FormSharedLayout>
        <MainGroupProject />
      </FormSharedLayout>
    </div>
  )
}

export default groupProject