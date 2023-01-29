import Button from "../../atoms/button";

type PropTypes = {
  onSubmit?: () => void;
}

const AddTodoForm = ( { onSubmit } : PropTypes ) => {
  return(
    <form onSubmit={ onSubmit } className="form-container">
      <input type="text"/>
      <Button text="Add" type="submit" />
    </form>
  )
}

export default AddTodoForm;
