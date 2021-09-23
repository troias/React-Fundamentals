const Modal = (props) => {
    const removeBackdropHandler = () => {
      props.remove()
    }
    return(
      <div className="modal">
        <div className="card">
          <h1>Delete </h1>
        <button onClick={removeBackdropHandler}> Confirm</button>
        </div>
      </div>
    )
  }

  export default Modal