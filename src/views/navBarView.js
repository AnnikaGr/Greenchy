import { RouterLink } from "vue-router";
function NavBarView(props) {
        return (
        <div>
                            <nav class="navbar" role="navigation" aria-label="main navigation">
                            <div class="navbar-brand">
                                
                                <router-link class="navbar-item" to="/">
                                <img src="https://drive.google.com/uc?id=1qOlFyxNasCEqDCBQsUyhMhdEYN2NDwBY" ></img>
                                </router-link>

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
                                            {
                                                props.userLoggedIn ? 
                                                <router-link to="/welcome" class="button is-light" onClick={() => props.signOut()}>
                                                    Log out
                                                </router-link> :
                                                <div>
                                                    <router-link to="/signup" class="button is-light">
                                                        Sign up
                                                    </router-link>
                                                    <router-link to="/login" class="button is-primary">
                                                        <strong>Log in</strong>
                                                    </router-link> 
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </nav>
        </div>
    );
}

export default NavBarView;