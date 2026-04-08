import { Outlet, Link } from "react-router";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link to="/" className="text-xl font-bold">
            🎬 Movie Tracker
          </Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};
