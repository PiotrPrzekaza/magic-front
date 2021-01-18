import { createStore } from 'redux';

import { rootReducer as appReducer } from 'reducers/index';

export const store = createStore(appReducer);
