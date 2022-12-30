import React from 'react'
import { useClientLocal } from '../../hooks/useClientLocal';

const RolesViewModel = () => {
    const { cliente } = useClientLocal();
    return {
        cliente
    }
}

export default RolesViewModel;