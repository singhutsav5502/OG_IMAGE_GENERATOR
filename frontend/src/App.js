import './App.css';
import { UserInfo } from './components/UserInfo';
import PostCreator from './components/PostCreator';
import { PrimeReactProvider } from 'primereact/api';
import ImageTemplate from './components/ImageTemplate';
function App() {
  return (
    <>
      <PrimeReactProvider>
        <div className='app-container'>
          <section className="left" style={{ height:'100vh', width:'30vw', display: 'flex', flexDirection: 'column', alignItems:'flex-start', justifyContent:'space-between', gap:'30vh' }}>
            <UserInfo></UserInfo>
            <div style={{transformOrigin:'top left', scale:'0.5', paddingLeft:'10vw'}}>
              <ImageTemplate />
            </div>
          </section>
          <PostCreator />
        </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
