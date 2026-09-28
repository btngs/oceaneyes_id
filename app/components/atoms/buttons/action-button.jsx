import { Typography } from 'antd'
import React from 'react'
import { BsChevronRight } from "react-icons/bs"

function ActionButton({
    action,
    text,
}) {

    const { Text } = Typography;

    return (
            <button 
                onClick={action}
                className='flex bg-brown rounded-[16px] justify-center items-center gap-x-4 px-[12px] py-[7px]'
            >
                <Text className='text-base font-semibold font-primary text-surface'>{text}</Text>
                <BsChevronRight size={19} color='#F6F6F6'/>
            </button>
    )
}

export default ActionButton