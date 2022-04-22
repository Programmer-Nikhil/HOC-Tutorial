import React, { forwardRef } from "react";

/**
 * forwardRef is a concept of passing the ref from parent to child and access the
 * Childs details in the parent component. We can access the child element dom properties In parent using forwardRef,
 */

const User = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

export default forwardRef(User);
