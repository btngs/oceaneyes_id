import { Image, Typography } from 'antd'
import React from 'react'
import PrimaryText from './primary-text';

function ImpactCard({
    title,
    image,
    description,
}) {

    const { Text } = Typography;

    return (
        <div className={`w-[296px] max-h-[450px] bg-greenMuted py-[25px] px-[28px] lg:flex lg:w-full lg:max-h-full lg:py-[60px] lg:px-[64px] rounded-[24px] lg:rounded-[32px] elevation`}>
            <div className='flex flex-col gap-y-4 justify-center lg:gap-y-4 lg:justify-start'>
                <div className='flex w-full h-[56.55px] justify-center items-center lg:h-auto lg:min-h-[113.13px]'>
                    <h3
                        className='font-semibold font-primary text-[18px] lg:text-[36px] text-center text-neutral'
                    >
                        {title}
                    </h3>
                </div>
                <Image 
                    preview={false}
                    className='w-[181.05px] h-[108.31px] lg:w-[416px] lg:h-[248.87px]'
                    src={image}
                />
                <div className='flex w-full justify-center items-center'>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ImpactCard