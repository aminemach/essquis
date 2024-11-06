import './App.css';

function App() {
  return (
      <div className="App">
          <div className={'flex flex-col items-center justify-center gap-2'}>
              <img src="/essquis-logo.svg" width={370} height={150} alt="Essquis Logo"/>
              <div className={'flex gap-6  mt-[-1rem]'}>
                  <span className={'text-xs cursor-pointer hover:text-gray-500 hover:text-sm'}>Home</span>
                  <span className={'text-xs cursor-pointer hover:text-gray-500 hover:text-sm'}>Interior </span>
                  <span className={'text-xs cursor-pointer hover:text-gray-500 hover:text-sm'}>Infos</span>
                  <span className={'text-xs cursor-pointer hover:text-gray-500 hover:text-sm'}>Contact</span>
              </div>
          </div>

      </div>
  );
}

export default App;
