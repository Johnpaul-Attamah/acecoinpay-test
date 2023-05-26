import { IoLogoApple } from "react-icons/io";

export interface IProducts {
    name: string;
    icon?: (icon: typeof IoLogoApple) => typeof IoLogoApple;
    value: string;
}