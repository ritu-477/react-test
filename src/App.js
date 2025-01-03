import logo from './logo.svg';
import './App.css';
import EventEinsenden from './components/EventEinsenden';
import AddNumbers from './components/AddNumbers';
import MultipleTable from './components/MultipleTable';
import Star from './components/Star';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <EventEinsenden />
      <AddNumbers />
      <MultipleTable />
      <Star />
      <BackToTop/>
    </>
  );
}

export default App;
