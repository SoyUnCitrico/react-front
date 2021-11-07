import React from 'react';
import './TodoLoading.css';

const TodoLoading = ({error}) => {
  return (
    <div className="TodoLoading-container">
      <span className="TodoLoading-completeIcon">&#10003;</span>
      <p className="TodoLoading-text">Cargando...</p>
      <span className="TodoLoading-deleteIcon">&#120;</span>
    </div>
  )
}

export { TodoLoading };