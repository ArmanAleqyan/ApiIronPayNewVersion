import "../../styles/documentation.css";
import RequestBox from "../../components/RequestBox";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import { useEffect } from "react";

const codeExamples = {
  Python: `import requests

url = "/api/cancel"
headers = {
    "Authorization": "Bearer your-access-token"  # OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
}
data = {
    "internal_order_id": 243543,
    "external_order_id": "1234dsfewr325"
}

response = requests.post(url, headers=headers, data=data)
print(response.text)`,
  
  Shell: `curl --location '/api/cancel' \\
--header 'Authorization: Bearer your-access-token' \\
# OR
--header 'API-Key: your-api-key' \\
--header 'Merchant-ID: your-merchant-id' \\
--form 'internal_order_id=243543' \\
--form 'external_order_id=1234dsfewr325'`,
  
  Node: `const axios = require("axios");

const url = "/api/cancel";
const headers = {
  "Authorization": "Bearer your-access-token", // OR
  "API-Key": "your-api-key",
  "Merchant-ID": "your-merchant-id"
};
const data = {
  internal_order_id: 243543,
    external_order_id: 1234dsfewr325,
};

axios.post(url, data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,
  
  Ruby: `require 'net/http'
require 'uri'

url = URI("/api/cancel")
request = Net::HTTP::Post.new(url)
request["Authorization"] = "Bearer your-access-token" # OR
request["API-Key"] = "your-api-key"
request["Merchant-ID"] = "your-merchant-id"
request.set_form_data({
  "internal_order_id" => 243543,
  "external_order_id" => "1234dsfewr325"
})

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`,
  
  PHP: `<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "/api/cancel");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer your-access-token', // OR
    'API-Key: your-api-key',
    'Merchant-ID: your-merchant-id'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'internal_order_id' => 243543,
    'external_order_id' => '1234dsfewr325'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;`
};

const Cancel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/cancel",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Отмена заявки</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/cancel</span>
      </div>

      <p className="api-description">
        Этот метод отменяет заявку которая находитса в статусе Pending. 
        <br />
        После отмены вы получите  КБ о  успешной отмене
        <br />
        <br />

        Доступные методы аутентификации:
      </p>
      <ol>
        <li><a href="login"> Через <code>Authorization: Bearer token</code> (OAuth 2.0)</a></li>
        <br />
        <li><a href="api-key">Через <code>API-Key</code> и <code>Merchant-ID</code> в заголовках</a></li>
      </ol>

     <br />

      <br />


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
              <td><code>internal_order_id<span className="required"></span></code></td>
              <td>integer</td>
              <td>ID  в нашей системе которую получили при создание заявки.</td>
            </tr>
            <tr>
              <td><code>external_order_id<span className="required"></span></code></td>
              <td>string</td>
              <td>ID  в вашей системе которую отправили при создание заявки.</td>
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
              <td><code>message</code></td>
              <td>string</td>
              <td>Order canceled successfully.</td>
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
"message": "Order canceled successfully"
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
        "The selected internal order id is invalid."
    ]
}
OR
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
            `}
          </pre>
        </div>
        <div className="response-block error">
          <h3>Необрабатываемый контент (422 Unprocessable Content)</h3>
          <pre className="code-block">
            {`
{
    "status": false,
    "message": "Order is Canceled"
}
OR
{
    "status": false,
    "message": "Order is Confirmed"
}
            `}
          </pre>
        </div>

        <div className="response-block error">
          <h3>Не найден  (404 Not found)</h3>
          <pre className="code-block">
            {`
{
    "status": false,
    "message": "Order not found"
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

export default Cancel;
