import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  return (
    <div className="lf-app">
      <Header />
      <Dashboard />
      <footer className="lf-footer">lie-fitness · Milestone 0</footer>
    </div>
  );
}
