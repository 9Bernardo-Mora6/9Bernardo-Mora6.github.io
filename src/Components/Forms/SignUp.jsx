import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CustomForm.css'

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (

        <div className='App'>
            <div className="titleForm">

                <h1>Registrate</h1>

            </div>

            <main className="formContainer">
                <form onSubmit={handleSubmit(onSubmit)} action="" className="formRegister">

                    <input
                        className="input"
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        {...register("nombre", {
                            required: true,
                        })} />

                    <input
                        className="input"
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        {...register("apellido", {
                            required: true,
                        })} />

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

                    <div className="terminos">

                        <input
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            {...register("termsCheck", {
                                required: true,
                            })} />

                        <a href="#" > terminos y condiciones.</a>
                    </div>

                    <input className="submit" type="submit" value="Regístrate" ></input>
                </form>
                <div className="signUp">
                    <p>¿Ya eres miembro? <NavLink to='/SignIN'>inicia tu sesión</NavLink></p>

                    {errors.nombre?.type === 'required' && <p className="errorText">El campo Nombre es obligatorio.</p>}

                    {errors.apellido?.type === 'required' && <p className="errorText">El campo Apellido es obligatorio.</p>}

                    {errors.email?.type === 'required' && <p className="errorText">El campo Email es obligatorio.</p>}

                    {errors.email?.type === 'pattern' && <p className="errorText">Email no valido.</p>}

                    {errors.contraseña?.type === 'required' && <p className="errorText">El campo Contraseña es obligatorio.</p>}

                    {errors.termsCheck?.type === 'required' && <p className="errorText">Debes aceptar los terminos y condiciones.</p>}


                </div>
            </main>

        </div>

    );
}

export default SignUp;
