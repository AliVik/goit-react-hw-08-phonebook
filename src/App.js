import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import { LoginPage,ContactsPage,RegisterPage, MainPage } from "pages";

render(
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}>
                    <Route path='register' element={<RegisterPage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='contacts' element={<ContactsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>,
    document.getElementById('root')
)
        
    