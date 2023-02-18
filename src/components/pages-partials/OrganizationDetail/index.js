import SharedLayout from '@/components/layout/shared-layout'
import FormSharedLayout from '@/components/layout/shared-layout/FormSharedLayout'
import React from 'react'
import OrganizationInfo from './Organizationinfo'

const MainOrganizationDEtail = () => {
  return (
    <div>
      <FormSharedLayout>
        <OrganizationInfo />
      </FormSharedLayout>
    </div>
  )
}

export default MainOrganizationDEtail