import { useState } from 'react';

function UserCard({ name, role, email }) {
    // 1. On déclare un state booléen (commence à `false` : pas encore aimé)
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9"
        }}>
            <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>{name}</h3>
            <p style={{ margin: "0 0 5px 0", fontStyle: "italic", color: "#666" }}>Rôle : {role}</p>
            <p style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#007acc" }}>Email : {email}</p>

            {/* 2. Le texte s'adapte dynamiquement selon la valeur de isLiked */}
            <p style={{ fontWeight: "bold" }}>
                {isLiked ? "❤️ Aimé" : "🤍 Pas encore aimé"}
            </p>

            {/* 3. Au clic, on inverse la valeur de isLiked grâce à la fonction de mise à jour */}
            <button
                onClick={() => setIsLiked(!isLiked)}
                style={{
                    padding: "8px 12px",
                    backgroundColor: isLiked ? "#ff4d4d" : "#007acc",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
            >
                {isLiked ? "Je n'aime plus" : "J'aime"}
            </button>
        </div>
    );
}

export default UserCard;