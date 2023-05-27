import { IoLogoApple } from "react-icons/io";
import { IProducts } from "./uiDataTypes";

export const cardData: IProducts[] = [
    {
        name: 'Company',
        icon: renderIcon(IoLogoApple),
        value: "Apple",
    },
    {
        name: 'Order Number',
        value: "1266201",
    },
    {
        name: 'Product',
        value: "MacBook Air",
    },
    {
        name: '(Vat 20%)',
        value: '$100.00'
    }
]

function renderIcon(icon: typeof IoLogoApple) : typeof IoLogoApple{
    return icon
}