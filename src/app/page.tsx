"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { DataSaverOff } from '@mui/icons-material';
import LoginForm from './Form/form';
import title_img from './img/title.png';

import login_module from './login.module.css';

export default function Login() {
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        setTimeout(() => setSpinner(false), 1500)
    }, []);

    return (
        <>
            <div className={login_module.container}>
                {/*<Image src={title_img} className={login_module.titleImg} alt="Christmas PartIn" />*/}
                {spinner
                    ? <DataSaverOff className={login_module.spinner} />
                    : <LoginForm />
                }
            </div>
        </>
    )
}
