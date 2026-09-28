import { Image, Typography } from 'antd'
import React from 'react'

function Contacts({
    icon,
    media,
    contact,
}) {

    const { Text } = Typography;

    return (
        <div className='flex gap-x-2 items-center'>
            <Image 
                src={icon}
                preview={false}
                className={`w-[42.16px] h-[42.16px] lg:w-[56px] lg:h-[56px]`}
            />
            <div className='flex flex-col justify-center'>
                <Text className='font-primary font-semibold text-[18px] lg:text-[20px] xl:text-[36px] text-surface text-left'>{media}</Text>
                <Text className='font-primary font-semibold text-[14px] xl:text-[18px] text-surface text-left'>{contact}</Text>
            </div>
        </div>
    )
}

export default Contacts