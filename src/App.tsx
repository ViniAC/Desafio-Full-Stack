import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks/index";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
      <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
