'use client';

import React, { Suspense, useEffect, useState } from 'react'
import Footer from './footer/footer'
// import Copyrights from './footer/copyright'
// import WhatsappChat from '../atoms/chat-whatsapp-button'
import Navbar from './header/navbar'

function PageLayout({
    children,
    footerRef,
    scrollToAbout,
    scrollToImpact,
    scrollToProduct,
    scrollToCollab,
    scrollToContact,
}) {
const [invisible, setInvisible] = useState(true);

const controlNavbar = () => {
    if (window.scrollY > 80) {
        setInvisible(false)
    } else {
        setInvisible(true)
    }
}

useEffect(() => {
    window.addEventListener('scroll',
    controlNavbar)
    return () => {
        window.removeEventListener('scroll',
        controlNavbar)
    }
}, [])


    return (
        <div className='block box-border min-h-screen overflow-y-scroll relative landing-page overflow-x-hidden'>
            <Suspense fallback={null}><Navbar 
                invisible={invisible}
                scrollToAbout={scrollToAbout}
                scrollToCollab={scrollToCollab}
                scrollToContact={scrollToContact}
                scrollToImpact={scrollToImpact}
                scrollToProduct={scrollToProduct}
            /></Suspense>
            {children}
            <Footer 
                id={'contact'}
                ref={footerRef}
            />
            {/* <Copyrights /> */}
            {/* <WhatsappChat /> */}
        </div>
    )
}

export default PageLayout