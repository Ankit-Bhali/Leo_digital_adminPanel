import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const Navigate = useNavigate()
    const [Obj, setObj] = useState({
        Email: '',
        Password: ''
    })
    const handleChange = (e) => {

        setObj({ ...Obj, [e.target.name]: e.target.value })
    }
    const handleCheck = (e) => {
        e.preventDefault()
        if (Obj.Email === '' && Obj.Password === '') {
            alert('Input Field is empty')
        } else {
            if (Obj.Email === 'admin@123' && Obj.Password === 'admin123') {
                Navigate("/Home")
            } else {
                alert('Wrong Id and Password')
            }
        }
    }
    return (
        <div className="authentication-bg">
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="card auth-card">
                                <div className="card-body px-3 py-5">
                                    <div className="mx-auto mb-4 text-center auth-logo">
                                        <a href="index.html" className="logo-dark">
                                            <img src="assets/images/logo-sm.png" height={30} className="me-1" alt="logo sm" />
                                            <img src="assets/images/logo-dark.png" height={24} alt="logo dark" />
                                        </a>
                                        <a href="index.html" className="logo-light">
                                            <img src="assets/images/logo-sm.png" height={30} className="me-1" alt="logo sm" />
                                            <img src="assets/images/logo-light.png" height={24} alt="logo light" />
                                        </a>
                                    </div>
                                    <h2 className="fw-bold text-center fs-18">Sign In</h2>
                                    <p className="text-muted text-center mt-1 mb-4">Enter your email address and password to access admin panel.</p>
                                    <div className="px-4">
                                        <form action="index.html" className="authentication-form">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="example-email">Email</label>
                                                <input type="email" id="example-email" name="Email" className="form-control" value={Obj.Email} onChange={handleChange} placeholder="Enter your email" />
                                            </div>
                                            <div className="mb-3">
                                                {/* <a href="auth-password.html" className="float-end text-muted text-unline-dashed ms-1">Reset password</a> */}
                                                <label className="form-label" htmlFor="example-password">Password</label>
                                                <input type="text" id="example-password" name='Password' value={Obj.Password} className="form-control" onChange={handleChange} placeholder="Enter your password" />
                                            </div>
                                            {/* <div className="mb-3">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox-signin" />
                                                    <label className="form-check-label" htmlFor="checkbox-signin">Remember me</label>
                                                </div>
                                            </div> */}
                                            <div className="mb-1 text-center d-grid">
                                                <button className="btn btn-primary" onClick={handleCheck} type="submit">Sign In</button>
                                            </div>
                                        </form>
                                        {/* <p className="mt-3 fw-semibold no-span">OR sign with</p> */}
                                        {/* <div className="text-center">
                                            <a href="javascript:void(0);" className="btn btn-light shadow-none"><i className="bx bxl-google fs-20" /></a>
                                            <a href="javascript:void(0);" className="btn btn-light shadow-none"><i className="bx bxl-facebook fs-20" /></a>
                                            <a href="javascript:void(0);" className="btn btn-light shadow-none"><i className="bx bxl-github fs-20" /></a>
                                        </div> */}
                                    </div> {/* end col */}
                                </div> {/* end card-body */}
                            </div> {/* end card */}
                            {/* <p className="mb-0 text-center">New here? <a href="auth-signup.html" className="text-reset fw-bold ms-1">Sign Up</a></p> */}
                        </div> {/* end col */}
                    </div> {/* end row */}
                </div>
            </div>
        </div>

    )
}

export default SignIn