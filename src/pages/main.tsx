import Layout from "../components/Layout";
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
