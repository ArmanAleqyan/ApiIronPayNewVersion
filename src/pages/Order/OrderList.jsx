import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const codeExamples = {
    Python: `import requests
  
  url = "/api/order_list"
  headers = {
      "Authorization": "Bearer your-access-token"  # OR
      "API-Key": "your-api-key",
      "Merchant-ID": "your-merchant-id"
  }
  data = {
      "start_unix": "1725438860",
      "end_unix": "1728203660",
      "type": "payment"
  }
  
  response = requests.post(url, headers=headers, data=data)
  print(response.text)`,
  
    Shell: `curl --location '/api/order_list' \\
  --header 'Authorization: Bearer your-access-token' \\ # OR
  --header 'API-Key: your-api-key' \\
  --header 'Merchant-ID: your-merchant-id' \\
  --form 'start_unix="1725438860"' \\
  --form 'end_unix="1728203660"' \\
  --form 'type="payment"'`,
  
    PHP: `<?php
  
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "/api/order_list");
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Authorization: Bearer your-access-token' // OR
      'API-Key: your-api-key',
      'Merchant-ID: your-merchant-id'
  ]);
  curl_setopt($ch, CURLOPT_POSTFIELDS, [
      'start_unix' => "1725438860",
      'end_unix' => "1728203660",
      'type' => "payment"
  ]);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  
  $response = curl_exec($ch);
  curl_close($ch);
  
  echo $response;`,
  
    Node: `const axios = require("axios");
  
  const url = "/api/order_list";
  const headers = {
    "Authorization": "Bearer your-access-token"  // OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
  };
  const data = {
    start_unix: "1725438860",
    end_unix: "1728203660",
    type: "payment"
  };
  
  axios.post(url, data, { headers })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`,
  
    Ruby: `require 'net/http'
  require 'uri'
  require 'json'
  
  url = URI.parse("/api/order_list")
  request = Net::HTTP::Post.new(url)
  request["Authorization"] = "Bearer your-access-token" 
  # OR
  request["API-Key"] = "your-api-key"
  request["Merchant-ID"] = "your-merchant-id"
  
  form_data = {
    "start_unix" => "1725438860",
    "end_unix" => "1728203660",
    "type" => "payment"
  }
  
  request.set_form_data(form_data)
  
  response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
    http.request(request)
  end
  
  puts response.body`
  };
const OrderList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/order_list",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Получение списка ордеров (Order List)</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/order_list</span>
      </div>

      <p className="api-description">
        Метод позволяет получить список ордеров за указанный временной интервал с возможностью фильтрации по типу ордера.
        <br />
        <br />
        Указанный временный интервал не может быть больше  месяца.
 
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
              <td><code>start_unix</code></td>
              <td>integer</td>
              <td>Unix timestamp начала временного интервала.</td>
            </tr>
            <tr>
              <td><code>end_unix</code></td>
              <td>integer</td>
              <td>Unix timestamp окончания временного интервала.</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>string</td>
              <td>Тип ордера (payment или withdraw).</td>
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
              <td><code>time_unix</code></td>
              <td>integer</td>
              <td>Время создания или потверждения в формате UNIX.</td>
            </tr>
            <tr>
              <td><code>internal_order_id</code></td>
              <td>integer</td>
              <td>Наш ID созданного ордера.</td>
            </tr>
            <tr>
              <td><code>external_order_id</code></td>
              <td>string</td>
              <td>Ваш внутренный ID ордера.</td>
            </tr>
            <tr>
              <td><code>status_name</code></td>
              <td>string</td>
              <td>Статус заявки.</td>
            </tr>
            <tr>
              <td><code>payment_type_id</code></td>
              <td>integer</td>
              <td>ID способа оплаты.</td>
            </tr>
            <tr>
              <td><code>local_amount</code></td>
              <td>number</td>
              <td>Cумма ордера.</td>
            </tr>
            <tr>
              <td><code>comment</code></td>
              <td>string</td>
              <td>Комментарий к ордеру.</td>
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
    "data": [
        {
            "internal_order_id": 1024570,
            "time_unix": 1739194265,
            "status_name": "Canceled",
            "external_order_id": "1213",
            "status_id": 5,
            "local_amount": "1",
            "payment_type_id": 3,
            "comment": null,
        },
        {
            "internal_order_id": 1024571,
            "time_unix": 1739194871,
            "status_name": "Confirmed",
            "external_order_id": "3234",
            "status_id": 3,
            "local_amount": "1",
            "payment_type_id": 3,
            "comment": null,
        }
     ]
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
        "start_unix": [
            "The start unix field is required."
        ],
        "end_unix": [
            "The end unix field is required."
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

export default OrderList;
