import {useState} from "react";
import Button from "../../atoms/button";
import {SyntheticEvent} from "react";
import { PlusCircle } from "react-feather";
import Input from "../../atoms/input";
import {priorityOptions} from "../../utility/constant";
import '../../style/components/form.scss';
import axios from "axios";

const AddTodoForm = () => {
  const [ inputs, setInputs ] = useState({});
  const [ loading, setLoading ] = useState( false );

  const onSubmit = ( e : SyntheticEvent ) => {
    e.preventDefault();
    setLoading(true );

    setInputs( inputs =>({
      ...inputs,
      status: false
    }))

    axios({
       method: 'post',
       url: process.env.REACT_APP_API_URL + 'tasks-test',
       data: inputs
     })
      .then( response => {
          if( response.status !== 201 ) {
            return;
          }
          alert( 'todo created successfully' );
          setLoading(false);
      })
      .catch( e => {
        alert(e);
        setLoading(false);
      })
      .finally( () => {
        setInputs({});
      })
  }

  const handleChange = ( e : SyntheticEvent  ) => {
    const input = e.target as HTMLInputElement;
    const name = input.name;
    const value = input.value;
    setInputs( inputs => ({ ...inputs, [name]: value }))
  }

  return(
    <form onSubmit={ onSubmit } className="form-container">
      <Input name="task" className="form-input" onChange={handleChange} />
      <Input name="priority" type="select" className="form-input" onChange={handleChange}>
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
