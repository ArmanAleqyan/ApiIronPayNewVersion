import "../styles/ApiRequest.css";

function ApiRequest() {
  return (
    <div className="api-request">
      <pre>
        <code>
{`npx api install "@tron/v4.7"
import tron from "@api/tron";
tron.getAccountInfoByAddress({address: 'your-address'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));`}
        </code>
      </pre>
      <button>Try It</button>
    </div>
  );
}

export default ApiRequest;
