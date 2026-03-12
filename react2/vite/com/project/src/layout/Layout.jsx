import Sidebar from "../Component/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;