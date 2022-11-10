import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "./styles/App.scss"
import "./styles/Reset.scss"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

import 'devextreme/dist/css/dx.material.teal.dark.compact.css';


function App() {
    return (
        <div className='App'>
            <nav>
                <Header />
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default App
