import './App.css';
import Categories from './Components/Categories';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Layouts
import Layout from './Components/Layout';                 // Layout: Global
import CharityList from './Components/CharityList';       // Layout: Charity-listing-pages

// Charity-listing-pages
import HealthCharities from './Components/HealthCharities';
import EducationCharities from './Components/EducationCharities';
import AllCharities from './Components/AllCharities';
import AnimalCharities from './Components/AnimalCharities';
import HumanServicesCharities from './Components/HumanServicesCharities'
import CharityName from './Components/CharityName';

// Login Page
import Login from './Components/Login';


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Login/>}/>
      <Route path="charity/:name" element={<CharityName/>}/>
      <Route path="charities" element={<CharityList/>}>
          <Route index element={<AllCharities/>}/>
          <Route path="health" element={<HealthCharities/>}/>
          <Route path="education" element={<EducationCharities/>}/>
          <Route path="animal" element={<AnimalCharities/>}/>
          <Route path="human services" element={<HumanServicesCharities/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
