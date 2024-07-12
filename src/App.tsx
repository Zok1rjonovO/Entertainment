import { Routes, Route } from "react-router-dom";

import SingnupForm from "./_auth/forms/SingnupForm";
import SignupForm from "./_auth/forms/SingnupForm";
import AuthLayout from "./_auth/forms/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages/";
import "./globals.css";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Route */}
        <Route element={<AuthLayout />}>
          <Route path="/sing-in" element={<SingnupForm />} />
          <Route path="/sing-up" element={<SignupForm />} />
        </Route>
        {/* Public Route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
