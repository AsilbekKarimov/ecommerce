// src/component/other/Divider.jsx

import React from 'react';

const DividerCustom = ({ text, color }) => {
    return (
        <div style={{ color: color }} className='mt-96 w-full'>
            <div className={`divider divider-${color} font-bold text-[#33394F] text-3xl`}>{text}</div>
        </div>
    );
}

export default DividerCustom;
