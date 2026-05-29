import React, { useState } from 'react';
import Home from "./pages/Home";
import FlightTicker from "./components/ticker/FlightTicker";

export default function App() {
  const [view, setView] = useState('home');

  return (
    <>
      {view === 'home' && <Home onGetStarted={() => setView('ticker')} />}
      {view === 'ticker' && <FlightTicker onBack={() => setView('home')} />}
    </>
  );
}