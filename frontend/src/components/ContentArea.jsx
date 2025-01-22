import { Outlet } from "react-router-dom";

function ContentArea() {
  return (
    <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
      {/* Main Heading */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to HVU</h1>
        <p className="text-gray-600">Here you can access your personalized dashboard and features.</p>
      </header>

      {/* Main Content */}
      <section>
        <Outlet /> {/* Dynamically renders routed components */}
      </section>
    </main>
  );
}

export default ContentArea;