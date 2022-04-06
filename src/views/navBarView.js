import { RouterLink } from "vue-router";
function NavBarView(props) {
    const toggleBurger = () => {
        let burgerIcon = document.getElementById('burger');
        let items = document.getElementById('navItems');
        burgerIcon.classList.toggle('is-active');
        items.classList.toggle('is-active');
      };
        return (
        <div>
                            <nav class="navbar" role="navigation" aria-label="main navigation">
                            <div class="navbar-brand">
                                
                                <router-link class="navbar-item" to="/welcome">
                                <img src="https://drive.google.com/uc?id=1qOlFyxNasCEqDCBQsUyhMhdEYN2NDwBY" ></img>
                                </router-link>

                                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample" id='burger' onClick={toggleBurger}>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                </a>
                            </div>

                            <div class="navbar-menu" id='navItems'>
                                <div class="navbar-start">
                                    <router-link to="/trips" class="navbar-item">
                                        Trips
                                    </router-link>
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