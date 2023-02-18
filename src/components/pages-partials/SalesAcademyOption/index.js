import React from 'react'
import Example from '@/components/layout/header'
import OptionHero from './OptionHero'
import SaleStory from '../Comapny/SaleStory'
import AcademySaleStory from './AcademySaleStory'
import Advisers from './Advisers'
import EnrollMents from './EnrollMents'
import AcademyIntro from './AcademyIntro'
import GetGame from './GetGame'
import SecondHeader from '@/components/layout/header/SecondHeader'

const MainSalesAcademyOption = () => {
  return (
    <div>
        <SecondHeader/>
        <OptionHero/>
        <AcademySaleStory />
        <Advisers />
        <EnrollMents />
        <AcademyIntro/>
        <GetGame/>
    </div>
  )
}

export default MainSalesAcademyOption