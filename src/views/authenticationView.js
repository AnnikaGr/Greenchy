const AuthenticationView = {
    props: ["isActive", "isSignUp", "closeModal", "signIn", "signUp"],
    data(){
        return {
            credentials : {}
        }
    },
    render(){
        if (this.isActive) {
            return (
                <div class={"modal is-active"}>
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div id="auth-container">
                        <div class="box">
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" onChange={(e) => this.credentials.email = e.target.value} placeholder="e.g. alex@example.com"/>
                                </div>
                            </div>

                            {this.isSignUp ? <div class="field"> 
                                <label class="label">Full Name</label>
                                <div class="control">
                                <input class="input" type="name" onChange={(e) => this.credentials.name = e.target.value} placeholder="Max Mustermann"/>
                                </div>
                            </div>: false}

                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input class="input" type="password" onChange={(e) => this.credentials.password = e.target.value} placeholder="********"/>
                                </div>
                            </div>

                            <button class="button is-primary" onClick={() => {
                                if (this.isSignUp) {
                                    this.signUp(this.credentials)
                                } else {
                                    this.signIn(this.credentials)
                                }
                                }}>{this.isSignUp ? "Sign Up" : "Sign In"}</button>
                        </div>
                        </div>
                    </div>
                    <button class="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
                </div>
            ); 
        }
    }
}


export default AuthenticationView;