import React from 'react';

const Button = ({btnName,customStyle}) => {
    return (
        <p className={`border px-7 cursor-pointer py-3 rounded-md border-[#FF3811] text-[#FF3811] font-bold ${customStyle}`}>{btnName}</p>
    );
};

export default Button;