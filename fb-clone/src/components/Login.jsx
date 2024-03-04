import './login.css'
import { h } from 'preact';
import { route } from 'preact-router';
export default function Login() {

    const handleLoginClick = ()=>{
        route("/login-second");
    }


    return (

        <div className="container mt-5">
            <div className="row ">
                <div className="col-1"></div>
                <div className="col-5 left-side" style={'margin-top: 80px;'}>
                    <h1 className="font-size">facebook</h1>
                    <p>Facebook helps you connect and share with the people in your life</p>
                </div>
                <div className="col-4 ">
                    <main className=" w-100 m-auto">
                        <form className="form-signin border border-1 p-3 rounded">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                <label for="floatingInput">Email address or phone number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary w-100 py-2 fw-bold bg-custom-color" type="button" onClick={handleLoginClick}>Log in</button>
                            <div className=" text-center my-3">
                                <a href="" className="text-decoration-none">Forgotten password?</a>
                            </div>
                            <hr />
                            <div className="text-center">
                                <button className="btn btn-success w-90 py-2 fw-bold mt-2 mb-1 bg-custom-color-2" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Create new account</button>
                            </div>
                        </form>
                        <p className="mt-3 m-4 text-black"><a href="" className="text-decoration-none text-black fw-bold">Create a Page</a> for a celebrity, brand or business.</p>

                    </main>
                </div>
            </div>

            <div className="modal fade mt-3" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-2 fw-bold" id="exampleModalLabel">Sign Up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form class="needs-validation" novalidate>
                                <div class="row g-3">


                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="firstName" placeholder="First name" value="" required />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="lastName" placeholder="Surname" value="" required />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="input-group has-validation">
                                            <input type="text" class="form-control" id="username" placeholder="Mobile number or email address" required />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <input type="text" class="form-control" id="email" placeholder="New password" />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <small>Date of Birth</small>
                                    <div class="col-12">
                                        <input type="date" class="form-control" id="firstName" value="" placeholder='date' required />
                                    </div>

                                    <div class="row g-3">
                                    <small >Gender</small>
                                        <div class="col-sm-4">
                                            <label class="radio-label">
                                            Male
                                                <input type="radio" class="form-check-input" name="gender" value="male" required />
                                                
                                            </label>
                                        </div>
                                        <div class="col-sm-4">
                                            <label class="radio-label">
                                            Female
                                                <input type="radio" class="form-check-input" name="gender" value="female" required />
                                                
                                            </label>
                                        </div>
                                        <div class="col-sm-4">
                                            <label class="radio-label">
                                                Custom
                                                <input type="radio" class="form-check-input" name="gender" value="other" required />
                                                
                                            </label>
                                        </div>
                                    </div>




                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <small>People who use our service may have uploaded your contact information to Facebook. Learn more.</small>
                            <small>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</small>
                            <button class="btn btn-success custom-btn w-100 py-2 fw-bold mt-2 mb-1" type="submit">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}