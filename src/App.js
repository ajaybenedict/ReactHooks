import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './use_state/store';
import './App.css';
import StyleElement from './use_ref/StyleElement';
import CounterButton from './use_state/CounterButton';
import Counter from './use_callback/Counter';
// import Counter from './use_effect/Counter';
//import Cleanup from './use_effect_cleanup/Cleanup';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <Cleanup /> */}
      {/* <StyleElement /> */}
      <Counter />
      </div>
    </Provider>
  );
}

export default App;
