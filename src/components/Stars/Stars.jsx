import './Stars.css';
import React from 'react';

export default function Stars() {
return (
<div className="stars-container">
            {/* Vuelve a la estructura original para que el CSS funcione */}
            <div className="stars">
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>

</div>
);
}