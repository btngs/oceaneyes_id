import React, { useEffect, useRef } from 'react'
import FishingGroundMapHeader from './section/header'
import FishingGroundMapFeatures from './section/features'
import FishingGroundMapDisplay from './section/display'
import FishingGroundMapStep from './section/step'
import CTASection from '../product-and-services/section/cta-section'
import { Helmet } from 'react-helmet-async'

function FishingGroundMap() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featureRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToFeature = () => {
    featureRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToCTA = () => {
    ctaRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Helmet>
        <title>Fishing Ground Map | Oceaneyes Indonesia</title>
      </Helmet>
      <div className='flex flex-col w-full'>
        <FishingGroundMapHeader
          scrollToFeature={() => scrollToFeature()}
          scrollToCTA={() => scrollToCTA()}
        />
        <FishingGroundMapFeatures ref={featureRef} />
        <FishingGroundMapDisplay />
        <FishingGroundMapStep />
        <div ref={ctaRef} className='flex w-full'>
          <CTASection />
        </div>
      </div>
    </>
  )
}

export default FishingGroundMap