// src/components/UserList.jsx
import React, { useState } from 'react';
import { UserCard } from './UserCard';

export function UserList({ users }) {
    // 1. State pour stocker ce que l'utilisateur tape dans la barre de recherche
    const [searchTerm, setSearchTerm] = useState('');

    // 2. Filtrer le tableau des utilisateurs en temps réel
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Liste des Utilisateurs (Interactif)</h2>

            {/* 3. Champ de saisie (Input de recherche) */}
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

            {/* 4. Affichage conditionnel selon le résultat du filtre */}
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