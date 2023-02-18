import SharedLayout from '@/components/layout/shared-layout'
import FormSharedLayout from '@/components/layout/shared-layout/FormSharedLayout'
import MainProject from '@/components/pages-partials/CareerDetails/MainProject'
import React from 'react'

const projects = () => {
  return (
    <div>
      <FormSharedLayout>
        <MainProject />
      </FormSharedLayout>
    </div>
  )
}

export default projects