import SharedLayout from '@/components/layout/shared-layout'
import React from 'react'
import Form from './Form'
import GetInTouch from './getintouch'

const Contact = () => {
  return (
    <>
        <SharedLayout>
            <GetInTouch />
            <Form />
        </SharedLayout>
    </>

  )
}

export default Contact