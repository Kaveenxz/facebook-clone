import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                    <div class="row">
                        <div className="col-sm-2">
                            <a class="navbar-brand col-lg-3 me-0" href="#"><img src={logo} alt="" style={'width:50px'} /></a>
                        </div>
                        <div className="col-sm-10 mt-2">
                            <form role="search">
                                <input class="form-control" type="search" placeholder="Search facebook" aria-label="Search" style={'border-radius:18px'}/>
                            </form>
                        </div>
                    </div>

                    <ul class="navbar-nav col-lg-6 justify-content-lg-center">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-lg-flex col-lg-3 justify-content-lg-end">
                        <button class="btn btn-primary">Button</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}