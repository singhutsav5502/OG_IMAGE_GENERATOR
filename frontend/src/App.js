import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserInfo } from './components/UserInfo';
import PostCreator from './components/PostCreator';
import ImageTemplate from './components/ImageTemplate';
function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        toastStyle={{color:'var(--highlight-color) !important'}}
      />
      <PrimeReactProvider>
        <div className='app-container'>
          <section className="left" style={{ height: '100vh', width: '40vw', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', gap: '30vh' }}>
            <UserInfo></UserInfo>
            <div style={{ transformOrigin: 'top left', scale: '0.5', paddingLeft: '10vw' }}>
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
