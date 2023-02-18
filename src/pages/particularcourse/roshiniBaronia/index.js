import SharedLayout from '@/components/layout/shared-layout'
import HowItWork from '@/components/pages-partials/ParticularCourse/Howitwork'
import RoshiniMasterProg from '@/components/pages-partials/ParticularCourse/masterProgram/Roshinidata'
import ProgramFor from '@/components/pages-partials/ParticularCourse/ProgramFor/chiragProg'
import SalesMentor from '@/components/pages-partials/ParticularCourse/salesMentor'
import Intro from '@/components/pages-partials/ParticularCourse/Introdution'
import React from 'react'
import Licended from '@/components/pages-partials/ParticularCourse/LicensedProg'
import GetOffer from '@/components/pages-partials/ParticularCourse/GetOffer'
import EnrollNow from '@/components/pages-partials/ParticularCourse/EnrollNow'
import Question from '@/components/pages-partials/home/SalesTelent/Question'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'

const RoshiniBaronia = () => {
  return (
    <div>
      <SecondSharedLayout>
        <SalesMentor title="Learn and Master the Art of 
Powerful Sales Communication" secondtit="Learn all Elements of an Impactful Sales Conversation from Storytelling to Objection Handling to the Principle of Similarity" img="../img/roshni.png" />
        <RoshiniMasterProg />
        <HowItWork />
        <ProgramFor />
        <Intro img="../img/roshniinfo.png" info="Roshni Baronia is a certified Strategic Sales Expert and Serial entrepreneur. Her boutique firm RB consulting provides Sales Advisory and Strategy Consulting for startups and SMEs. The firm specializes in sales process optimization, strategic sales planning, and leadership development." name="Roshni Baronia" />
        <Licended />
        <GetOffer />
        <EnrollNow />
        <Question />
      </SecondSharedLayout>
    </div>
  )
}

export default RoshiniBaronia