import { useState } from 'react';
import UserCard from './UserCard';

export default function App() {
    // 1. On transforme le tableau statique en state pour pouvoir y ajouter de nouveaux utilisateurs
    const [users, setUsers] = useState([
        { id: 1, name: "Bouna Badiane", role: "Lead Architect", email: "bouna.badiane@entreprise.com" },
        { id: 2, name: "Jihane Omari", role: "Middleware Specialist", email: "jihane.omari@entreprise.com" }
    ]);

    // 2. States pour stocker ce que l'utilisateur tape dans le formulaire
    const [newName, setNewName] = useState("");
    const [newRole, setNewRole] = useState("");

    // 3. Fonction appelée lors de la soumission du formulaire
    const handleAddUser = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page par défaut du formulaire

        if (!newName.trim() || !newRole.trim()) return; // Sécurité : on ne veut pas de champs vides

        // Création du nouvel objet utilisateur
        const newUser = {
            id: Date.now(), // Utilisation d'un timestamp unique pour l'id
            name: newName,
            role: newRole,
            email: `${newName.toLowerCase().replace(/\s+/g, '.')}@entreprise.com`
        };

        // On met à jour le tableau des utilisateurs (on garde les anciens avec `...users` et on ajoute le nouveau)
        setUsers([...users, newUser]);

        // On réinitialise les champs du formulaire
        setNewName("");
        setNewRole("");
    };

    return (
        <div style={{ padding: "30px", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Mon Répertoire Utilisateurs</h1>

            {/* Formulaire d'ajout */}
            <form onSubmit={handleAddUser} style={{ marginBottom: "20px", padding: "15px", background: "#f1f1f1", borderRadius: "8px" }}>
                <h3>Ajouter un nouveau collaborateur</h3>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        placeholder="Nom complet"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        placeholder="Rôle / Poste"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 15px", background: "#007acc", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Ajouter l'utilisateur
                </button>
            </form>

            <p>Liste des collaborateurs :</p>

            {/* Affichage de la liste */}
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