import { Provider } from 'react-redux';
import store from './redux/store';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}> {/* Menyediakan store ke aplikasi */}
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
