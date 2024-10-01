import React from 'react';

export default function Alert(props) {
  // Capitalize the alert type
  const capitalize = (word) => {
    if (word) {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return '';
  };

  return (
    <div
      className={`alert alert-${props.alert ? props.alert.type : 'success'} alert-dismissible fade show`}
      role="alert"
      style={{
        height: '60px',  // Fixed height for the alert
        visibility: props.alert ? 'visible' : 'hidden',  // Keep space reserved
        marginBottom: '20px',  // Add some margin if needed
        display: 'flex',  // Center content vertically
        alignItems: 'center'
      }}
    >
      {props.alert ? (
        <>
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </>
      ) : null}
    </div>
  );
}
