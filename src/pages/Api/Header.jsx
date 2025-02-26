import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const HeaderInfo = () => {
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
      <h1 className="api-title">Информация о заголовках (Headers)</h1>

      <p className="api-description">
        Все запросы отправляются в формате <code>multipart/form-data</code>.
        Аутентификация запроса может быть выполнена двумя способами:
      </p>

      <div className="api-section">
        <h2>Варианты аутентификации</h2>
        <br />
        <ol>
          <li>
            Использование <code>Authorization</code> заголовка с Bearer Token.
            <pre className="code-block">
              {`Authorization: Bearer your-access-token`}
            </pre>
          </li>
          <br />
          <li>
            Использование комбинации <code>API-Key</code> и{" "}
            <code>Merchant-ID</code>.
            <pre className="code-block">
              {`API-Key: your-api-key
Merchant-ID: your-merchant-id`}
            </pre>
          </li>
        </ol>
      </div>

      <div className="api-section">
        <h2>Структура заголовков запроса</h2>
        <br />
        <table className="api-table">
          <thead>
            <tr>
              <th>Заголовок</th>
              <th>Тип</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>Content-Type</code>
              </td>
              <td>string</td>
              <td>
                Должен быть установлен в <code>multipart/form-data</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>Authorization</code>
              </td>
              <td>string</td>
              <td>Bearer Token (если используется OAuth 2.0).</td>
            </tr>
            <tr>
              <td>
                <code>API-Key</code>
              </td>
              <td>string</td>
              <td>API-ключ для альтернативной аутентификации.</td>
            </tr>
            <tr>
              <td>
                <code>Merchant-ID</code>
              </td>
              <td>integer</td>
              <td>ID мерчанта, используемый совместно с API-Key.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HeaderInfo;
