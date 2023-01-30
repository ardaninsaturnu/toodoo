import {ReactNode} from "react";
import Header from "./Header";
import '../../style/components/layout.scss';

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
