import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import App from './App';
import langJa from './i18n/ja.json';
import langKo from './i18n/ko.json';
import './index.css';
import reportWebVitals from './reportWebVitals';

// HTMLのlangを設定
i18next.on('languageChanged', (lng: string) => {
  console.log(lng);
  document.documentElement.setAttribute('lang', lng);
});
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: window.navigator.language,
    resources: {
      ko: { translation: langKo },
      ja: { translation: langJa },
    },
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
