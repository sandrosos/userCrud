import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Usuarios from "./routes/usuarios";
import Update from "./routes/editar";
import Insert from "./routes/adicionar";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Usuarios/>}/>
          <Route path="/adicionar" element={<Insert/>}/>
          <Route path="/editar/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
