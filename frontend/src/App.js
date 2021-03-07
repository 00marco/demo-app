import './App.css';
import Search from './components/Search';
import InfoCard from './components/InfoCard';

function App() {
  return (
    <div className="mainContainer">
      <div className="searchContainerArea">
        <Search/>
      </div>
      <div className="results">
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
      </div>
    </div>
  );
}

export default App;
