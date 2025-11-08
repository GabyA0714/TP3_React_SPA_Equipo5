import React from 'react';
import './GlowingButton.css'; 

/**
 * @param {string} as - Elemento a renderizar ('a' para enlace, 'button' por defecto).
 * @param {string} variant - 'multiverse', 'sound', o 'diagram' para estilos específicos.
 * @param {object} props - Propiedades estándar de React (onClick, children, href, etc.).
 */
export default function GlowingButton({ 
    as: Component = 'button',
    variant = 'multiverse', 
    ...props 
}) {

    return (
        <Component 
            className={`glowing-btn btn-${variant}`} 
            {...props}
        >
            {props.children}
        </Component>
    );
}