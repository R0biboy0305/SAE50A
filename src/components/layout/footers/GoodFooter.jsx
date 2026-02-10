import {Link} from 'react-router-dom';
import logo from '../../../assets/user_nightmare_logo.jpg';
import {GoodFooterItem} from '../../ui/footer-items-list/GoodFooterItemList.jsx';
import {SiGithub, SiX, SiInstagram, SiReact, SiWebstorm, SiNpm} from '@icons-pack/react-simple-icons';


export const GoodFooter = () => {
    return (<footer
        className="bg-gray-300 text-center py-[20px] px-[50px] mt-8 bottom-0 flex flex-col items-center justify-between">
        <div className="flex gap-8 items-start">
            <div className="flex gap-8">
                <div className="flex flex-col items-start justify-center w-[60%] gap-3">
                    <img className="w-[150px]" src={`${logo}`} alt="logo"/>
                    <p className="text-xs text-left w-[80%]">Une application qui met l'utilisateur au défi de
                        réaliser une série de tâches en apparence simples, mais qui peuvent très vite se tourner en
                        cauchemar selon l'interface choisie. Il s’agit d’un
                        outil ludique mettant en avant les bonnes pratiques UX/UI, permettant de comparer en temps
                        réel le pire et le meilleur du web.</p>
                    <ul className="flex flex-row gap-5">
                        <li><SiGithub size={18}/></li>
                        <li><SiX size={18}/></li>
                        <li><SiInstagram size={18}/></li>
                    </ul>
                </div>

                <div className="flex justify-evenly w-full gap-8">

                    <ul className="flex flex-col items-start">
                        <span className="font-bold text-s mb-2">Navigation</span>
                        <GoodFooterItem to={`/`}>Accueil</GoodFooterItem>
                        <GoodFooterItem to={`/mission-1`}>Mission 1</GoodFooterItem>
                        <GoodFooterItem to={`/mission-2`}>Mission 2</GoodFooterItem>
                        <GoodFooterItem to={`/mission-3`}>Mission 3</GoodFooterItem>
                    </ul>

                    <ul className="flex flex-col items-start">
                        <span className="font-bold text-s mb-2">Ressources</span>
                        <GoodFooterItem to="#">Blog</GoodFooterItem>
                        <GoodFooterItem to="#">Aide</GoodFooterItem>
                    </ul>

                    <ul className="flex flex-col items-start text-left max-w-xs">
                        <span className="font-bold mb-2">Newsletter</span>
                        <GoodFooterItem to={`/newsletter`}>Gérer mon abonnement a la Newsletter</GoodFooterItem>
                    </ul>
                </div>
            </div>
        </div>

        <div
            className="flex flex-row justify-center items-center w-full py-4 mt-8 border-t border-gray-400 flex-1">
            <ul className="flex flex-row gap-5 opacity-70">
                <GoodFooterItem isNavLink>Conditions générales</GoodFooterItem>
                <GoodFooterItem isNavLink>Mentions légales / CGU</GoodFooterItem>
                <GoodFooterItem isNavLink>Politique de confidentialité</GoodFooterItem>
            </ul>
        </div>
        <p className="text-xs mt-2 opacity-50">&copy; 2024 Good Footer. All rights reserved.</p>
    </footer>
)
}