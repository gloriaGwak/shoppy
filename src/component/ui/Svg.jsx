import React from 'react';
import { PiDressLight, PiShoppingCartSimple } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const iconMap = {
    PiDressLight,
    PiShoppingCartSimple,
    GoPencil,
    IoSearchOutline,
};


export default function Svg({name, text}) {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        console.error(`Icon "${name}" not found in react-icons/go`);
        return null; // 존재하지 않는 아이콘일 경우 null 반환
    }


    return (
        <>
            <IconComponent className='inline-block align-middle w-[30px] h-[30px] md:w-[25px] md:h-[25px]'  />
            <span className='blind'>{text}</span>
        </>
    );
}

