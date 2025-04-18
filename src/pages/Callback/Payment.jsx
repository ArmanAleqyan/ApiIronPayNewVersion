import "../../styles/documentation.css";
import RequestBox from "../../components/RequestBox";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import { useEffect } from "react";


const CallbackPayment = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setApiData({
        endpoint: "callback_url",
        method: "GET",
      }));
    }, [dispatch]);
  
    return (
      <div className="api-container">
        <h1 className="api-title">Документация по Callback</h1>
        
        <div className="api-method-container">
          <span className="api-method get">GET</span>
          <span className="api-endpoint">/callback_url</span>
        </div>
  
        <p className="api-description">
          Callback отправляетса автоматически, когда происходит изменение статуса заказа.
          Запрос отправляется на <code>url(Который предоставляет магазин)</code> магазина в формате GET-запроса
          с параметрами, включающими информацию о заказе, статусе и времени операции.
        </p>
  
        <div className="api-section">
          <h2>Как расшифровывать callback?</h2>
          <br />
          <p>
            Получатель callback-запроса должен:
          </p>
          <ol>
            <li>
              Проверить <code>internal_order_id</code> – это внутренний ID нашего заказа в вашей системе.
            </li>
            <li>
              Сопоставить <code>external_order_id</code> – это ID заказа, связанный с вашим сервисом.
            </li>
            <li>
              Определить текущий <code>status</code> заказа (например, "Approved" или "Canceled").
            </li>
            <li>
              Проверить временную метку <code>unix_time</code> и дату <code>created_at</code> для точности.
            </li>
            <li>
              Сравнить подпись <code>sign</code> с самостоятельно вычисленной по алгоритму SHA1.
            </li>
          </ol>
        </div>
  
        <div className="api-section">
          <h2>Как верифицировать подпись?</h2>
          <br />
          <p>
            Подпись (sign) создается путем объединения всех значений параметров в строку,
            сортировки по ключу, добавления API-ключа и хеширования через SHA1. 
            Получатель запроса должен воспроизвести этот процесс и сверить полученную подпись.
          </p>
        </div>
  
        <div className="api-section">
          <h2>Ожидаемые параметры callback</h2>
          <br />
          <table className="api-table">
            <thead>
              <tr>
                <th>Параметр</th>
                <th>Тип</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>internal_order_id</code></td>
                <td>string</td>
                <td>Внутренний ID заказа.</td>
              </tr>
              <tr>
                <td><code>external_order_id</code></td>
                <td>string</td>
                <td>Внешний ID заказа.</td>
              </tr>
              <tr>
                <td><code>status</code></td>
                <td>string</td>
                <td>Текущий статус заказа.</td>
              </tr>
              <tr>
                <td><code>unix_time</code></td>
                <td>integer</td>
                <td>Временная метка UNIX.</td>
              </tr>
              <tr>
                <td><code>created_at</code></td>
                <td>string</td>
                <td>Дата и время создания заказа.</td>
              </tr>
              <tr>
                <td><code>sign</code></td>
                <td>string</td>
                <td>Хеш SHA1 для проверки целостности запроса.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default CallbackPayment;
