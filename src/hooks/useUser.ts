import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../modules/auth';

function useUser() {
    const user = useSelector(selectUser);

    return { user };
}

export default useUser;
