import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const Callbacks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      endpoint: "callbacks",
      method: "POST",
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Документация по Callback</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/calbackUrl</span>
      </div>

      <p className="api-description">
        Callback отправляетса при изменении суммы заказа или статуса обращения.
        Запрос отправляется на <code>calbackUrl</code> пользователя в формате POST-запроса
        с параметрами, содержащими обновленную информацию о заказе.
      </p>

      <div className="api-section">
        <h2>Как расшифровывать callback?</h2>
        <br />
        <p>
          Получатель callback-запроса должен:
        </p>
        <ol>
          <li>
            Проверить <code>order_id</code> – это ID заказа в системе.
          </li>
          <li>
          Проверить соответствует ли <code>external_order_id</code> – вашему номеру заказа .
          </li>
          <li>
            Проверить <code>amount</code> заказа.
          </li>
          <li>
            Проверить <code>status</code> заказа.
          </li>
          <li>
            Проверить <code>message</code> .
          </li>
        
          <li>
            Сравнить подпись <code>sign</code> с вычисленной локально SHA1.
          </li>
        </ol>
      </div>

      <div className="api-section">
        <h2>Как верифицировать подпись?</h2>
        <br />
        <p>
         Для обеспечения безопасности и целостности данных при передаче формируется цифровая подпись параметров запроса. Подпись (sign) создаётся следующим образом:
        </p>
        <br />
        <p>
        Сначала собираются ключевые параметры запроса: идентификатор заказа, внешний идентификатор, статус, сумма и текущая временная метка в формате Unix. 
        Далее эти параметры сортируются в алфавитном порядке по ключам. После сортировки из значений параметров (без учёта самих ключей) 
        формируется строка, в которой все значения соединяются через символ <b>:</b> . К этой строке в конце добавляется токен API-провайдера (API-ключ), также через <b>:</b> .
        </p>
        <br />
        <p>
        На основе этой итоговой строки вычисляется хеш-функция по алгоритму SHA-1, результат которой и представляет собой значение подписи sign. Полученная подпись добавляется в список параметров запроса и передаётся вместе с остальными данными.
        </p>
        <br />
        <p>
        Такой подход позволяет получателю запроса на своей стороне повторно сформировать подпись по тем же правилам и убедиться в подлинности и неизменности переданных данных.
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
              <td><code>order_id</code></td>
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
              <td><code>amount</code></td>
              <td>string</td>
              <td>Сумма заказа.</td>
            </tr>
            <tr>
              <td><code>unix_time</code></td>
              <td>integer</td>
              <td>Временная метка UNIX.</td>
            </tr>
            <tr>
              <td><code>sign</code></td>
              <td>string</td>
              <td>Хеш SHA1 для проверки целостности запроса.</td>
            </tr>
            <tr>
              <td><code>message</code></td>
              <td>string</td>
              <td>Коментарий от iron-pay. </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Callbacks;