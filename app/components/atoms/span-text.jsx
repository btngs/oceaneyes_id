import React from 'react'

function SpanTextPrimary({
    children,
    color,
    size,
}) {

    return (
        <span className={`font-semibold text-[14px] text-${color} font-primary lg:text-[16px]`}>
            {children}
        </span>
    )
}

export default SpanTextPrimary