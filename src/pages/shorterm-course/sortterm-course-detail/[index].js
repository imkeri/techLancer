import SalesMentor from '../../../components/pages-partials/ParticularCourse/salesMentor'
import React from 'react'
import ProgramFor from '../../../components/pages-partials/ParticularCourse/ProgramFor/chiragProg'
import HowItWork from '../../../components/pages-partials/ParticularCourse/Howitwork'
import Intro from '../../../components/pages-partials/ParticularCourse/Introdution'
import Licended from '../../../components/pages-partials/ParticularCourse/LicensedProg'
import GetOffer from '../../../components/pages-partials/ParticularCourse/GetOffer'
import EnrollNow from '../../../components/pages-partials/ParticularCourse/EnrollNow'
import Question from '../../../components/pages-partials/home/SalesTelent/Question'
import SecondSharedLayout from '../../../components/layout/shared-layout/SecondSharedLayout'

const AniruddhaAthawale = () => {
  return (
    <div>
      <SecondSharedLayout>
        <SalesMentor title="Master and Learn Sales 
Distribution Channel in FMCG" secondtit="Learn the Fundamentals and Key Components of Distribution Channel in FMCG Sales" img="/img/anni.png"></SalesMentor>
        <HowItWork />
        <ProgramFor />
          {/* <Intro img="/img/anniinfo.png" info="An experienced sales trainer & Coach with a bend of mind towards Startups/SME as well as large organization. Exposure of imparting training across India. Works as Business consultant on sales, distribution management for SME, Startups providing consulting services for areas like improving sales Processes, Profitability and General Management" name="Aniruddha Athawale" /> */}
        <Licended />
        {/* <GetOffer /> */}
        <EnrollNow />
        <Question />
      </SecondSharedLayout>
    </div>
  )
}

export default AniruddhaAthawale