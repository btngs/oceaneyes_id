import { Typography } from 'antd'
import React from 'react'

function SectionTitle({
    text,
    className
}) {

    const { Text } = Typography;

    return (
        <h2 className={`font-semibold text-foreground text-[24px] lg:text-[28px] xl:text-[32px] text-center ${className}`}>{text}</h2>
    )
}

export default SectionTitle