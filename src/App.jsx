import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {GameProvider, useGame} from './context/GameContext.jsx';
import {MainLayout} from './components/layout/MainLayout.jsx';
import {HomePage} from "./pages/Home/HomePage.jsx";
import {UserPage} from "./pages/User/UserPage.jsx";
import {BadNewsletter} from "./pages/Newsletter/BadNewsletter.jsx";
import {ScrollToAnchor} from "./utils/ScrollToAnchor.jsx";
import {ErrorPage} from "./pages/Error/Error.jsx";
import {BadSubscribe} from "./pages/Subscribe/BadSubscribe.jsx";

const NightmareRoute = ({children}) =>{
    const {isNightMare } = useGame();

    if (!isNightMare) {
        return <Navigate to="/" replace/>;
    }

    return children;
}

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/user" element={<UserPage/>}/>
                <Route
                    path="/mission-2"
                    element={
                        <NightmareRoute>
                            <BadNewsletter />
                        </NightmareRoute>}/>
                <Route
                    path="/subscribe"
                    element={
                        <NightmareRoute>
                            <BadSubscribe />
                        </NightmareRoute>}/>
                <Route
                    path="/error"
                    element={
                        <NightmareRoute>
                            <ErrorPage />
                        </NightmareRoute>}/>
            </Route>
        </Routes>
    )
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToAnchor/>
            <GameProvider>
                <AppRoutes />
            </GameProvider>
        </BrowserRouter>

    )
}

export default App;