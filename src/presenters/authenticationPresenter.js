import AuthenticationView from "@/views/authenticationView"

const Authentication = {
    data(){
        return {
            isActive: true
        }
    },
    render(){
        return <AuthenticationView isActive={this.isActive} closeModal={() => this.isActive = false}/>
    }
}

export default Authentication;
