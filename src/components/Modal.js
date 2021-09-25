const Modal = (props) => {
    const removeBackdropHandler = () => {
      props.remove()
    }
    return(
      <div className="modal">
        <div className="card">
          <h1>Delete </h1>
        <button onClick={removeBackdropHandler}> Confirm</button>
           <button onClick={removeBackdropHandler}> Cancel</button>
        </div>
      </div>
    )
  }

  export default Modal