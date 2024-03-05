import logo from '../assets/logo.png'
import home from '../assets/home.png'
import group from '../assets/group.png'
import game from '../assets/game.png'
import video from '../assets/video.png'
import bell from '../assets/bell.png'
import menu from '../assets/menu.png'
import profile from '../assets/profile.jpg'
import massenger from '../assets/massenger.png'
import './home.css'
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
                                <input class="form-control" type="search" placeholder="Search facebook" aria-label="Search" style={'border-radius:18px'} />
                            </form>
                        </div>
                    </div>

                    <ul class="navbar-nav col-lg-6 justify-content-lg-center ms-5">

                        <li class="nav-item me-5 ms-5">
                            <a class="nav-link active" aria-current="page" href="#"><img src={home} alt="" style={'width:30px'} /></a>
                        </li>
                        <li class="nav-item me-5 ms-5">
                            <a class="nav-link active" aria-current="page" href="#"><img src={video} alt="" style={'width:30px'} /></a>
                        </li>
                        <li class="nav-item me-5 ms-5">
                            <a class="nav-link active" aria-current="page" href="#"><img src={group} alt="" style={'width:30px'} /></a>
                        </li>
                        <li class="nav-item me-5 ms-5">
                            <a class="nav-link active" aria-current="page" href="#"><img src={game} alt="" style={'width:30px'} /></a>
                        </li>
                    </ul>
                    <div class="d-lg-flex col-lg-3 justify-content-lg-end">
                        <ul class="navbar-nav col-lg-6 justify-content-lg-center" id="profile-list">

                            <li class="nav-item ">
                                <a class="nav-link active" aria-current="page" href="#"><img src={menu} alt="" style={'width:25px'} /></a>
                            </li>
                            <li class="nav-item  ">
                                <a class="nav-link active" aria-current="page" href="#"><img src={massenger} alt="" style={'width:25px'} /></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active" aria-current="page" href="#"><img src={bell} alt="" style={'width:25px'} /></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active" aria-current="page" href="#"><img src={profile} alt="" style={'width:25px'} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}