import SharedLayout from '@/components/layout/shared-layout'
import HowItWork from '@/components/pages-partials/ParticularCourse/Howitwork'
import SaumyaMasterProg from '@/components/pages-partials/ParticularCourse/masterProgram/Saumyadata'
import ProgramFor from '@/components/pages-partials/ParticularCourse/ProgramFor/chiragProg'
import SalesMentor from '@/components/pages-partials/ParticularCourse/salesMentor'
import Intro from '@/components/pages-partials/ParticularCourse/Introdution'
import React from 'react'
import Licended from '@/components/pages-partials/ParticularCourse/LicensedProg'
import GetOffer from '@/components/pages-partials/ParticularCourse/GetOffer'
import EnrollNow from '@/components/pages-partials/ParticularCourse/EnrollNow'
import Question from '@/components/pages-partials/home/SalesTelent/Question'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'

const SaumyaKul = () => {
    return (
        <div>
            <SecondSharedLayout>
                <SalesMentor title="How to Run and Make Sales for 
Bread and Breakfast Business!" secondtit="Learn How to Run and Make Sales for 
Bread and Breakfast Business!" img="../img/saumya.png" />
                <SaumyaMasterProg />
                <HowItWork />
                <ProgramFor />
                <Intro img="../img/saumyainfo.png" info="I am a writer, poet, educator, public speaker, VO artist and a communications and brand consultant. I have successfully crafted communications and marketing strategy for several individuals and brands, my specialization being rich and creative content driven digital marketing campaigns." name="Saumya Kulshreshtha" />
                <Licended />
                <GetOffer />
                <EnrollNow />
                <Question />
            </SecondSharedLayout>
        </div>
    )
}

export default SaumyaKul