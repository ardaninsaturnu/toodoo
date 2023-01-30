import Layout from "../components/layout";
import AddTodoForm from "../components/AddToDoForm";
import List from "../components/List";

const MainPage = () => {
  return(
    <Layout>
      <AddTodoForm/>
      <List/>
    </Layout>
  )
}

export default MainPage;
