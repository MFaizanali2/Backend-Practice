import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReq } from '../api/axios'
import { addTask, getAllTask } from '../store/features/TaskReducer'

const TaskListing = () => {
  const dispatch = useDispatch()
  const getAllTask = useSelector((state)=>state?.tasks)
  console.log(getAllTask)
  const getAllTasks = async()=>{
    try{
      const response = await getReq('/tasks') 
      const data = response?.data?.data;
      dispatch(getAllTask(data))
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllTasks()
  },[])


  return (
    <div>
        <div>
          {getAllTask?.tasks.length === 0 ? "data not found" :
          <table>
            {
              getAllTask.tasks.map((item)=>{
                return(
                  <tr>
                    <td>{item?.id}</td>
                    <td>{item?.title}</td>
                    <td>{item?.due_date}</td>
                  </tr>
                )
              })
            }
          </table>
          }
        </div>
        
    </div>
  )
}

export default TaskListing
