import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import AdminIndex from "./dashboard/pages/AdminIndex";
import AddWriter from "./dashboard/pages/AddWriter";
import Writers from "./dashboard/pages/Writers";
import News from "./dashboard/pages/News";
import Profile from "./dashboard/pages/Profile";
import WriterIndex from "./dashboard/pages/WriterIndex";
import CreateNews from "./dashboard/pages/CreateNews";
import Login from "./dashboard/pages/Login";
function App() {
  const userInfo = {
    role: "writer",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<MainLayout />}>
          {/* Redirect to /dashboard/admin */}
          <Route path="" element={<Navigate to="admin" replace />} />
          {/* Nested route for admin */}
          <Route path="admin" element={<AdminIndex />} />
          <Route path="news" element={<News />} />
          <Route path="writer/add" element={<AddWriter />} />
          <Route path="writers" element={<Writers />} />
          <Route path="profile" element={<Profile />} />
          <Route path="writer" element={<WriterIndex />} />
          <Route path="news/create" element={<CreateNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
