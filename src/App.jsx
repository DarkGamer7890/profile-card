import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import "./App.css"
import ProfileCard from './ProfileCard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileForm />} />
            <Route path="ProfileCard.jsx" element={<ProfileCard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
