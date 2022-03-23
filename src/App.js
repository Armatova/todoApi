import TodoContextProvider from "./Components/Contexts/TodoContexts";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <Routes />
      </TodoContextProvider>
    </div>
  );
};

export default App;
