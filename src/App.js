import { Router } from "react-router-dom";
import Layout from "./components/UI/Layout";

import Breeds from "./pages/Breeds";

function App() {
  return (
    <div>
      <Layout>
        <Breeds />
      </Layout>
    </div>
  );
}

export default App;
