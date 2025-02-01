// src/AppRoutes.jsx
import { lazy, Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import { AuthContext } from "./context/AuthContext";

// 🏷️ Pages (कुछ Lazy loaded, कुछ नहीं भी कर सकते)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Organisation = lazy(() => import("./pages/Organisation"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Courses = lazy(() => import("./pages/Courses"));
const ActiveClasses = lazy(() => import("./pages/ActiveClasses"));
const EntryGate = lazy(() => import("./pages/EntryGate"));
const OnlineStudents = lazy(() => import("./pages/OnlineStudents"));
const Wallet = lazy(() => import("./pages/Wallet"));
const GameArena = lazy(() => import("./pages/GameArena"));
const Help = lazy(() => import("./pages/Help"));
import ChatbotWidget from "./chatbot/components/ChatbotWidget";
import VirtualLibrary from "./pages/VirtualLibrary";
// या index.js से => import { ChatbotWidget } from "./chatbot";

// etc.

function AppRoutes() {
  const { user } = useContext(AuthContext); // मान लें AuthContext में user स्टेट है

  return (
    <>
    <Routes>
      {/* PUBLIC LAYOUT */}
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/organisation"
          element={
            <Suspense fallback={<div>Loading Organisation...</div>}>
              <Organisation />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            !user ? (
              <Suspense fallback={<div>Loading Login...</div>}>
                <Login />
              </Suspense>
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !user ? (
              <Suspense fallback={<div>Loading Signup...</div>}>
                <Signup />
              </Suspense>
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        {/* ...other public routes if any */}
      </Route>

      {/* PRIVATE LAYOUT */}
      <Route element={<PrivateLayout />}>
        <Route
          path="/dashboard"
          element={
            user ? (
              <Suspense fallback={<div>Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/courses"
          element={
            user ? (
              <Courses />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/active-classes"
          element={
            user ? <ActiveClasses /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/entry-gate"
          element={
            user ? <EntryGate /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/online-students"
          element={
            user ? <OnlineStudents /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/wallet"
          element={
            user ? <Wallet /> : <Navigate to="/login" />
          }
        />
         <Route
          path="/virtual-library"
          element={
            user ? <VirtualLibrary /> : <Navigate to="/login" />
          }
        />
        <Route path="/game-arena"
          element={
            user ? <GameArena /> : <Navigate to="/login" />
          }
        />


        <Route
          path="/help"
          element={
            user ? <Help /> : <Navigate to="/login" />
          }
        />

          <Route
          path="/"
          element={
            user ? <ActiveClasses /> : <Navigate to="/login" />
          }
        />
        {/* EntryGate, OnlineStudents, Wallet, Help, etc. भी इसी तरह */}
      </Route>
      {/* नीचे फ़्लोटिंग चैटबॉट */}
     
      

      {/* 404 Not Found fallback */}
      <Route path="*" element={<h2>404 Not Found</h2>} />
      
    </Routes>
    <ChatbotWidget />
    </>
  );
}

export default AppRoutes;