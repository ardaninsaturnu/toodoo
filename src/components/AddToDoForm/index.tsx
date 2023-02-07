import {useState} from "react";
import Button from "../../atoms/button";
import {SyntheticEvent} from "react";
import { PlusCircle } from "react-feather";
import Input from "../../atoms/input";
import {priorityOptions} from "../../utility/constant";
import '../../style/components/form.scss';
import {useAppDispatch, useAppSelector} from "../../store";
import {addTodo, setLoading} from "../../store/slices/todoSlice";
import {ListObject} from "../../models/Todo";

const AddTodoForm = () => {
  const [ inputs, setInputs ] = useState<ListObject>({id: 0, priority: '', status: false, task: ""});
  const dispatch = useAppDispatch();
  const loading = useAppSelector( state => state.tasks.loading );

  // submit event to add new todos
  const onSubmit = ( e : SyntheticEvent ) => {
    setLoading(true );
    e.preventDefault();
    const priority = inputs.priority === '' ? priorityOptions[1].label : inputs.priority;

    setInputs( inputs =>({
      ...inputs,
      status: false,
      priority
    }))

    dispatch( addTodo( inputs ) );
    setInputs({id: 0, priority: "", status: false, task: ""})
    setLoading(false)
  }

  // handleChange works to assign new state into input state
  const handleChange = ( e : SyntheticEvent  ) => {
    const input = e.target as HTMLInputElement;
    const name = input.name;
    const value = input.value;
    setInputs( inputs => ({ ...inputs, [name]: value }))
  }

  return(
    <form onSubmit={ onSubmit } className="form-container">
      <Input name="task" className="form-input" onChange={handleChange} value={inputs.task} required={true}/>
      <Input name="priority" type="select" className="form-input" onChange={handleChange} value={inputs.priority} required={true}>
        {
          priorityOptions.map( ( priority, index ) => (
            <option value={ priority.label } key={ index }>{ priority.label }</option>
            )
          )
        }
      </Input>
      <Button text="Add" type="submit" icon={ <PlusCircle/> } loading={loading} />
    </form>
  )
}

export default AddTodoForm;
