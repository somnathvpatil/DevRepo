import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <svg className="bi flex-shrink-0 me-2" width="6" height="6" role="img" aria-label="Danger:"><use htmlTo="#exclamation-triangle-fill"/></svg>
      <strong>{capitalize(props.alert.type)}</strong> :  {props.alert.msg}
    </div>
    }
  </div>
  
  )
}

export default Alert
