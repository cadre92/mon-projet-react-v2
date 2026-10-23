// src/components/UserCard.jsx
import React from 'react';

export function UserCard({ user }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '10px',
            background: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{user.name}</h3>
            <p style={{ margin: '4px 0', color: '#666' }}>📧 Email : {user.email}</p>
            <p style={{ margin: '4px 0', color: '#666' }}>📍 Ville : {user.city}</p>
        </div>
    );
}