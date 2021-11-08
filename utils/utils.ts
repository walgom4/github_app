import { ButtonSearch } from "@components/atoms/buttonSearch";
import { buffer } from "stream/consumers";

export const quantityFormater = (quantity:number) => {
    const returnValue:string = quantity < 1000 ? `${quantity}` : `${Math.trunc(quantity/1000)}k`;
    return returnValue;
}

export const numberWithCommas = (quantity:number) => {
    return quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const detailsFormat = (stars:string ="", language: string ="", license: string ="", updated: string ="") => {
    let returnData ='';
    if(stars !==""){
        returnData += `${stars} stars | `;
    }else{
        returnData += ' - |';
    }
    if(language !==""){
        returnData += `${language} | `;
    }else{
        returnData += ' - |';
    }
    if(license !==""){
        returnData += `${license} | `;
    }else{
        returnData += ' - |';
    }
    if(updated !==""){
        returnData += `${updated}`;
    }else{
        returnData += ' -';
    }
    return returnData;
}

export const getCursor= (page:number)=>{
    return Buffer.from(`cursor:${page}`).toString('base64');
}
export const getNumber= (cursor:string)=>{
    const decodeStr = Buffer.from(cursor, 'base64').toString();
    const decodeArr = decodeStr.split(":");
    return parseInt(decodeArr[1], 10);
}