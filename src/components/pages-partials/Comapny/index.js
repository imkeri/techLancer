
import SecondSharedLayout from '../../layout/shared-layout/SecondSharedLayout'
import React from 'react'
import Partners from '../home/hero/Partners'
import AchieveMents from '../home/SalesTelent/AchieveMent'
import Question from '../home/SalesTelent/Question'
import Skillset from '../home/SalesTelent/Skillset'
import ClientSay from './ClientSay'
import CompanyHero from './companyHero'
import CompanyRightSale from './CompanyRightSale'
import Magic from './Magic'
import SaleStory from './SaleStory'

const MainComapany = () => {
  return (
    <div>
      <SecondSharedLayout>
      <CompanyHero />
        <Partners />
        <CompanyRightSale />
        <Magic />
        <AchieveMents job="500+" salary="30K+" companies="25 +" verijob="48 Hours" title="Fastest Hiring" />
        <Skillset />
        <ClientSay/>
        <Question/>
        <SaleStory/>
      </SecondSharedLayout>
    </div>
  )
}

export default MainComapany