import {Trash2} from "react-feather";
import Input from "../../atoms/input";
import {useState} from "react";

const ListItem = () => {
  const [ status, setStatus ] = useState( false );

  return(
      <div className="list-item">
        <div className="">
          <p className="list-item-title">DO ALL GIRLS lay them on the floor</p>
        </div>
        <div className="list-item-transitions">
          <Trash2 color={ status ? `grey` : 'red' } style={{ width: 36 }}/>
          <Input name="status" type="checkbox"/>
        </div>
      </div>
  )
}

export default ListItem;
