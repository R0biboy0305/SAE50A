import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GameProvider} from './context/GameContext.jsx';
import {MainLayout} from './components/layout/MainLayout.jsx';
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {UserPage} from "./pages/UserPage/UserPage.jsx";
import {BadNewsletter} from "./pages/Newsletter/BadNewsletter.jsx";
import {ScrollToAnchor} from "./components/utils/ScrollToAnchor.jsx";


function App() {
    return (
        <BrowserRouter>
            <ScrollToAnchor/>
            <GameProvider>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/mission-2" element={<BadNewsletter/>}/>
                        <Route path="/user" element={<UserPage/>}/>
                    </Route>
                </Routes>
            </GameProvider>
        </BrowserRouter>

    )
}

export default App;