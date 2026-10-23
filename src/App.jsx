// src/App.jsx
import React from 'react';
import { UserList } from './components/UserList';

// Données statiques (en attendant l'API au Chapitre 3)
const MOCK_USERS = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", city: "Gwenborough" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", city: "Wisokyburgh" },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", city: "McKenziehaven" }
];

export default function App() {
    return (
        <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'Arial, sans-serif' }}>
            <h1>React Mastery Lab</h1>
            <p style={{ color: '#555' }}>Chapitre 1 : Composants et Props</p>
            <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />

            <UserList users={MOCK_USERS} />
        </div>
    );
}