import React from 'react';

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  if (!props.alert) {
    return null; // Don't render anything if there's no alert
  }

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.msg}
      <button type="button" className="close" onClick={props.closeAlert} aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
