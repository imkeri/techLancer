import SharedLayout from '@/components/layout/shared-layout'
import FormSharedLayout from '@/components/layout/shared-layout/FormSharedLayout'
import MainCertifications from '@/components/pages-partials/CareerDetails/Certifications'
import React from 'react'

const certifications = () => {
    return (
        <div>
            <FormSharedLayout>
                <MainCertifications />
            </FormSharedLayout>
        </div>
    )
}

export default certifications