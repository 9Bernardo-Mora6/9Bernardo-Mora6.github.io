import React from 'react';
import './CustomForm.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        

            <div className='App'>
                <div>
                    <div className="titleForm">

                        <h1>Inicia sesion</h1>

                    </div>

                    <main className="formContainer">
                        <form onSubmit={handleSubmit(onSubmit)} action="" className="formRegister">

                            <input
                                className="input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
                                })} />

                            <input
                                className="input"
                                type="password"
                                name="contraseña"
                                placeholder="Contraseña"
                                {...register("contraseña", {
                                    required: true,
                                    maxLength: 10
                                })} />

                            <input className="submit" type="submit" value="Iniciar" ></input>
                        </form>

                        <div className="signUp">
                            <p>¿No eres miembro? <NavLink to='/SignUP'>Crea tu usuario</NavLink></p>

                            {errors.email?.type === 'required' && <p className="errorText">Contraseña o Email incorrectos.</p>}

                        
                            {errors.contraseña?.type === 'required' && <p className="errorText">Contraseña o Email incorrectos.</p>}

                        </div>
                    </main>
                </div>
            </div>
            
    );
}

export default SignIn;
