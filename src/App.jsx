import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {GameProvider} from './context/GameContext.jsx';
import {MainLayout} from './components/layout/MainLayout.jsx';
import {Mission1} from "./pages/Mission1.jsx";

const Home = () => <h1 className="text-4xl font-bold">Bienvenue (Page Accueil)</h1>;

function App() {
    return (
        <GameProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/mission-1" element={<Mission1 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GameProvider>
    )
}

export default App;