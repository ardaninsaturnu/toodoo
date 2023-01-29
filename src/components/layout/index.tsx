import AddTodoForm from "../addTodo";
import ListItem from "../ListItem";
import List from "../List";

const Layout = () => {
  return(
    <div className="container">
      <header>
        TODO app for Vodafone development case
      </header>
      <AddTodoForm/>
      <List/>
    </div>
  )
}

export default Layout;
