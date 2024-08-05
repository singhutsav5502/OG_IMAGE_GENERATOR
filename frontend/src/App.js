import './App.css';
import { UserInfo } from './components/UserInfo';
import PostCreator from './components/PostCreator';
import { PrimeReactProvider } from 'primereact/api';
function App() {
  return (
    <>
    <PrimeReactProvider>
      <div className='app-container'>
        <UserInfo></UserInfo>
        <PostCreator />
      </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
