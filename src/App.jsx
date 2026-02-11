import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GameProvider} from './context/GameContext.jsx';
import {MainLayout} from './components/layout/MainLayout.jsx';
import {Mission1} from "./pages/mission1/Mission1.jsx";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {UserPage} from "./pages/UserPage/UserPage.jsx";
import {BadNewsletter} from "./pages/Newsletter/BadNewsletter.jsx";


function App() {
    return (
        <BrowserRouter>
            <GameProvider>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/mission-1" element={<Mission1/>}/>
                        <Route path="/mission-2" element={<BadNewsletter/>}/>
                        <Route path="/user" element={<UserPage/>}/>
                    </Route>
                </Routes>
            </GameProvider>
        </BrowserRouter>

    )
}

export default App;