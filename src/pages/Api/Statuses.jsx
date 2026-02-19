import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const Statuses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setApiData({
        endpoint: "API Headers",
        method: "All Requests",
      })
    );
  }, [dispatch]);

  return (
     <div className="api-container">
   


      <div className="api-section">
        <h2>Описание статусов в системе</h2>
        <br />
        <table className="api-table">
          <thead>
            <tr>
              <th>Значение</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Approved</code></td>
              <td>Выполнен. Финальный.</td>
            </tr>       
            <tr>
              <td><code>Canceled</code></td>
              <td>Отменен. Условно финальный, через апелляцию может стать выполненным</td>
            </tr>     
            <tr>
              <td><code>Pending</code></td>
              <td>Ожидание</td>
            </tr>   
            <tr>
              <td><code>Confirmed</code></td>
              <td>Относится к выплатам (в этом статусе выплата на исполнении, отменять и каскадировать дальше нельзя)</td>
            </tr>  
            <tr>
              <td><code>Appeal</code></td>
              <td>Открыта апелляция на ордер</td>
            </tr>  

           
    
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default Statuses;
