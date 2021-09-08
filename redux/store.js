import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { YourReducesName } from 'path of your YourReducesName'
export const store = createStore(YourReducesName,compose(applyMiddleware(thunk)));
