// src/components/UserList.jsx
import React from 'react';
import { UserCard } from './UserCard';

export function UserList({ users }) {
    return (
        <div>
            <h2>Liste des Utilisateurs (Statique)</h2>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}