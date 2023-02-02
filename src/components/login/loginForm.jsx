import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GLobalContext } from '../../context'


const Login = ({ log }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const { logued, setLoggued, setUserData } = useContext(GLobalContext)

    const handleLogin = async (userLogin = 'jg', passLogin = '123') => {
        // http://localhost:3001/login/
        try {

            const req = await axios.post('http://localhost:3001/login/', { userLogin, passLogin })
            const data = req.data    // user currentToken
            setUserData(data)
            setLoggued(true)
            console.log(data)
            console.log('Autenticado correctamente')
        } catch (err) {
            alert(user + ' no valido, o contraseña mal')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(user, pass);


    }

    const handleChange = (event) => {
        if (event.target.name == 'usuario')
            setUser(event.target.value)
        if (event.target.name == 'pass')
            setPass(event.target.value)

    }




    return <>

        <section className="vh-100">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-6 text-black">

                        <div className="px-5 ms-xl-4">
                            {/* <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}}></i> */}
                            <span className="h1 fw-bold mb-0">Centro Medico Chile</span>

                        </div>

                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            {!logued &&
                                <form onSubmit={handleSubmit} style={{ width: '23rem' }} noValidate>

                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Registro</h3>

                                    <div className="form-outline mb-4">
                                        <input onChange={handleChange} value={user} type="email" id="form2Example18" placeholder='administrador' className="form-control form-control-lg" name='usuario' />
                                        <label className="form-label" htmlFor="form2Example18">Usuario</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input onChange={handleChange} value={pass} type="password" id="form2Example28" placeholder='Contraseña*1234' className="form-control form-control-lg" name='pass' />
                                        <label className="form-label" htmlFor="form2Example28">Contraseña</label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="submit" style={{ width: 295 }}>Login</button>
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Olvido la contraseña?</a></p>
                                    <p>No tienes cuenta? <a href="#!" className="link-info">Registrate aquí</a></p>
                                </form>
                            }
                            {logued &&
                                <>
                                    <div className="px-5 ms-xl-4">
                                        <span className="h4 fw-bold mb-0">Hola {user}</span>

                                        <button className="btn btn-info btn-lg btn-block" type="button" style={{ width: 295 }}>Desloguear</button>
                                    </div>

                                </>

                            }

                        </div>

                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                            alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Login

{/* 
 */}