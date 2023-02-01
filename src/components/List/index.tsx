import '../../style/components/list.scss';
import ListItem from "../ListItem";
import { useEffect } from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {fetchTodos} from "../../store/slices/todoSlice";
import {Loader} from "react-feather";

const List = () => {
  const dispatch = useAppDispatch();
  const todoState = useAppSelector(state => state.tasks );
  const {todos, loading} = todoState;

  useEffect(() => {
    dispatch( fetchTodos() )
  },[ dispatch ]);

  return(
    loading ? <Loader/> : (
      <div className="list-item-container">
        {
          todos?.map( ( item, index) => {
            return(
              <ListItem task={item.task} key={index} id={item.id} completed={item.status} priority={item.priority} />
            )
          })
        }
      </div>
    )
  )
}

export default List;

