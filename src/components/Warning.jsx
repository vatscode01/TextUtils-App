import React from "react";

function Warning(props) {
  const capitalize=(word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
    props.warning && <div className={`alert alert-${props.warning.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.warning.type)}</strong>: {props.warning.message}
    </div>
  );
}

export default Warning;
