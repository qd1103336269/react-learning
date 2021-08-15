import './App.css';
import ClassComponent from './pages/ClassComponent';
import FuncComponent from './pages/FuncComponent';
import LifeCycle from './pages/LifeCycle';
import ReduxDemo from './pages/ReduxDemo';
import SetStatePage from './pages/setStatePage';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FuncComponent />
      <SetStatePage />
      <LifeCycle />
      <ReduxDemo />
    </div>
  );
}

export default App;
