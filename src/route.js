import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Oauth1 from "./pages/Auth/OAuth1";
import Login from "./pages/Auth/Login";
import Balance from "./pages/Balance";
import Payment from "./pages/Order/Payment";
import PaymentPage from "./pages/Order/PaymentPage";
import Withdraw from "./pages/Order/Withdraw";
import Status from "./pages/Order/Status";
import Appeal from "./pages/Order/Appeal";
import OrderList from "./pages/Order/OrderList";
import HoldAmounts from "./pages/Order/HoldAmounts";
import CallbackPayment from "./pages/Callback/Payment";
import AppealCallback from "./pages/Callback/Appeal";
import Callbacks from "./pages/Callback/Callback";
import HeaderInfo from "./pages/Api/Header";
import Response from "./pages/Api/Response";
import RefreshToken from "./pages/Auth/RefreshToken";
import RequestComponent from "./components/RequestBox";
import ScrollToTop from "./utils/ScrollToTop";

export const Routers = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <ScrollToTop />
        <Header />
        <div className="flex flex-1 body-content content-container">
          <Sidebar />
          <div className="wrapper">
            <main className="main flex-1 p-6 bg-gray-100">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Navigate
                      to="/login"
                      replace
                    />
                  }
                />
                <Route
                  path="/api-key"
                  element={<Oauth1 />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/balance"
                  element={<Balance />}
                />
                <Route
                  path="/payment"
                  element={<Payment />}
                />
                 <Route
                  path="/paymentPage"
                  element={<PaymentPage />}
                />
                <Route
                  path="/withdraw"
                  element={<Withdraw />}
                />
                <Route
                  path="/status-order"
                  element={<Status />}
                />
                <Route
                  path="/appeal"
                  element={<Appeal />}
                />
                <Route
                  path="/order-list"
                  element={<OrderList />}
                />
                <Route
                  path="/hold-amounts"
                  element={<HoldAmounts />}
                />
                     <Route
                  path="/callbacks"
                  element={<Callbacks />}
                />
                <Route
                  path="/payment-callback"
                  element={<CallbackPayment />}
                />
                <Route
                  path="/appeal-callback"
                  element={<AppealCallback />}
                />
                <Route
                  path="/header"
                  element={<HeaderInfo />}
                />
                <Route
                  path="/response"
                  element={<Response />}
                />

                <Route
                  path="/refresh-token"
                  element={<RefreshToken />}
                />
                {/* <Route path="/api-reference" element={<ApiReference />} /> */}
              </Routes>
            </main>
            <RequestComponent />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
