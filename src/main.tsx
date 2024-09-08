import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthProvider.tsx";
import "./index.css";
import { store } from "./store/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
);
