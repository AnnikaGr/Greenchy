import { createApp } from 'vue'
import NavBar from './presenters/navBarPresenter'
import router from "./router.js"
import { RouterView } from 'vue-router'


const App = {
    data(){

    },
    render(){
        return (
            <div>
                <NavBar/>
                <RouterView/>
            </div>
        );
    }
}

createApp(App).use(router).mount('#app')
