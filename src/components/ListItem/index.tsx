import {Trash2} from "react-feather";
import Input from "../../atoms/input";

type PropTypes = {
  task: string,
  status?: boolean

}

const ListItem = ({ task, status } : PropTypes ) => {

  return(
    <div className="list-item">
      <div className="">
        <p className="list-item-title">{ task }</p>
      </div>
      <div className="list-item-transitions">
        <Trash2 color={ status ? `grey` : 'red' } style={{ width: 36 }}/>
        <Input name="status" type="checkbox"/>
      </div>
    </div>
  )
}

export default ListItem;
