import React, {SyntheticEvent} from "react";
import {Trash2} from "react-feather";
import Input from "../../atoms/input";
import {useAppDispatch} from "../../store";
import {removeTodo,updateTodo } from "../../store/slices/todoSlice";

type PropTypes = {
  task: string,
  id: number,
  completed: boolean
}

const ListItem = ({ task, id, completed } : PropTypes ) => {
  const dispatch = useAppDispatch();

  const handleChange = ( e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { checked:status } = target;
    dispatch( updateTodo({ id, status }) );
  };

  return(
    <div className="list-item">
      <div className="list-item-task">
        <Input name="status" type="checkbox" onChange={handleChange} checked={completed}/>
        <p className={`list-item-title ${ completed && 'overLine' }`}>{ task }</p>
      </div>
      <div className="list-item-transitions">
        <Trash2 onClick={() => !completed && dispatch(removeTodo( id ))} color={ completed ? `grey` : 'red' } style={{ width: 36 }}/>
      </div>
    </div>
  )
}

export default ListItem;
