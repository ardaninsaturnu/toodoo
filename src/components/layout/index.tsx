import {ReactNode} from "react";
import Header from "./Header";

type PropTypes = {
  children?: ReactNode;
}

const Layout = ( { children } : PropTypes ) => {
  return(
    <div className="container">
      <Header/>
      { children }
    </div>
  )
}

export default Layout;
