import UserCard from './UserCard';

export default function App() {
    // 1. On crée un tableau de données (comme si venait d'une API)
    const users = [
        { id: 1, name: "Bouna Badiane", role: "Lead Architect", email: "bouna.badiane@entreprise.com" },
        { id: 2, name: "Jihane Omari", role: "Middleware Specialist", email: "jihane.omari@entreprise.com" },
        { id: 3, name: "Adnane Yacine", role: "Backend Developer", email: "adnane.yacine@entreprise.com" },
        { id: 4, name: "Hasna Elomary", role: "Frontend Developer", email: "hasna.elomary@entreprise.com" }
    ];

    return (
        <div style={{ padding: "30px", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Mon Répertoire Utilisateurs</h1>
            <p>Liste générée dynamiquement grâce à la méthode `.map()` :</p>

            {/* 2. On parcourt le tableau avec .map() pour afficher une UserCard par utilisateur */}
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    role={user.role}
                    email={user.email}
                />
            ))}
        </div>
    );
}