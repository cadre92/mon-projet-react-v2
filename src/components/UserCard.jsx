// src/components/UserCard.jsx
import React, { useState } from 'react';

export function UserCard({ user }) {
    // 1. Déclaration du State local pour le bouton Like
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '10px',
            background: isLiked ? '#f0f9ff' : '#fff', // Change la couleur de fond si liké
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{user.name}</h3>
                <p style={{ margin: '4px 0', color: '#666' }}>📧 Email : {user.email}</p>
                <p style={{ margin: '4px 0', color: '#666' }}>📍 Ville : {user.city}</p>
            </div>

            {/* 2. Bouton interactif */}
            <button
                onClick={() => setIsLiked(!isLiked)}
                style={{
                    padding: '8px 12px',
                    background: isLiked ? '#ef4444' : '#e5e7eb',
                    color: isLiked ? '#fff' : '#374151',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                {isLiked ? '❤️ Liké' : '🤍 Liker'}
            </button>
        </div>
    );
}