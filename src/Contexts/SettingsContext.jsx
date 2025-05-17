// src/context/SettingsContext.jsx

import React, { createContext, useState, useContext } from "react";
import { simulateBids } from "../api"; // import mock simulation logic

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [nFactor, setNFactor] = useState(7);
  const [budget, setBudget] = useState(1000);
  const [bids, setBids] = useState([]);
  const [summary, setSummary] = useState({
    impressions: 0,
    clicks: 0,
    ctr: "0%",
    cost: "$0.00",
  });

  const runSimulation = () => {
    const result = simulateBids(nFactor, budget);
    setBids(result.bids);
    setSummary(result.summary);
  };

  const resetSimulation = () => {
    setNFactor(7);
    setBudget(1000);
    setBids([]);
    setSummary({
      impressions: 0,
      clicks: 0,
      ctr: "0%",
      cost: "$0.00",
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        nFactor,
        setNFactor,
        budget,
        setBudget,
        bids,
        summary,
        runSimulation,
        resetSimulation,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
