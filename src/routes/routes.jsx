import { Route, Routes } from "react-router-dom";

import MainPage from "../Pages/MainPage";
import LoadingPage from "../Components/LoadingPage/LoadingPage";

function Index() {
  return (
    <div className="App">

        <Routes>
           
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/" element={<LoadingPage />} />
          
        </Routes>

    </div>
  );
}

export default Index;
