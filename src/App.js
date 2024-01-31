import Day from "./day";
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App"> <BrowserRouter>
      <Routes>
        <Route path="/Day" element={<Day />}> </Route></Routes>
    </BrowserRouter>
    </div>

  )

}

export default App;
