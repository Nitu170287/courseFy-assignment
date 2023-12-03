
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CourseList from './pages/courseList';

import { Provider } from 'react-redux';
import { store } from "./redux/store";
import CoursePage from './pages/CoursePage';
import StudentDashboard from './pages/studentDashboard';

function App() {
  return (
    < Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseList/>} />
        
        <Route path='/course/:id' element={<CoursePage/>} />
        <Route path='/dashboard' element ={<StudentDashboard/>}/>
      </Routes>
    </BrowserRouter>
     
    </Provider>
  );
}

export default App;
