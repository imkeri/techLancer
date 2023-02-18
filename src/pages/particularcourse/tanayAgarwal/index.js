import SharedLayout from '@/components/layout/shared-layout'
import EnrollNow from '@/components/pages-partials/ParticularCourse/EnrollNow'
import GetOffer from '@/components/pages-partials/ParticularCourse/GetOffer'
import HowItWork from '@/components/pages-partials/ParticularCourse/Howitwork'
import Intro from '@/components/pages-partials/ParticularCourse/Introdution'
import Licended from '@/components/pages-partials/ParticularCourse/LicensedProg'
import TanayMasterProg from '@/components/pages-partials/ParticularCourse/masterProgram/Tanaydata'
import TanayProgram from '@/components/pages-partials/ParticularCourse/ProgramFor/tanayProg'
import SalesMentor from '@/components/pages-partials/ParticularCourse/salesMentor'
import Question from '@/components/pages-partials/home/SalesTelent/Question'
import React from 'react'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'

const TanayAgarwal = () => {
    return (
        <div>
            <SecondSharedLayout>
                <SalesMentor title="Master and Learn to Maximize 
Restaurant Sales (For Retail 
Format)" secondtit="Learn How to Attract More Customers Using Time-Tested Proven Techniques" img="../img/tanayag.png" />
                <TanayMasterProg />
                <HowItWork />
                <TanayProgram />
                <Intro img="../img/tanayinfo.png" info="Tanay started his career in Business Analytics as a part of research and consulting, but his keen interest led him into the world of startups and business growth towards which he eventually gravitated.
" name="Tanay Agarwal" />
                <Licended />
                <GetOffer />
                <EnrollNow />
                <Question />
            </SecondSharedLayout>
        </div>
    )
}

export default TanayAgarwal