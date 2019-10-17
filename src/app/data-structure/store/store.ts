import { Store, createStore } from "redux";
import { counterReducer } from './store.reducers';

let store: Store<AppState> = createStore(counterReducer);