import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes'

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map((item, index)=>{
          return (<Route key={index} path={item?.path} element={item?.element}/>)
        })}

        {/* {routes.map(({path, element}, index)=>{
          <Route key={index} path={path} element={element}/>
        })} */}
      </Routes>
    </div>
  )
}

export default App