import { Button, Layout, Drawer } from "antd";
import "antd/dist/antd.min.css";
import "./index.css";
import SideNavBar from "./components/SideNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/attendance";
import Headercom from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SideNavBar />
        <Layout className="site-layout">
          <Headercom />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
