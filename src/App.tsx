import React from 'react';
import {WrapperPage} from "./ui/WrapperPage";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./configs/Routes";

function App() {
  return (
      <WrapperPage id="form">
          <Routes>
              {ROUTES.map((item) => (
                  <Route key={item.path} path={`/${item.path}`} element={item.element}/>
              ))}
          </Routes>
      </WrapperPage>
  );
}

export default App;
