import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";

import Categories from "./pages/Categories";
import Breeds from "./pages/Breeds";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Breeds />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
