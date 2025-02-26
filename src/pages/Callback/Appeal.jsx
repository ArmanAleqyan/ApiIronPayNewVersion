import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const AppealCallback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      endpoint: "appeal_callback_url",
      method: "POST",
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Документация по Callback для Обращений</h1>
      
      <div className="api-method-container">
        <span className="api-method get">GET</span>
        <span className="api-endpoint">/appeal_callback_url</span>
      </div>

      <p className="api-description">
        Callback отправляетса при изменении суммы заказа или статуса обращения.
        Запрос отправляется на <code>appeal_callback_url</code> пользователя в формате GET-запроса
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
            Проверить <code>internal_order_id</code> – это ID заказа в системе.
          </li>
          <li>
            Определить <code>is_appeal</code> – является ли запрос обращением.
          </li>
          <li>
            Проверить <code>amount</code> и, если изменилось, получить <code>new_amount</code>.
          </li>
          <li>
            Проверить <code>status</code> заказа.
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
          Подпись (sign) создается путем объединения значений параметров, сортировки,
          добавления API-ключа и хеширования через SHA1. Получатель запроса должен
          воспроизвести этот процесс и сверить результат.
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
              <td><code>is_appeal</code></td>
              <td>integer</td>
              <td>Флаг обращения (0 или 1).</td>
            </tr>
            <tr>
              <td><code>unix_time</code></td>
              <td>integer</td>
              <td>Временная метка UNIX.</td>
            </tr>
            <tr>
              <td><code>amount</code></td>
              <td>number</td>
              <td>Сумма заказа.</td>
            </tr>
            <tr>
              <td><code>new_amount</code></td>
              <td>number</td>
              <td>Новая сумма заказа (если изменилась).</td>
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
              <td><code>created_at</code></td>
              <td>string</td>
              <td>Дата создания заказа.</td>
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

export default AppealCallback;