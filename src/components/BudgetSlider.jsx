import React, { useState } from 'react'

const BudgetSlider = () => {
  const [nFactor, setNFactor] = useState(5)
  const [budget, setBudget] = useState(1000)

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow">
      <div className="mb-4">
        <label className="block text-sm">N-Factor: {nFactor}</label>
        <input
          type="range"
          min="1"
          max="10"
          value={nFactor}
          onChange={(e) => setNFactor(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">Campaign Budget ($)</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full bg-gray-700 p-2 rounded"
        />
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 px-4 py-2 rounded text-white">Run</button>
        <button className="bg-gray-600 px-4 py-2 rounded text-white">Reset</button>
      </div>
    </div>
  )
}

export default BudgetSlider
