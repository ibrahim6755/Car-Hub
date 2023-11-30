import {MouseEventHandler} from 'react'

export interface CustomButtomProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"button" | "submit";
    textStles?: string;
    rightIcon?:string;
    isDisabled?:boolean
}

export interface CarProps{
    car:string,
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement:number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}