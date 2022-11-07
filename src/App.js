import "./styles/App.scss"
import "./styles/Reset.scss"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"

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
