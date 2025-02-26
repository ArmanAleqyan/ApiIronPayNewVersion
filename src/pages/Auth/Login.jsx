import "../../styles/documentation.css";
import RequestBox from "../../components/RequestBox";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import { useEffect } from "react";

const codeExamples = {
  Python: `import requests

url = "/api/login"
data = { "uuid": "123e4567-e89b-12d3-a456-426614174000" }

response = requests.post(url, data=data)

print(response.text)`,
  
  Shell: `curl --location '/api/login' \\
--form 'uuid="123e4567-e89b-12d3-a456-426614174000"'`,
  
  Node: `const axios = require("axios");

const url = "/api/login";
const data = new FormData();
data.append("uuid", "123e4567-e89b-12d3-a456-426614174000");

axios.post(url, data)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,
  
  Ruby: `require 'net/http'
require 'uri'

url = URI("/api/login")
request = Net::HTTP::Post.new(url)
form_data = [['uuid', '123e4567-e89b-12d3-a456-426614174000']]
request.set_form form_data, 'multipart/form-data'

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`,
  
  PHP: `<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "/api/login");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ['uuid' => '123e4567-e89b-12d3-a456-426614174000']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;`
};

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/login",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Вход пользователя (Login)</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/login</span>
      </div>

      <p className="api-description">
        Данный метод предназначен для авторизации пользователей.  
        Запрос требует передачи уникального идентификатора пользователя (<code>UUID</code>) в теле запроса.
      </p>

      <div className="api-section">
        <h2>Request Body</h2>
        <br />
        <p>В запросе должен быть передан следующий параметр:</p>
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
              <td><code>uuid</code></td>
              <td>string</td>
              <td>Уникальный идентификатор магазина </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="api-section">
        <h2>Response Body</h2>
        <br />
        <p>Описание полей успешного ответа:</p>
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
              <td><code>access_token</code></td>
              <td>string</td>
              <td> Passport-токен, используемый для аутентификации и авторизации запросов. 
    Является временным ключом доступа, который необходимо передавать в заголовке `Authorization` 
    в формате <code>Bearer access_token</code>. Срок действия токена 1 час и требует периодического обновления через 
    <code> refresh_token</code>. Должен храниться в безопасном месте и не передаваться сторонним лицам.</td>
            </tr>
            <tr>
            <td><code>refresh_token</code></td>
            <td>string</td>
            <td>
              Токен обновления, используемый для запроса нового <code>access_token</code> после его истечения. 
              В отличие от <code>access_token</code>, имеет более длительный срок действия и не предназначен для прямой аутентификации запросов. 
              Используется в <code>/api/refresh_token</code> для получения новой пары токенов (access_token + refresh_token).
              <br></br>
              <strong>Важно:</strong> <code>refresh_token</code> должен храниться в защищенном хранилище (например, Secure Storage или Encrypted Local Storage) 
              и не должен передаваться в открытом виде через URL или ненадежные каналы связи.
            </td>
          </tr>
          <tr>
          <td><code>expires_at</code></td>
          <td>string (ISO 8601)</td>
          <td>
            Временная метка, указывающая дату и время истечения <code>access_token</code>. 
            Значение передается в формате ISO 8601 (например, <code>2025-02-12T12:34:56Z</code>), что позволяет 
            клиенту заранее запрашивать обновление токена перед его истечением. 
            <br></br>
            <strong>Важно:</strong> Клиенты должны проверять <code>expires_at</code> перед отправкой запросов к API 
            и инициировать обновление токена, чтобы избежать сбоев в работе приложения.
          </td>
        </tr>
          </tbody>
        </table>
      </div>

      <div className="api-section">
        <h2>Ответы API</h2>

        <div className="response-block success">
          <h3>Успешный ответ (200 OK)</h3>
          <pre className="code-block">
            {`
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "8b67542e2a1236c567e6b7c8f",
  "expires_at": "2025-02-11 18:48:04"
}
            `}
          </pre>
        </div>

        <div className="response-block error">
          <h3>Ошибка валидации (400 Bad Request)</h3>
          <pre className="code-block">
            {`
{
  "status": false,
  "message": {}
}
            `}
          </pre>
        </div>

        <div className="response-block error">
          <h3>Неавторизованный доступ (401 Unauthorized)</h3>
          <pre className="code-block">
            {`
{
  "status": false,
  "message": "Unauthorized user"
}
            `}
          </pre>
        </div>
      </div>

      <div className="api-note">
        <h3>Дополнительная информация</h3>
        <p>
          Данный метод требует передачи корректного <code>UUID</code>.  
          Если UUID отсутствует или недействителен, запрос будет отклонен.
        </p>
      </div>

  
    </div>
  );
};

export default Login;