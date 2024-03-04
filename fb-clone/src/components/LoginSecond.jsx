import { h } from 'preact';
import './login.css';

export default function LoginSecond() {


    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-start vh-100">
                <div className="col-4 ">
                    <h2 className="font-size text-center mb-4">Facebook</h2>
                    <main className="w-100 m-auto">
                        <form className="form-signin border border-1 p-3 rounded">
                            <div className="form-floating mb-3 align-center">
                                <h5 className="text-center mb-4">Log in to Facebook</h5>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                <label htmlFor="floatingInput">Email address or phone number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary w-100 py-2 fw-bold bg-custom-color" type="button">Log in</button>
                            <div className="text-center my-3">
                                <a href="#" className="text-decoration-none">Forgotten password?</a>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}
