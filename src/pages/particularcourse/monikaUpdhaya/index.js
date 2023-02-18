import SharedLayout from '@/components/layout/shared-layout'
import HowItWork from '@/components/pages-partials/ParticularCourse/Howitwork'
import Licended from '@/components/pages-partials/ParticularCourse/LicensedProg'
import MonikaMasterProgram from '@/components/pages-partials/ParticularCourse/masterProgram/Monikadata'
import SalesMentor from '@/components/pages-partials/ParticularCourse/salesMentor'
import Intro from '@/components/pages-partials/ParticularCourse/Introdution'
import React from 'react'
import GetOffer from '@/components/pages-partials/ParticularCourse/GetOffer'
import EnrollNow from '@/components/pages-partials/ParticularCourse/EnrollNow'
import Question from '@/components/pages-partials/home/SalesTelent/Question'
import MonikaProgram from '@/components/pages-partials/ParticularCourse/ProgramFor/monikaProg'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'

const MonikaUpdhaya = () => {
  return (
    <div>
      <SecondSharedLayout>
        <SalesMentor title="Master Sales Strategy for Plastic 
          Cards (Credit Cards) for Leading 
          Banks" secondtit="Learn How to Become Sales Expert in Sourcing Multiple Credit Cards" img="../img/monika.png" />
        <MonikaMasterProgram />
        <HowItWork />
        <MonikaProgram />
        <Intro img="../img/monikainfo.png" info="Monika started her career as an Acquisition Manager in Banking and Finance Sector. Due to her interest in Sales, she has become an avid follower of Sales & Marketing domain." name="Monika Upadhyay" />
        <Licended />
        <GetOffer />
        <EnrollNow />
        <Question />
      </SecondSharedLayout>
    </div>
  )
}

export default MonikaUpdhaya