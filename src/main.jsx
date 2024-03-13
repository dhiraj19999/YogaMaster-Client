import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/Router";
import "./index.css";
import { RouterProvider } from "react-router-dom";
//import "react-toastify/dist/React-Toastify.css";
import Aos from "aos";
const queryClient = new QueryClient();
Aos.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
