import Button from "../../atoms/button";
import {SyntheticEvent} from "react";
import {PlusCircle} from "react-feather";

const onSubmit = ( e : SyntheticEvent ) => {
    e.preventDefault();
    console.log( e.target );
}

const AddTodoForm = () => {
  return(
    <form onSubmit={ onSubmit } className="form-container">
      <input className="form-input" type="text" name="task"/>
      <select className="form-input" name="priority">
        <optgroup>
          <option value="0">select</option>
          <option value="1">emergency</option>
          <option value="2">secondary</option>
          <option value="3">just remember</option>
        </optgroup>
      </select>
      <Button text="Add" type="submit" icon={ <PlusCircle/> } />
    </form>
  )
}

export default AddTodoForm;
