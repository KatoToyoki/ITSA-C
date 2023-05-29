import About from './pages/About';
import Course from './pages/Course';
import CourseEach from './pages/CourseEach';
import Layout from './pages/Layout';
import News from './pages/News';
import NewsEach from './pages/NewsEach';
import Result from './pages/Result';
import ResultEach from './pages/ResultEach';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<News />} />
          <Route path="/news" element={<News />} />
          <Route path="/news">
            <Route path=":news_id" element={<NewsEach />} />
          </Route>

          <Route path="/map" element={<Course />} />
          <Route path="/map/course">
            <Route path=":course_id" element={<CourseEach />} />
          </Route>

          <Route path="/about" element={<About />} />

          <Route path="/result" element={<Result />} />
          <Route path="/result">
            <Route path=":result_id" element={<ResultEach />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
