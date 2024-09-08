import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthProvider.tsx";
import "./index.css";
import { persistor, store } from "./store/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PersistGate>
  </Provider>,
);
