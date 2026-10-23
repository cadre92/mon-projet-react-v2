// src/App.jsx
import React from 'react';
import { UserList } from './components/UserList';

export default function App() {
    return (
        <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'Arial, sans-serif' }}>
            <h1>React Mastery Lab</h1>
            <p style={{ color: '#555' }}>Chapitre 3 : Consommation d'API avec useEffect</p>
            <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />

            <UserList />
        </div>
    );
}