import { EventProvider } from "./context/EventContext";

import Main from "./components/Main";

function App() {
  return (
    <div className="App">      
        <EventProvider>
          <Main />
        </EventProvider> 
    </div>
  );
}

export default App;

