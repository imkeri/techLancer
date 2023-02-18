import SharedLayout from '@/components/layout/shared-layout'
import HowItWork from '@/components/pages-partials/ParticularCourse/Howitwork'
import NamadMasterProg from '@/components/pages-partials/ParticularCourse/masterProgram/Namadata'
import ProgramFor from '@/components/pages-partials/ParticularCourse/ProgramFor/chiragProg'
import SalesMentor from '@/components/pages-partials/ParticularCourse/salesMentor'
import Intro from '@/components/pages-partials/ParticularCourse/Introdution'
import React from 'react'
import Licended from '@/components/pages-partials/ParticularCourse/LicensedProg'
import GetOffer from '@/components/pages-partials/ParticularCourse/GetOffer'
import EnrollNow from '@/components/pages-partials/ParticularCourse/EnrollNow'
import Question from '@/components/pages-partials/home/SalesTelent/Question'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'

const NamadKabeir = () => {
  return (
    <div>
      <SecondSharedLayout>
        <SalesMentor title="Learn the Best Sales Closing 
Techniques (SPIN Selling)" secondtit="Learn Research-Backed Framework for Working and Closing Complex Deals with Extended Sales Processes" img="../img/namad.png"></SalesMentor>
        <NamadMasterProg />
        <HowItWork />
        <ProgramFor />
        <Intro img="../img/namadinfo.png" info="An experienced sales trainer & Coach with a bend of mind towards Startups/SME as well as large organization. Exposure of imparting training across India. Works as Business consultant on sales, distribution management for SME, Startups providing consulting services for areas like improving sales Processes, Profitability and General Management" name="Nadhmi Kebaieur" />
        <Licended />
        <GetOffer />
        <EnrollNow />
        <Question />
      </SecondSharedLayout>
    </div>
  )
}

export default NamadKabeir