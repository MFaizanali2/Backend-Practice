import React from 'react'
import { routes } from '../routes/index'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        {
          routes.map((item, index)=>{
            return <Route key={index} path={item?.path} element={item?.element}/>
          })

          // routes.map(({path, element}, index)=>{
          //   <Route key={index} path={path} element={element}/>
          // })
        }
      </Routes>
    </div>
  )
}

export default App