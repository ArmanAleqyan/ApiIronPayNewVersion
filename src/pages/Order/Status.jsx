import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const codeExamples = {
    Python: `import requests
  
  url = "/api/status_for_order_id"
  headers = {
      "Authorization": "Bearer your-access-token",  # OR
      "API-Key": "your-api-key",
      "Merchant-ID": "your-merchant-id"
  }
  data = {
      "internal_order_id": 670057,
      "external_order_id": "1d63-8ff-11f-a091-005056",
      "type": "withdraw"
  }
  
  response = requests.post(url, headers=headers, data=data)
  print(response.text)`,
    
    Shell: `curl --location '/api/status_for_order_id' \\
  --header 'Authorization: Bearer your-access-token' \\
  # OR
  --header 'API-Key: your-api-key' \\
  --header 'Merchant-ID: your-merchant-id' \\
  --form 'internal_order_id=670057' \\
  --form 'external_order_id=1d63-8ff-11f-a091-005056' \\
  --form 'type=withdraw'`,
    
    Node: `const axios = require("axios");
  
  const url = "/api/status_for_order_id";
  const headers = {
    "Authorization": "Bearer your-access-token", // OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
  };
  const data = {
    internal_order_id: 670057,
    external_order_id: "1d63-8ff-11f-a091-005056",
    type: "withdraw"
  };
  
  axios.post(url, data, { headers })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,
    
    PHP: `<?php
  
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "/api/status_for_order_id");
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Authorization: Bearer your-access-token', // OR
      'API-Key: your-api-key',
      'Merchant-ID: your-merchant-id'
  ]);
  curl_setopt($ch, CURLOPT_POSTFIELDS, [
      'internal_order_id' => 670057,
      'external_order_id' => '1d63-8ff-11f-a091-005056',
      'type' => 'withdraw'
  ]);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  
  $response = curl_exec($ch);
  curl_close($ch);
  
  echo $response;`,
    
    Ruby: `require 'net/http'
  require 'uri'
  
  url = URI.parse("/api/status_for_order_id")
  request = Net::HTTP::Post.new(url)
  request["Authorization"] = "Bearer your-access-token" # OR
  request["API-Key"] = "your-api-key"
  request["Merchant-ID"] = "your-merchant-id"
  request.set_form_data(
    "internal_order_id" => 670057,
    "external_order_id" => "1d63-8ff-11f-a091-005056",
    "type" => "withdraw"
  )
  
  response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
    http.request(request)
  end
  
  puts response.body`
  };

const StatusForOrderId = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/status_for_order_id",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Получение статуса по заявке (Status for Order ID)</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/status_for_order_id</span>
      </div>

      <p className="api-description">
        Метод позволяет получить статус по заявке на ввод/вывод.
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
        <h2>Request Body</h2>
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
              <td>integer</td>
              <td>Наш внутренний ID заявки.</td>
            </tr>
            <tr>
              <td><code>external_order_id</code></td>
              <td>string</td>
              <td>Ваш внутренний ID заявки.</td>
            </tr>
            <tr>
              <td><code>type<span className="required">*</span></code></td>
              <td>string</td>
              <td>Тип заявки (payment или withdraw).</td>
            </tr>
          </tbody>
        </table>
      </div>

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
              <td><code>internal_order_id</code></td>
              <td>integer</td>
              <td>ID заявки.</td>
            </tr>
            <tr>
              <td><code>status_order</code></td>
              <td>string</td>
              <td>Статус заявки.</td>
            </tr>
      
      
            <tr>
              <td><code>pay_method</code></td>
              <td>integer</td>
              <td>ID способа оплаты.</td>
            </tr>
            <tr>
              <td><code>local_amount</code></td>
              <td>number</td>
              <td>Ожидаемая сумма.</td>
            </tr>
        
            <tr>
              <td><code>short_nameclient</code></td>
              <td>string</td>
              <td>Имя клиента.</td>
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
    "data": {
        "internal_order_id": 1061094,
        "is_appeal": 0,
        "type": "payment",
        "status_order": "Canceled",
        "curr": "RUB",
        "local_amount": "1",
        "time_unix": 1739444081
    }
}
            `}
          </pre>
        </div>
    
        <div className="response-block error">
          <h3>Не найден ордер (404 Not Found)</h3>
          <pre className="code-block">
            {`
{
"status": false,
"message": "Order not found."
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
  "message": {
      "internal_order_id": [
          "The internal order id field is required when external order id is not present."
      ],
      "external_order_id": [
          "The external order id field is required when internal order id is not present."
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

export default StatusForOrderId;
