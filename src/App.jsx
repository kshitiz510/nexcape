import { Home, PurposePage, KeyBenefits, TeamSection, Footer,ContactUsForm,GradientDivider,ReverseGradient } from "./pages/Home.jsx";
import React from "react";
// import './App.css'

function App() {
  return (
    <>
      <Home />
      <ReverseGradient />
      <PurposePage />
      <GradientDivider />
      <KeyBenefits />
      <ContactUsForm/>
      <TeamSection />

      <Footer />
    </>
  );
}

export default App;
