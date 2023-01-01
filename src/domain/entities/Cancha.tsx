import { Cancha_Imagenes } from "./Cancha_Imagenes";

export interface Cancha {
    id?: string;
    name: string;
    category: string;
    size: string;
    price_per_hour: string;
    image?: Cancha_Imagenes[]
}