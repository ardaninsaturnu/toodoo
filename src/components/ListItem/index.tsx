import React, {SyntheticEvent, useEffect, useState} from "react";
import {Trash2} from "react-feather";
import Input from "../../atoms/input";
import {useAppDispatch} from "../../store";
import {removeTodo,updateTodo } from "../../store/slices/todoSlice";

type PropTypes = {
  task: string,
  id: number,
  checked: boolean
}

const ListItem = ({ task, id, checked } : PropTypes ) => {
  const dispatch = useAppDispatch();
  const [ completed, setCompleted ] = useState(false);

  const handleChange = ( e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { checked:status } = target;
    dispatch( updateTodo({ id, status }) );
    setCompleted( status );
  };

  return(
    <div className="list-item">
      <div className="list-item-task">
        <Input name="status" type="checkbox" onChange={handleChange} checked={checked}/>
        <p className={`list-item-title ${ checked && 'overLine' }`}>{ task }</p>
      </div>
      <div className="list-item-transitions">
        <Trash2 onClick={() => dispatch(removeTodo( id ))} color={ checked ? `grey` : 'red' } style={{ width: 36 }}/>
      </div>
    </div>
  )
}

export default ListItem;
