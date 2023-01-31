import {Trash2} from "react-feather";
import Input from "../../atoms/input";
import {useAppDispatch} from "../../store";
import {removeTodo} from "../../store/slices/todoSlice";

type PropTypes = {
  task: string,
  status?: boolean,
  id: number
}

const ListItem = ({ task, status, id } : PropTypes ) => {
  const dispatch = useAppDispatch()

  return(
    <div className="list-item">
      <div className="list-item-task">
        <Input name="status" type="checkbox"/>
        <p className="list-item-title">{ task }</p>
      </div>
      <div className="list-item-transitions">
        <Trash2 onClick={() => dispatch(removeTodo( id ))} color={ status ? `grey` : 'red' } style={{ width: 36 }}/>
      </div>
    </div>
  )
}

export default ListItem;
