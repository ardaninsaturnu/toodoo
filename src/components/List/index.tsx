import '../../style/components/list.scss';
import ListItem from "../ListItem";
import {useEffect, useState} from "react";
import axios from "axios";

type GetListResponse = {
  data: ListObject[];
  config: object;
  headers: object;
  request: object;
  status: number;
  statusText: string;
};

type ListObject = {
  id: string;
  task: string;
  status: boolean;
  priority: string;
};

const List = () => {
  const [ listData, setListData ] = useState<ListObject[]>([]);
  //const [ status, setStatus ] = useState( false );

  useEffect(() => {
    ( async () => {
      try {
        const res = await axios.get<GetListResponse['data']>(process.env.REACT_APP_API_URL + 'tasks-test');

        if( res.status !== 200 ) return;

        setListData( res.data )

      } catch (e) {
        alert(e)
      }
    })()

  },[]);

  return(
    <div className="list-item-container">
      {
        listData?.map( ( item: ListObject, index : number ) => {
            return(
              <ListItem task={item.task} key={index} />
            )
        })
      }
    </div>
  )
}

export default List;
