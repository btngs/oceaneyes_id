"use client"

import { lazy, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PSProductSection from '../product-and-services/section/product-section';
import CTASection from '../product-and-services/section/cta-section';
// import HeroSection from './section/hero-section';
// import GoalSection from './section/goal-section';
// import UpdateSection from './section/update-section';
// import ServiceSection from './section/service-section';
const HeroSection = lazy(() => import('./section/hero-section'));
const GoalSection = lazy(() => import('./section/goal-section'));
const UpdateSection = lazy(() => import('./section/update-section'));
const ServiceSection = lazy(() => import('./section/service-section'));

export default function Homepage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Home | Oceaneyes Indonesia</title>
            </Helmet>
            <div className='flex flex-col w-screen overflow-x-hidden'>
                <HeroSection />
                <GoalSection />
                <PSProductSection />
                <UpdateSection />
                <CTASection />
            </div>
        </>
    );
}
