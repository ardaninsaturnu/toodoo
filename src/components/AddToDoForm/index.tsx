import Button from "../../atoms/button";
import {SyntheticEvent} from "react";
import {PlusCircle} from "react-feather";
import Input from "../../atoms/input";
import {priorityOptions} from "../../utility/constant";
import '../../style/components/form.scss';

const onSubmit = ( e : SyntheticEvent ) => {
    e.preventDefault();
    console.log( e.target );
}

const AddTodoForm = () => {
  return(
    <form onSubmit={ onSubmit } className="form-container">
      <Input name="task" className="form-input" />
      <Input name="priority" type="select" className="form-input">
        {
          priorityOptions.map( ( priority, index ) => (
            <option value={ priority.value } key={ index }>{ priority.label }</option>
            )
          )
        }
      </Input>
      <Button text="Add" type="submit" icon={ <PlusCircle/> } />
    </form>
  )
}

export default AddTodoForm;
