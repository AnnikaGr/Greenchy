function AuthenticationView(props) {
    if (props.isActive) {
        return (
            <div class={"modal is-active"}>
            <div class="modal-background"></div>
            <div class="modal-content">
                <div id="auth-container"/>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={() => props.closeModal()}></button>
        </div>
    );
    }
}

export default AuthenticationView