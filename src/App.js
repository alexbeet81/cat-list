import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";

import Breeds from "./pages/Breeds";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Breeds />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
