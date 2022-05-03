import { Outlet } from "react-router";
import AppBar from "./components/app-bar";
import Footer from "./components/footer";

export default function MainLayout({ ...props }) {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <AppBar />
      <div className="flex-fill pb-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
