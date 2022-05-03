function AuthenticationView(props) {
        return (
            <div class={"modal is-active"}>
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div id="auth-container">
                        <div class="box">
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" onChange={(e) => props.onEmailChange(e.target.value)} placeholder="e.g. jane@doe.com" />
                                </div>
                            </div>

                            {props.isSignUp ? <div class="field">
                                <label class="label">Full Name</label>
                                <div class="control">
                                    <input class="input" type="name" onChange={(e) => props.onNameChange(e.target.value)} placeholder="Jane Doe" />
                                </div>
                            </div> : false}

                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input class="input" type="password" onChange={(e) => props.onPasswordChange(e.target.value)} placeholder="********" />
                                </div>
                            </div>

                            {props.error.message ? <div class="has-text-danger">{props.error.message}</div> : ""}

                            <a class="button is-primary" onClick={props.onSignInUp}>
                                {props.isSignUp ? "Sign Up" : "Sign In"}
                            </a>
                        </div>
                    </div>
                </div>
                <router-link to="/trips" class="modal-close is-large" aria-label="close"></router-link>
            </div>
        );
}

export default AuthenticationView;