// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import { UserCard } from './UserCard';

export function UserList() {
    // 1. États pour stocker les utilisateurs, le chargement et les erreurs
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // 2. useEffect pour lancer l'appel API au chargement du composant
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);      // On stocke les données reçues dans le state
                setLoading(false);   // On désactive l'état de chargement
            })
            .catch(err => {
                setError(err.message); // On stocke l'erreur s'il y en a une
                setLoading(false);
            });
    }, []); // Tableau vide [] = s'exécute une seule fois au premier affichage (montage)

    // 3. Filtrage dynamique basé sur la recherche
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 4. Gestion de l'affichage pendant le chargement
    if (loading) {
        return <p style={{ textAlign: 'center', color: '#666' }}>⏳ Chargement des utilisateurs en cours...</p>;
    }

    // 5. Gestion de l'affichage en cas d'erreur réseau
    if (error) {
        return <p style={{ textAlign: 'center', color: '#ef4444' }}>❌ Erreur : {error}</p>;
    }

    return (
        <div>
            <h2>Liste des Utilisateurs (Via API)</h2>

            {/* Barre de recherche */}
            <input
                type="text"
                placeholder="🔍 Rechercher par nom..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box',
                    fontSize: '14px'
                }}
            />

            {/* Liste des cartes */}
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))
            ) : (
                <p style={{ color: '#888', fontStyle: 'italic' }}>Aucun utilisateur trouvé.</p>
            )}
        </div>
    );
}