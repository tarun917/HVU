// src/pages/Wallet.jsx
import { useState } from "react";

export default function Wallet() {
  // डेमो balances: HVU, USDT, BFIC
  const [balances, setBalances] = useState({
    HVU: 150.0,
    USDT: 25.0,
    BFIC: 10.0,
  });

  // Transaction History (demo)
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "Deposit",
      coin: "HVU",
      amount: 100,
      date: "2025-03-10 14:00",
    },
    {
      id: 2,
      type: "Swap USDT→HVU",
      coin: "USDT",
      amount: 5,
      date: "2025-03-12 10:45",
    },
  ]);

  // Swap input
  const [swapAmount, setSwapAmount] = useState("");

  // Handle USDT->HVU swap (demo)
  const handleSwap = () => {
    const amt = parseFloat(swapAmount);
    if (!amt || amt <= 0) {
      alert("Enter a valid amount.");
      return;
    }
    if (amt > balances.USDT) {
      alert("Not enough USDT balance!");
      return;
    }
    // Suppose 1 USDT = 10 HVU (demo ratio)
    const hvuGained = amt * 10;
    // Update state
    setBalances((prev) => ({
      ...prev,
      USDT: prev.USDT - amt,
      HVU: prev.HVU + hvuGained,
    }));
    // Log transaction
    const newTx = {
      id: transactions.length + 1,
      type: "Swap USDT→HVU",
      coin: "USDT",
      amount: amt,
      date: new Date().toISOString().slice(0, 16).replace("T", " "),
    };
    setTransactions([newTx, ...transactions]);
    alert(`Swapped ${amt} USDT → +${hvuGained} HVU (demo)!`);
    setSwapAmount("");
  };

  // Handle deposit USDT (dummy flow)
  const handleDepositUSDT = () => {
    alert("Scan the QR code / use address to deposit USDT. (Demo Alert)");
  };

  // Handle buy HVU with INR
  const handleBuyHVUwithINR = () => {
    alert("Redirecting to PhonePe/Google Pay Flow (Demo).");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6 neon-text">
          Your Virtual Wallet
        </h1>
        <p className="text-center mb-10 text-gray-300">
          Manage your HVU Coins, USDT, BFIC, and more in our futuristic campus.
        </p>

        {/* Balances Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* HVU Card */}
          <div className="relative bg-gradient-to-tr from-indigo-600 to-purple-600 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition">
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none rounded-lg"></div>
            <h2 className="relative text-xl font-bold z-10">HVU Balance</h2>
            <p className="relative text-3xl font-extrabold z-10 drop-shadow mt-2">
              {balances.HVU.toFixed(2)} HVU
            </p>
          </div>

          {/* USDT Card */}
          <div className="relative bg-gradient-to-tr from-green-500 to-blue-500 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition">
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none rounded-lg"></div>
            <h2 className="relative text-xl font-bold z-10">USDT Balance</h2>
            <p className="relative text-3xl font-extrabold z-10 drop-shadow mt-2">
              {balances.USDT.toFixed(2)} USDT
            </p>
          </div>

          {/* BFIC Card */}
          <div className="relative bg-gradient-to-tr from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition">
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none rounded-lg"></div>
            <h2 className="relative text-xl font-bold z-10">BFIC Balance</h2>
            <p className="relative text-3xl font-extrabold z-10 drop-shadow mt-2">
              {balances.BFIC.toFixed(2)} BFIC
            </p>
          </div>
        </div>

        {/* Deposit + Buy + Swap Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Deposit USDT */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add USDT</h3>
            <p className="text-sm text-gray-300 mb-3">
              Send USDT to your unique address (demo):
            </p>
            <div className="bg-gray-700 p-3 rounded text-center text-sm mb-3">
              <p>0x1234...5678 (ERC20)</p>
            </div>
            {/* QR code placeholder */}
            <div className="bg-gray-600 h-40 rounded mb-3 flex items-center justify-center text-sm text-gray-200">
              [QR Code Here]
            </div>
            <button
              onClick={handleDepositUSDT}
              className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition w-full"
            >
              Deposit USDT
            </button>
          </div>

          {/* Buy HVU with INR */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Buy HVU with INR
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              Use PhonePe / Google Pay / IMPS to purchase HVU Coin instantly.
            </p>
            <button
              onClick={handleBuyHVUwithINR}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition w-full"
            >
              Buy with INR
            </button>
          </div>

          {/* Swap USDT→HVU */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Swap USDT → HVU</h3>
            <p className="text-sm text-gray-300 mb-3">
              Quickly convert USDT to HVU Coin at a fixed rate (demo).
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="number"
                placeholder="Amount (USDT)"
                className="flex-1 px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                value={swapAmount}
                onChange={(e) => setSwapAmount(e.target.value)}
              />
              <button
                onClick={handleSwap}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
              >
                Swap
              </button>
            </div>
            <p className="text-xs text-gray-400 italic">
              1 USDT = 10 HVU (Demo Rate)
            </p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
          {transactions.length === 0 ? (
            <p className="text-gray-400 italic">No transactions yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left pb-2">Date/Time</th>
                  <th className="text-left pb-2">Type</th>
                  <th className="text-left pb-2">Coin</th>
                  <th className="text-left pb-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-gray-700">
                    <td className="py-2">{tx.date}</td>
                    <td className="py-2">{tx.type}</td>
                    <td className="py-2">{tx.coin}</td>
                    <td className="py-2">{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}