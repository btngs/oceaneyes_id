import { Typography } from 'antd'
import React from 'react'

function Copyrights() {

    const {Text} = Typography;

    return (
        <div className='flex w-full bg-purple py-7 px-8 items-center xl:px-[120px]'>
            <h2 className='font-normal text-[12px] lg:text-[18px] text-surface font-primary'>Copyright © 2023 oceaneyes All rights reserved</h2>
        </div>
    )
}

export default Copyrights