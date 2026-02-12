import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToAnchor = () => {
    const location = useLocation();
    const { hash } = location;

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location]);
    return null;
};

