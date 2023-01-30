import Button from "../../atoms/button";
import {SyntheticEvent} from "react";
import {PlusCircle} from "react-feather";
import '../../style/components/form.scss';
import Input from "../../atoms/input";

const onSubmit = ( e : SyntheticEvent ) => {
    e.preventDefault();
    console.log( e.target );
}

const AddTodoForm = () => {
  return(
    <form onSubmit={ onSubmit } className="form-container">
      <Input name="task" className="form-input" />
      <Input name="priority" type="select" className="form-input">
        <option value="0">select</option>
        <option value="1">emergency</option>
        <option value="2">secondary</option>
        <option value="3">just remember</option>
      </Input>
      <Button text="Add" type="submit" icon={ <PlusCircle/> } />
    </form>
  )
}

export default AddTodoForm;
