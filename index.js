import { Provider } from 'react-redux'
import store from 'path of your store'
ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
  );
