import { Image } from 'antd'
import React from 'react'

function WhatsappChat() {


    const handleClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=6287870449709`, '_blank');
        // window.location.assign(`https://wa.me/+6287870449709`)
    }

    return (
        <button
            onClick={handleClick}
            className='flex rounded-[32px] bg-[#00B934] py-[11px] px-[24px] items-center justify-center lg:gap-x-4 fixed bottom-[48px] right-[24px] lg:right-[48px] z-[3000]'
        >
            <Image 
                src='/whatsapp-vector.svg'
                preview={false}
                width={36.44}
                height={42}
            />
            <div className='hidden lg:flex lg:flex-col lg:justify-center'>
                <p className='font-semibold font-primary text-surface'>Interested?</p>
                <p className='font-semibold font-primary text-surface'>Ask Us Now!</p>
            </div>
        </button>
    )
}

export default WhatsappChat