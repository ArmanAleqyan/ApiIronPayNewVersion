import "../../styles/documentation.css";
import RequestBox from "../../components/RequestBox";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import { useEffect } from "react";



const Oauth1 = () => {
  const dispatch = useDispatch();

 

  return (
    <div className="api-container">
      <h1 className="api-title">OAuth 1.0 Аутентификация</h1>
      
  

      <p className="api-description">
        Это  метод аутентификацию с использованием <code>API-Key</code> и <code>Merchant-ID</code>. 
        В отличие от OAuth 2.0, этот метод не требует хранения <code>access_token</code>, <code>refresh_token</code> и регулярного обновления.

      </p>

      <div className="api-section">
        <h2>Request Headers</h2>
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
              <td><code>API-Key</code></td>
              <td>string</td>
              <td>Уникальный ключ API, предоставленный при регистрации.</td>
            </tr>
            <tr>
              <td><code>Merchant-ID</code></td>
              <td>string</td>
              <td>Идентификатор магазина, необходимый для аутентификации.</td>
            </tr>
          </tbody>
        </table>
      </div>

 

      <div className="api-note">
        <h3>Дополнительная информация</h3>
        <p>
          Убедитесь, что <code>API-Key</code> и <code>Merchant-ID</code> передаются в заголовках запроса.
        </p>
      </div>
    </div>
  );
};

export default Oauth1;
