import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import "../../styles/documentation.css";

const codeExamples = {
    Python: `import requests
  
  url = "/api/add_appeal"
  headers = {
      "Authorization": "Bearer your-access-token" # OR
      "API-Key": "your-api-key",
      "Merchant-ID": "your-merchant-id"
  }
  data = {
      "internal_order_id": "942672",
      "comment": "Комментарий к обращению"
  }
  files = {
      "invoice": open("/C:/Users/Gaming computers/Downloads/1730743638888.jpg", "rb")
  }
  
  response = requests.post(url, headers=headers, data=data, files=files)
  print(response.text)`,
  
    Shell: `curl --location '/api/add_appeal' \\
  --header 'Authorization: Bearer your-access-token' \\
   # OR
  --header 'API-Key: your-api-key' \\
  --header 'Merchant-ID: your-merchant-id' \\
  --form 'internal_order_id="942672"' \\
  --form 'invoice[]=@"/C:/Users/Gaming computers/Downloads/1730743638888.jpg"'`,
  
    PHP: `<?php
  
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "/api/add_appeal");
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Authorization: Bearer your-access-token' // OR
      'API-Key: your-api-key',
      'Merchant-ID: your-merchant-id'
  ]);
  curl_setopt($ch, CURLOPT_POSTFIELDS, [
      'internal_order_id' => "942672",
      'invoice[]' => new CURLFile('/C:/Users/Gaming computers/Downloads/1730743638888.jpg')
  ]);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  
  $response = curl_exec($ch);
  curl_close($ch);
  
  echo $response;`,
  
    Ruby: `require 'net/http'
  require 'uri'
  require 'json'
  require 'mime/types'
  
  url = URI.parse("/api/add_appeal")
  request = Net::HTTP::Post.new(url)
  request["Authorization"] = "Bearer your-access-token" # OR
  request["API-Key"] = "your-api-key"
  request["Merchant-ID"] = "your-merchant-id"
  
  form_data = [["internal_order_id", "942672"],
               ["invoice[]", File.open("/C:/Users/Gaming computers/Downloads/1730743638888.jpg")]]
  
  request.set_form form_data, 'multipart/form-data'
  
  response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
    http.request(request)
  end
  
  puts response.body`,
  
    Node: `const axios = require("axios");
  const FormData = require("form-data");
  const fs = require("fs");
  
  const url = "/api/add_appeal";
  const headers = {
    "Authorization": "Bearer your-access-token" // OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
  };
  
  const formData = new FormData();
  formData.append("internal_order_id", "942672");
  formData.append("invoice", fs.createReadStream("/C:/Users/Gaming computers/Downloads/1730743638888.jpg"));
  
  axios.post(url, formData, { headers: { ...headers, ...formData.getHeaders() } })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));`
  };
const Appeal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/add_appeal",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Добавление апелляции (Add Appeal)</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/add_appeal</span>
      </div>

      <p className="api-description">
        Метод позволяет добавить апелляцию к заказу с комментарием и файлами счетов.
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
              <td><code>internal_order_id<span className="required">*</span></code></td>
              <td>integer</td>
              <td>Наш внутренний ID заказа.</td>
            </tr>
            <tr>
              <td><code>comment</code></td>
              <td>string</td>
              <td>Комментарий к апелляции.</td>
            </tr>
            <tr>
              <td><code>invoice<span className="required">*</span></code></td>
              <td>array (binary)</td>
              <td>Файлы счетов.</td>
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
              <td>ID заказа.</td>
            </tr>
            <tr>
              <td><code>status_order</code></td>
              <td>string</td>
              <td>Статус заказа.</td>
            </tr>
            <tr>
              <td><code>is_appeal</code></td>
              <td>boolean</td>
              <td>Флаг апелляции (true/false).</td>
            </tr>
            <tr>
              <td><code>message</code></td>
              <td>string</td>
              <td>Сообщение ответа.</td>
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
    "internal_order_id": 942672,
    "status_order": "Approved",
    "is_appeal": false,
    "message": "Order 942672 appeal"
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
            "The internal order id field is required."
        ],
        "invoice": [
            "The invoice field is required."
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

export default Appeal;
