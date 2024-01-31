import Day from "./day";
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Day2 from "./day2";
function App() {
  return (
    <div className="App"> <BrowserRouter>
      <Routes>
        <Route path="/Day" element={<Day />}> </Route>
       <Route path="/Day2" element={<Day2 />}> </Route>
       </Routes>
    </BrowserRouter>
    </div>

  )

}

export default App;
