import "../../styles/documentation.css";
import RequestBox from "../../components/RequestBox";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import { useEffect } from "react";

const codeExamples = {
  Python: `import requests

url = "/api/payment"
headers = {
    "Authorization": "Bearer your-access-token"  # OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
}
data = {
    "payment_type_id": 3,
    "curr": "RUB",
    "local_amount": 1.00,
    "order_id": "3",
    "client_id": 1
}

response = requests.post(url, headers=headers, data=data)
print(response.text)`,
  
  Shell: `curl --location '/api/payment' \\
--header 'Authorization: Bearer your-access-token' \\
# OR
--header 'API-Key: your-api-key' \\
--header 'Merchant-ID: your-merchant-id' \\
--form 'payment_type_id=3' \\
--form 'curr=RUB' \\
--form 'local_amount=1.00' \\
--form 'order_id=3' \\
--form 'client_id=1'`,
  
  Node: `const axios = require("axios");

const url = "/api/payment";
const headers = {
  "Authorization": "Bearer your-access-token", // OR
  "API-Key": "your-api-key",
  "Merchant-ID": "your-merchant-id"
};
const data = {
  payment_type_id: 3,
  curr: "RUB",
  local_amount: 1.00,
  order_id: "3",
  client_id: 1
};

axios.post(url, data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,
  
  Ruby: `require 'net/http'
require 'uri'

url = URI("/api/payment")
request = Net::HTTP::Post.new(url)
request["Authorization"] = "Bearer your-access-token" # OR
request["API-Key"] = "your-api-key"
request["Merchant-ID"] = "your-merchant-id"
request.set_form_data({
  "payment_type_id" => 3,
  "curr" => "RUB",
  "local_amount" => 1.00,
  "order_id" => "3",
  "client_id" => 1
})

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`,
  
  PHP: `<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "/api/payment");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer your-access-token', // OR
    'API-Key: your-api-key',
    'Merchant-ID: your-merchant-id'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'payment_type_id' => 3,
    'curr' => 'RUB',
    'local_amount' => 1.00,
    'order_id' => '3',
    'client_id' => 1
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;`
};

const Payment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/payment",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Создание заявки на платеж (Payment)</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/payment</span>
      </div>

      <p className="api-description">
        Этот метод создает заявку на депозит и возвращает реквизиты для оплаты. 
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
      <h2> Способы оплат(payment_type_id)</h2>
      <br />
      <ol>
        <li>Карта</li>
        <br />
        <li>URL для перевода</li>
        <br />
        <li>СБП</li>
        <br />
        <li>Счёт</li>
        <br />
        <li>СБП (e-com)</li>
        <br />
        <li>Трансгран</li>
        <br />
        <li>Номер Договора</li>
      </ol>
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
              <td><code>payment_type_id<span className="required">*</span></code></td>
              <td>integer</td>
              <td>Способ оплаты который вам нужен для платежа.</td>
            </tr>
            <tr>
              <td><code>curr<span className="required">*</span></code></td>
              <td>string</td>
              <td>Валюта платежа.</td>
            </tr>
            <tr>
              <td><code>local_amount<span className="required">*</span></code></td>
              <td>number</td>
              <td>Сумма платежа.</td>
            </tr>
            <tr>
              <td><code>order_id<span className="required">*</span></code></td>
              <td>string</td>
              <td>Ваш внутренный ID ордера.</td>
            </tr>
            <tr>
              <td><code>client_id<span className="required">*</span></code></td>
              <td>string</td>
              <td>ID вашего клиента.</td>
            </tr>
            <tr>
              <td><code>callback_url<span className=""></span></code></td>
              <td>string|url</td>
              <td>Ссылка для отправки callback.</td>
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
              <td>Наш ID созданного ордера.</td>
            </tr>
            <tr>
              <td><code>status_order</code></td>
              <td>string</td>
              <td>Статус платежа.</td>
            </tr>
            <tr>
              <td><code>local_amount</code></td>
              <td>number</td>
              <td>Сумма платежа.</td>
            </tr>
            <tr>
              <td><code>bank_code</code></td>
              <td>number</td>
              <td>Код банка на который создался ордер.</td>
            </tr>
            <tr>
              <td><code>bank_name</code></td>
              <td>string</td>
              <td>Названия Банка получателя.</td>
            </tr>
            <tr>
              <td><code>unix_time</code></td>
              <td>number</td>
              <td>Время создания в формате UNIX.</td>
            </tr>
            <tr>
              <td><code>curr</code></td>
              <td>string</td>
              <td>Валюта в какой создан ордер.</td>
            </tr>
            <tr>
              <td><code>short_name</code></td>
              <td>string</td>
              <td>Имя получателя.</td>
            </tr>
            <tr>
              <td><code>sbp_number, <br />card_number,<br />url,<br />account_number</code></td>
              <td>string</td>
              <td>Реквизит получателя.</td>
            </tr>
            <tr>
              <td><code>rate</code></td>
              <td>string</td>
              <td>Курс USDT создания платежа.</td>
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
                    "internal_order_id": 1048390,
                    "status_order": "Pending",
                    "bank_id": 98,
                    "bank_code": "100000000078",
                    "unix_time": 1739310542,
                    "curr": "RUB",
                    "local_amount": "1",
                    "short_name": "Юрий И.",
                    "bank_name": "Ингосстрах Банк",
                    "sbp_number": "+72432423423",
                    "rate" : "83.24"
                }
            }
            `}
          </pre>
        </div>
        <div className="response-block error">
          <h3>Нет Доступа (422 Unprocessable Content)</h3>
          <pre className="code-block">
            {`
{
"status": false,
"message": "We are currently not accepting incoming payment requests. Your request has been rejected, please try again later."
}
OR
{
"status": false,
"message": "Request below limit. Your request has been rejected, please contact iron-pay to change limits."
}
OR
{
"status": false,
"message": "Request is above the limit. Your request has been rejected, please contact iron-pay to change the limits."
}
 OR
{
"status": false,
"message": "The requested payment method is currently disabled. Your request has been rejected, please contact iron-pay to connect."
}
OR
{
"status": false,
"message": "There are currently no payment details available. Your request has been rejected, please try again later."
}
            `}
          </pre>
        </div>
        <div className="response-block error">
          <h3>Заблокированный client_id (422 Unprocessable Content)</h3>
          <pre className="code-block">
            {`
{
"status": false,
"message": "Your request has been rejected, User is blocked for 3 hours, because there were several unsuccessful payments in a row."
}
OR
{
"status": false,
"message": "Your request has been rejected, User is blocked for 24 hours because there were several unsuccessful payments in a row."
}
OR
{
"status": false,
"message": "Your request has been rejected, User is blocked. Payment details cannot be issued because there have been several unsuccessful payments in a row."
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
        "payment_type_id": [
            "The payment type id field is required."
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

export default Payment;
