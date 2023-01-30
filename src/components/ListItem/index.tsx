import {Trash2} from "react-feather";

const ListItem = () => {
  return(
      <div className="list-item">
        <div className="">
          <p className="list-item-title">DO ALL GIRLS lay them on the floor</p>
        </div>
        <div>
          <input type="checkbox"/>
          <Trash2 color="white"/>
        </div>
      </div>
  )
}

export default ListItem;
