import './login.css'

export default function Login() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1 className="font-size">facebook</h1>
                    <h3>Facebook helps you connect and share with the people in your life</h3>
                </div>
                <div className="col-4">
                    <main className="form-signin w-100 m-auto">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                            <div className="form-check text-start my-3">
                                <a href="" className="text-decoration-none">Forgotten password?</a>
                            </div>
                            <hr />
                            <button className="btn btn-success w-100 py-2" type="submit">Create new account</button>
                            <p className="mt-5 mb-3 text-body-secondary"><a href="">Create a Page</a> for a celebrity, brand or business.</p>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}