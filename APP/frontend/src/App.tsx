import React from "react";
import { Routes, Route } from "react-router-dom";
import EntryRoot from "./pages/EntryRoot";
import LoginOptions from "./pages/LoginOptions";
import RegisterOptions from "./pages/RegisterOptions";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import OnboardingWelcome from "./pages/OnboardingWelcome";
import OnboardingQuestions from "./pages/OnboardingQuestions";
import OnboardingDone from "./pages/OnboardingDone";
import ProtectedRoute from "./components/ProtectedRoute";
import BlockIfOnboarded from "./components/BlockIfOnboarded";
import HomeScreen from "./pages/HomeScreen";
import AccountScreen from "./pages/AccountScreen";
import MyTripsScreen from "./pages/MyTripsScreen";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<EntryRoot />} />
      <Route path="/login-options" element={<LoginOptions />} />
      <Route path="/register-options" element={<RegisterOptions />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/onboarding/welcome" element={<BlockIfOnboarded> <OnboardingWelcome /> </BlockIfOnboarded>} />
      <Route path="/onboarding/questions" element={ <BlockIfOnboarded> <OnboardingQuestions /> </BlockIfOnboarded>} />
      <Route path="/onboarding/done" element={<BlockIfOnboarded> <OnboardingDone /> </BlockIfOnboarded>} />
      <Route path="/home" element={<ProtectedRoute> <HomeScreen/> </ProtectedRoute>}/>
      <Route path="/account" element={<ProtectedRoute> <AccountScreen/> </ProtectedRoute>}/>
      <Route path="/mytrips" element={<ProtectedRoute> <MyTripsScreen /> </ProtectedRoute>}/>

    </Routes>
  );
};

export default App;
