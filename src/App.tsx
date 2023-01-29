import React from 'react';
import Layout from "./components/layout";

function App() {
  console.log( process.env.NODE_ENV, process.env.REACT_APP_API_URL )

  return (
   <>
    <Layout/>
   </>
  );
}

export default App;
