import { Rol } from "./Rol";

export interface Cliente {
    id?: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
    image?: string;
    session_token?: string;
    roles?: Rol[];
}