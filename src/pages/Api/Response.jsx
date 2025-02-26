import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const ResponseInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      endpoint: "API Responses",
      method: "All Responses",
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Информация о Ответах API (Responses)</h1>
      
      <p className="api-description">
        Все ответы от API предоставляются исключительно в формате <code>JSON</code>.
        В каждом ответе всегда присутствует поле <code>status</code>, определяющее
        успешность запроса.
      </p>

      <div className="api-section">
        <h2>Структура ответа</h2>
        <br />
        <p>Каждый ответ API содержит ключ <code>status</code>:</p>
        <ul>
          <li>
            Если <code>status: true</code> – запрос успешно выполнен, ответ содержит ожидаемые данные.
          </li>
          <li>
            Если <code>status: false</code> – произошла ошибка, ответ содержит сообщение об ошибке.
          </li>
        </ul>
      </div>

      <div className="api-section">
        <h2>Примеры ответов</h2>
        <div className="response-block success">
          <h3>Успешный ответ (200 OK)</h3>
          <pre className="code-block">
            {`
{
  "status": true,
  "data": {
    "message": "Запрос выполнен успешно",
    "data": { /* ваши данные */ }
  }
}
            `}
          </pre>
        </div>

        <div className="response-block error">
          <h3>Ошибка (400 Bad Request)</h3>
          <pre className="code-block">
            {`
{
  "status": false,
  "message": "Некорректные параметры запроса"
}
            `}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ResponseInfo;