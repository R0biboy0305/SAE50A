import {GoodTaskList} from "../../components/ui/task-list/GoodTaskList.jsx";

export const GoodHomePage = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 w-2/3 mx-auto">
                <h1 className="text-blue-600 font-bold text-center uppercase text-3xl">User Nightmare</h1>
                <h2 className="font-bold text-xl">Bienvenue sur User Nightamare</h2>
                <p>User Nightmare est une expérience interactive conçue pour vous faire comprendre l'importance d'une bonne
                    interface, mais aussi pour décrypter les mécanismes de frustration que subissent les utilisateurs au
                    quotidien.
                    Basculez entre le design <span className="text-blue-600 font-bold">Good UX</span> et le design <span className="text-red-600 font-bold">Nightmare</span> pour voir, enfin, ce qui fait la différence entre
                    un utilisateur heureux et un utilisateur qui rage-quit.</p>

                <p>Vous pouvez basculer sur le mode Nightmare en cliquant sur le bouton "Switch to Nightmare".</p>
                <p> Attention, votre patience et sens de l'observation seront mis a rudes épreuves</p>
            </div>
            <div className="w-2/3 mx-auto">
                <h2>Voici vos missions : </h2>
                <GoodTaskList MissionRanking={1} MissionDescription={"Créez-vous un compte"}/>
                <GoodTaskList MissionRanking={2} MissionDescription={"Tentez de vous créer un compte client"}/>
                <GoodTaskList MissionRanking={3} MissionDescription={"Tentez de faire qlq chose"}/>
            </div>
        </div>
    )
}