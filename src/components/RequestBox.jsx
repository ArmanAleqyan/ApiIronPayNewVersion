import React, { useState } from "react";
import "../styles/RequestComponent.css";
import { FaClipboard } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Подключаем стили
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const languages = ["Shell", "Node", "Ruby", "PHP", "Python"];

const RequestBox = () => {
  const { codeExamples, endpoint, method } = useSelector((state) => state.api);
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const location = useLocation();

  if (!codeExamples || Object.keys(codeExamples).length === 0) {
    return null;
  }

  // Скрываем RequestBox на главной странице
  if (
    location.pathname === "/" ||
    location.pathname === "/api-key" ||
    location.pathname === "/payment-callback" ||
    location.pathname === "/appeal-callback" ||
    location.pathname === "/withdraw-callback"
  ) {
    return null;
  }

  const handleCopy = () => {
    if (!codeExamples || !codeExamples[selectedLanguage]) {
      toast.error(" Ошибка: Код для этого языка не найден!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      return;
    }

    navigator.clipboard.writeText(codeExamples[selectedLanguage]);
    toast.dismiss();
    toast.success(" Код успешно скопирован!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  return (
    <>
      {/* Контейнер Toastr (размещен глобально) */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

      <div className="request-container">
        {/* Выбор языка */}
        <div className="language-selector">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`language-button ${
                selectedLanguage === lang ? "active" : ""
              }`}
              onClick={() => setSelectedLanguage(lang)}>
              {lang}
            </button>
          ))}
        </div>

        {/* Блок запроса */}
        <div className="request-box">
          <div className="request-header">
            <span className="request-title">REQUEST</span>
            <span className="request-method">{method}</span>
          </div>

          <div className="request-endpoint">
            <code>{endpoint}</code>
          </div>

          {/* Код запроса */}
          <div className="code-box">
            <pre className="code-content">
              {codeExamples ? (
                <code>
                  {codeExamples[selectedLanguage] ||
                    "❌ Нет кода для этого языка"}
                </code>
              ) : (
                <code>❌ Данные API не загружены</code>
              )}
            </pre>
          </div>

          {/* Кнопки */}
          <div className="request-actions">
            <button
              className="copy-button"
              onClick={handleCopy}>
              <FaClipboard /> Copy
            </button>
            {/* <button className="try-button">
              <FaPlay /> Try It!
            </button> */}
          </div>
        </div>

        {/* Блок ответа */}
        {/* <div className="response-box">
          <div className="response-header">
            <span>RESPONSE</span>
          </div>
          <div className="response-content">
            <pre className="response-code">
              <code>200 - Result {"{}"}</code>
            </pre>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default RequestBox;
