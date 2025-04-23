import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Anniversaries from "./pages/Anniversaries";
import Diary from "./pages/Diary";
import QA from "./pages/QA";
import Plans from "./pages/Plans";
import Birthday from "./pages/Birthday";

export default function AppRouter() {
  return (
    <Router>
      <main className="min-h-screen bg-rose-100 p-4 text-center space-y-4">
        <h1 className="text-3xl font-bold text-rose-600">For Pumpkin Forever 🎃</h1>
        <nav className="space-x-4">
          <Link to="/">🏠 主页</Link>
          <Link to="/timeline">🕰️ 时间线</Link>
          <Link to="/anniversaries">📆 纪念日</Link>
          <Link to="/diary">📖 日记</Link>
          <Link to="/qa">❓ Q&A</Link>
          <Link to="/plans">🌈 计划</Link>
          <Link to="/birthday">🎉 生日</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div className='text-lg text-rose-800'>欢迎来到我们的纪念馆</div>} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/anniversaries" element={<Anniversaries />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/birthday" element={<Birthday />} />
        </Routes>
      </main>
    </Router>
  );
}
