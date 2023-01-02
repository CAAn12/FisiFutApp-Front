import { Cancha } from '../../domain/entities/Cancha';
import * as ImagePicker from 'expo-image-picker';
import { ResponseFisiFutApp } from "../../data/sources/remote/models/ResponseFisiFutApp";
import { createContext, useState, useContext, useEffect } from 'react';
import { GetAllCanchaUseCase } from "../../domain/useCases/cancha/GetAllCancha";
import { CreateCanchaUseCase } from "../../domain/useCases/cancha/CreateCancha";
import { UpdateCanchaUseCase } from "../../domain/useCases/cancha/UpdateCancha";
import { UpdateWithImageCanchaUseCase } from "../../domain/useCases/cancha/UpdateWithImageCancha";
import { DeleteCanchaUseCase } from "../../domain/useCases/cancha/DeleteCancha";
import { ClienteContext } from "./ClienteContext";

export interface CanchaContextProps {
    canchas: Cancha[],
    getCanchas(idCliente: string): Promise<void>,
    create(cancha: Cancha, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp>,
    update(cancha: Cancha): Promise<ResponseFisiFutApp>,
    updateWithImage(cancha: Cancha, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp>,
    remove(id: string): Promise<ResponseFisiFutApp>
}

export const CanchaContext = createContext( {} as CanchaContextProps)

export const CanchaProvider = ( {children}: any ) => {
    const [canchas, setCanchas] = useState<Cancha[]>([]);
    const { cliente, saveClienteSession } = useContext(ClienteContext);

    useEffect(() => {
        if(canchas.length === 0){
            getCanchas();
        }
    }, [])


    const getCanchas = async(): Promise<void> => {
        const result = await GetAllCanchaUseCase(JSON.stringify(cliente.id));
        setCanchas(result);
    }

    const create = async (cancha: Cancha, file: ImagePicker.ImagePickerAsset) : Promise<ResponseFisiFutApp> => {
        const response = await CreateCanchaUseCase({ ...cancha, id_gestor: cliente.id } as any, file!);
        getCanchas();
        return response;
    }

    const update = async (cancha: Cancha): Promise<ResponseFisiFutApp> => {
        const response = await UpdateCanchaUseCase(cancha);
        getCanchas();
        return response;
    }

    const updateWithImage = async (cancha: Cancha, file: ImagePicker.ImagePickerAsset): Promise<ResponseFisiFutApp> => {
        const response = await UpdateWithImageCanchaUseCase(cancha, file);
        getCanchas();
        return response;
    }

    const remove = async (id: string): Promise<ResponseFisiFutApp> => {
        const response = await DeleteCanchaUseCase(id);
        getCanchas();
        return response;
    }

    return (
        <CanchaContext.Provider value={{
            canchas,
            getCanchas,
            create,
            update,
            updateWithImage,
            remove
        }}>
            { children }
        </CanchaContext.Provider>
    )
}