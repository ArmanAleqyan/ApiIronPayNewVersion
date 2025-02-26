import "../styles/documentation.css";
import RequestBox from "../components/RequestBox";
import { useDispatch } from "react-redux";
import { setApiData } from "../redux/apiSlice";
import { useEffect } from "react";

const codeExamples = {
    Python: `import requests
  
  url = "/api/balance"
  headers = {
      "Authorization": "Bearer your-access-token"  # OR
      "API-Key": "your-api-key",
      "Merchant-ID": "your-merchant-id"
  }
  
  response = requests.get(url, headers=headers)
  
  print(response.text)`,
    
    Shell: `curl --location '/api/balance' \\
  --header 'Authorization: Bearer your-access-token' \\
  # OR
  --header 'API-Key: your-api-key' \\
  --header 'Merchant-ID: your-merchant-id'`,
    
    Node: `const axios = require("axios");
  
  const url = "/api/balance";
  const headers = {
    "Authorization": "Bearer your-access-token", // OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
  };
  
  axios.get(url, { headers })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,
    
    Ruby: `require 'net/http'
  require 'uri'
  
  url = URI("/api/balance")
  request = Net::HTTP::Get.new(url)
  request["Authorization"] = "Bearer your-access-token" # OR
  request["API-Key"] = "your-api-key"
  request["Merchant-ID"] = "your-merchant-id"
  
  response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
    http.request(request)
  end
  
  puts response.body`,
    
    PHP: `<?php
  
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "/api/balance");
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Authorization: Bearer your-access-token', // OR
      'API-Key: your-api-key',
      'Merchant-ID: your-merchant-id'
  ]);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  
  $response = curl_exec($ch);
  curl_close($ch);
  
  echo $response;`
  };

const Balance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/balance",
      method: "GET"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Получение Баланса (Balance)</h1>
      
      <div className="api-method-container">
        <span className="api-method get">GET</span>
        <span className="api-endpoint">/api/balance</span>
      </div>

      <p className="api-description">
        Этот метод позволяет получить баланс магазина в RUB. 
        <br />
        <br />
        Доступные методы аутентификации:
      </p>
      <ol>
        <li><a href="/login">Через <code>Authorization: Bearer token</code> (OAuth 2.0)</a></li>
        <br />
        <li><a href="/api-key"> Через <code>API-Key</code> и <code>Merchant-ID</code> в заголовках</a></li>
      </ol>
      <br />

      <div className="api-section">
        <h2>Response Body        </h2>
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
              <td><code>balance</code></td>
              <td>number</td>
              <td>Текущий баланс магазина в RUB.</td>
            </tr>
            <tr>
              <td><code>out_hold_balance</code></td>
              <td>number</td>
              <td>Сумма ожидающих ордеров на выплату.</td>
            </tr>
            <tr>
              <td><code>out_available_balance</code></td>
              <td>number</td>
              <td>Оставшаяся сумма, доступная для создания ордеров на выплату.</td>
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
  "balance": "-150000",
  "out_hold_balance": "50000",
  "out_available_balance": "100000"
}
            `}
          </pre>
        </div>

        <div className="response-block error">
          <h3>Ошибка авторизации (401 Unauthorized)</h3>
          <pre className="code-block">
            {`
{
  "status": false,
  "message": "Unauthorized"
}
            `}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Balance;