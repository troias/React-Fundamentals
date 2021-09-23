const BackDrop = (props) => {
    const removeBackdropHandler = () => {
      props.remove()
    }
    return(
      <div className="backdrop" onClick={removeBackdropHandler}>
  
      </div>
    )
  }

  export default BackDrop
  