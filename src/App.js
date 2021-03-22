import Header from './Components/Header';
import Dashboard from './pages/Dashboard';
import {GlobalStyle} from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
