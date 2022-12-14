import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import ErrorPage from "./pages/ErrorPage.js"
import HomePage from "./pages/HomePage.js"
import TasksPage from "./components/TasksPage"
import SingleTask from "./pages/SingleTask"
import SchedulePage from './pages/SchedulePage'
// import TimePage from "./pages/TimePage"

import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/tasks' element={<TasksPage />}>
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select a Task</p>
                            </main>
                        }
                    />
                    <Route path=':taskId' element={<SingleTask />} />
                </Route>
                <Route path='/schedule' element={<SchedulePage />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
