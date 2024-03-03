import './login.css'

export default function Login() {

    return (
        <div className="container mt-20">
            <div className="row ">
                <div className="col-2"></div>
                <div className="col-6 left-side">
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
                            <button className="btn btn-primary w-100 py-2 fw-bold bg-custom-color" type="submit">Log in</button>
                            <div className=" text-center my-3">
                                <a href="" className="text-decoration-none">Forgotten password?</a>
                            </div>
                            <hr />
                            <div className="text-center">
                                <button className="btn btn-success w-90 py-2 fw-bold mt-2 mb-1 bg-custom-color-2" type="submit">Create new account</button>
                            </div>
                        </form>
                        <p className="mt-3 m-4 text-black"><a href="" className="text-decoration-none text-black fw-bold">Create a Page</a> for a celebrity, brand or business.</p>

                    </main>
                </div>
            </div>
        </div>
    )
}