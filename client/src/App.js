import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedNavbars from "./components/sharedComponents/SharedNavbars";
import { Stats, Profile, AllJobs, AddJob } from "./components/dashboard/index";
import { ProtectedRoute, Error, Landing, Register } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedNavbars />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* Accessible routes */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
