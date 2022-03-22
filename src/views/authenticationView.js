const AuthenticationView = {
    props: ["isSignUp", "signIn", "signUp"],
    data() {
        return {
            credentials: {}
        }
    },
    render() {
        return (
            <div class={"modal is-active"}>
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div id="auth-container">
                        <div class="box">
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" onChange={(e) => this.credentials.email = e.target.value} placeholder="e.g. alex@example.com" />
                                </div>
                            </div>

                            {this.isSignUp ? <div class="field">
                                <label class="label">Full Name</label>
                                <div class="control">
                                    <input class="input" type="name" onChange={(e) => this.credentials.name = e.target.value} placeholder="Max Mustermann" />
                                </div>
                            </div> : false}

                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input class="input" type="password" onChange={(e) => this.credentials.password = e.target.value} placeholder="********" />
                                </div>
                            </div>

                            <a class="button is-primary" onClick={() => {
                                if (this.isSignUp) {
                                    this.signUp(this.credentials)
                                } else {
                                    this.signIn(this.credentials)
                                }
                            }}>{this.isSignUp ? "Sign Up" : "Sign In"}</a>
                        </div>
                    </div>
                </div>
                <router-link to="/" class="modal-close is-large" aria-label="close"></router-link>
            </div>
        );
    }
}
/*comment*/


export default AuthenticationView;