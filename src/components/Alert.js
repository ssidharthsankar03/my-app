import React from 'react';

export default function Alert(props) {
    const capitalize = (word) => {
        if (word) {
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
        return ''; // Return an empty string if word is undefined
    }

    if (!props.alert) {
        return null; // Don't render anything if there's no alert
    }

    return (
        <div style={{ height: '50px' }}>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    );
}
