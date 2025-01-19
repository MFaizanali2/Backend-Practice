import React from "react";
import { Routes, Route } from "react-router-dom";
import { router } from "./router";


const App = () => {
  return (
        <Routes>
          {router.map((item,index)=>{
            return (<Route key={index} path={item?.path} element={item?.Element}/>)
          })}
        </Routes>
  );
};

export default App;
