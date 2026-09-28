import { Typography } from 'antd'
import React from 'react'

function PrimaryText({
    color,
    children,
    centered,
}) {

    const { Text } = Typography;

    return (
        <Text
            className={`font-normal text-[14px] text-${color} ${centered ? `text-center` : `text-left`} font-primary lg:text-[16px]`}
        >
            {children}
        </Text>
    )
}

export default PrimaryText