// {"status":true,"hold_amounts":{"sbp":[1,2]}}
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const codeExamples = {
  Python: `import requests

url = "/api/hold_amounts"
headers = {
    "Authorization": "Bearer your-access-token", # OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
}

response = requests.post(url, headers=headers)
print(response.text)`,

  Shell: `curl --location '/api/hold_amounts' \\
--header 'Authorization: Bearer your-access-token' \ # OR
--header 'API-Key: your-api-key' \\
--header 'Merchant-ID: your-merchant-id'`,

  PHP: `<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "/api/hold_amounts");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer your-access-token', // OR
    'API-Key: your-api-key',
    'Merchant-ID: your-merchant-id'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;`,

  Node: `const axios = require("axios");

const url = "/api/hold_amounts";
const headers = {
  "Authorization": "Bearer your-access-token", // OR
  "API-Key": "your-api-key",
  "Merchant-ID": "your-merchant-id"
};

axios.post(url, {}, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,

  Ruby: `require 'net/http'
require 'uri'
require 'json'

url = URI.parse("/api/hold_amounts")
request = Net::HTTP::Post.new(url)
request["Authorization"] = "Bearer your-access-token" # OR
request["API-Key"] = "your-api-key"
request["Merchant-ID"] = "your-merchant-id"

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`
};

const HoldAmounts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/hold_amounts",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Получение занятых сумм (Hold Amounts)</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/hold_amounts</span>
      </div>

      <p className="api-description">
        Метод позволяет получить список занятых сумм для каждого типа платежей.
        <br />
        <br />
        Доступные методы аутентификации:
      </p>
      <ol>
        <li><a href="login"> Через <code>Authorization: Bearer token</code> (OAuth 2.0)</a></li>
        <br />
        <li><a href="api-key">Через <code>API-Key</code> и <code>Merchant-ID</code> в заголовках</a></li>
      </ol>

      <div className="api-section">
        <h2>Response Body</h2>
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
              <td><code>status</code></td>
              <td>boolean</td>
              <td>Статус запроса.</td>
            </tr>
            <tr>
              <td><code>hold_amounts</code></td>
              <td>object</td>
              <td>Список занятых сумм по каждому типу платежа.</td>
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
    "status": true,
    "hold_amounts": {
        "sbp": [
            1,
            2
        ]
    }
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
    </div>
  );
};

export default HoldAmounts;
