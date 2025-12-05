import "../../styles/documentation.css";
import RequestBox from "../../components/RequestBox";
import { useDispatch } from "react-redux";
import { setApiData } from "../../redux/apiSlice";
import { useEffect } from "react";

const codeExamples = {
  Python: `import requests

url = "/api/withdraw"
headers = {
    "Authorization": "Bearer your-access-token", # OR
    "API-Key": "your-api-key",
    "Merchant-ID": "your-merchant-id"
}
data = {
    "curr": "RUB",
    "end_time": "1739291615",
    "order_id": "049b5879-4740-4d34-9728-3b16c28e2b6a",
    "amount_usdt": 100.6,
    "local_amount": 950,
    "client_id": "CLT67890",
    "sbp_number": "+79230001122",
    "bank_code": "100000000111","
}

response = requests.post(url, headers=headers, data=data)
print(response.text)`,
  
  Shell: `curl --location '/api/withdraw' \\
--header 'Authorization: Bearer your-access-token' \\
# OR
--header 'API-Key: your-api-key' \\
--header 'Merchant-ID: your-merchant-id' \\
--form 'curr=RUB' \\
--form 'end_time=1739291615' \\
--form 'order_id=049b5879-4740-4d34-9728-3b16c28e2b6a' \\
--form 'amount_usdt=100.6' \\
--form 'local_amount=950' \\
--form 'client_id=CLT67890' \\
--form 'sbp_number=+79230001122' \\
--form 'bank_code=100000000111' \\
`,


Ruby:`require "net/http"
require "uri"
require "json"

url = URI("/api/withdraw")
request = Net::HTTP::Post.new(url)
request["Authorization"] = "Bearer your-access-token" 
# OR
request["API-Key"] = "your-api-key"
request["Merchant-ID"] = "your-merchant-id"

data = {
    "curr" => "RUB",
    "end_time" => "1739291615",
    "order_id" => "049b5879-4740-4d34-9728-3b16c28e2b6a",
    "amount_usdt" => 100.6,
    "local_amount" => 950,
    "client_id" => "CLT67890",
    "sbp_number" => "+79230001122",
    "bank_code" => "100000000111"
}.to_json

request.body = data

response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`,

PHP : `<?php

$url = "/api/withdraw";
$headers = [
    "Authorization: Bearer your-access-token", // OR
    "API-Key: your-api-key",
    "Merchant-ID: your-merchant-id",

];

$data = json_encode([
    "curr" => "RUB",
    "end_time" => "1739291615",
    "order_id" => "049b5879-4740-4d34-9728-3b16c28e2b6a",
    "amount_usdt" => 100.6,
    "local_amount" => 950,
    "client_id" => "CLT67890",
    "sbp_number" => "+79230001122",
    "bank_code" => "100000000111"
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>`,

  Node: `const axios = require("axios");
const url = "/api/withdraw";
const headers = {
  "Authorization": "Bearer your-access-token", // OR
  "API-Key": "your-api-key",
  "Merchant-ID": "your-merchant-id"
};
const data = {
  curr: "RUB",
  end_time: "1739291615",
  order_id: "049b5879-4740-4d34-9728-3b16c28e2b6a",
  amount_usdt: 100.6,
  local_amount: 950,
  client_id: "CLT67890",
  sbp_number: "+79230001122",
  bank_code: "100000000111",
"
};
axios.post(url, data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`,
};

const Withdraw = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setApiData({
      codeExamples,
      endpoint: "/api/withdraw",
      method: "POST"
    }));
  }, [dispatch]);

  return (
    <div className="api-container">
      <h1 className="api-title">Создание заявки на выплату (Withdraw)</h1>
      
      <div className="api-method-container">
        <span className="api-method post">POST</span>
        <span className="api-endpoint">/api/withdraw</span>
      </div>

      <p className="api-description">
        Этот метод создает заявку на выплату и возвращает детали транзакции. 
        <br />
        <br />
        Доступные методы аутентификации:
      </p>
      <ol>
        <li><a href="login">Через <code>Authorization: Bearer token</code> (OAuth 2.0)</a></li>
        <br />
        <li><a href="api-key">Через <code>API-Key</code> и <code>Merchant-ID</code> в заголовках</a></li>
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
              <td><code>end_time<span className="required">*</span></code></td>
              <td>integer</td>
              <td>Время завершения окна выплаты.</td>
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
              <td><code>card_number,<br />sbp_number,<br />payment_url,<br /> acc_number,<br />iban_number,<br />tron_address</code> </td>
              <td>string</td>
              <td>Реквизит получателя.</td>
            </tr>
            <tr>
              <td><code>name_client</code> </td>
              <td>string</td>
              <td>ФИО клиента.</td>
            </tr>
            <tr>
              <td><code>short_nameclient</code> </td>
              <td>string</td>
              <td>Имя фамилия клиента в формате. Иван А.</td>
            </tr>
            <tr>
              <td><code>bank_code</code> </td>
              <td>string</td>
              <td>Код НСПК</td>
            </tr>
            <tr>
              <td><code>bik</code> </td>
              <td>string</td>
              <td>БИК (банковский идентификационный код)</td>
            </tr>
            <tr>
              <td><code>inn</code> </td>
              <td>string</td>
              <td>ИНН (Идентификационный номер налогоплательщика)</td>
            </tr>
            <tr>
              <td><code>bank_name</code> </td>
              <td>string</td>
              <td>Название банка</td>
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
              <td><code>payment_type_id</code></td>
              <td>number</td>
              <td>Способы оплаты</td>
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
        "internal_order_id": 1061095,
        "status_order": "Pending",
        "bank_id": 4,
        "bank_name": "СберБанк",
        "bank_code": "100000000111",
        "curr": "RUB",
        "unix_time": 1739445257,
        "payment_type_id": 3,
        "local_Amount": "2",
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
"message": "We are currently not accepting payment requests. Your request has been rejected, please try again later."
}
OR
{
"status": false,
"message": "The bank does not match the selected."
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
"message": "There is not enough balance."
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
        "curr": [
            "The curr field is required."
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

export default Withdraw;
