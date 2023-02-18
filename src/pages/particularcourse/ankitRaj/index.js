import SharedLayout from '@/components/layout/shared-layout'
import SecondSharedLayout from '@/components/layout/shared-layout/SecondSharedLayout'
import Question from '@/components/pages-partials/home/SalesTelent/Question'
import EnrollNow from '@/components/pages-partials/ParticularCourse/EnrollNow'
import GetOffer from '@/components/pages-partials/ParticularCourse/GetOffer'
import HowItWork from '@/components/pages-partials/ParticularCourse/Howitwork'
import Intro from '@/components/pages-partials/ParticularCourse/Introdution'
import Licended from '@/components/pages-partials/ParticularCourse/LicensedProg'
import AnkitMasterProg from '@/components/pages-partials/ParticularCourse/masterProgram/Ankitdata'
import ProgramFor from '@/components/pages-partials/ParticularCourse/ProgramFor/chiragProg'
import SalesMentor from '@/components/pages-partials/ParticularCourse/salesMentor'
import React from 'react'

const AnkitRaj = () => {
    return (
        <div>
            <SecondSharedLayout>
                <SalesMentor title="Master LinkedIn Lead Generation 
for Service Based Startups!" secondtit="Learn How to Generate Qualified Sales Leads Via LinkedIn!" img="../img/ankit.png" />
                <AnkitMasterProg />
                <HowItWork />
                <ProgramFor />
                <Intro img="../img/ankiinfo.png" info="Ankit started his career in Real Estate Investment and Mortgage Valuation as a part of his education qualification, but his keen interest led him into the world of start-ups and business growth towards which he eventually gravitated." name="Ankit Raj" />
                <Licended />
                <GetOffer />
                <EnrollNow />
                <Question />
            </SecondSharedLayout>
        </div>
    )
}

export default AnkitRaj