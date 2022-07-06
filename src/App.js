import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";

import MyList from "./pages/MyList";
import Categories from "./pages/Categories";
import Breeds from "./pages/Breeds";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Breeds />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/my_list" element={<MyList />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
