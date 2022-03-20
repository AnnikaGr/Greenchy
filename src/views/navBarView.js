import { RouterLink } from "vue-router";
function NavBarView(props) {
        return (
        <div>
                            <nav class="navbar" role="navigation" aria-label="main navigation">
                            <div class="navbar-brand">
                                
                                <a class="navbar-item" href="">
                                <img src="https://drive.google.com/uc?id=1qOlFyxNasCEqDCBQsUyhMhdEYN2NDwBY" ></img>
                                </a>

                                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                </a>
                            </div>

                            <div id="navbarBasicExample" class="navbar-menu">
                                <div class="navbar-start">
                                <a class="navbar-item">
                                    Home
                                </a>
                                </div>

                                <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="buttons">
                                    <a href="/login" class="button " style="background-color:#71bf71">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a class="button is-light">
                                        Log in
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </nav>
        </div>
    );
}

export default NavBarView;