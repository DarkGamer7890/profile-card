import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileForm from './ProfileForm.jsx';
import "./App.css"
import ProfileCard from './ProfileCard.jsx';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<ProfileForm />} />
          <Route path="/profileCard" element={<ProfileCard />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
