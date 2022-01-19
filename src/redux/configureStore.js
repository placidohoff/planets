import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Mercury } from './reducers/mercury';
import { Venus } from './reducers/venus';
import { Earth } from './reducers/earth';
import { Mars } from './reducers/mars';
import { Jupiter } from './reducers/jupiter';
import { Saturn } from './reducers/saturn';
import { Neptune } from './reducers/neptune';
import { Uranus } from './reducers/uranus';
import { Pluto } from './reducers/pluto';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            mercury: Mercury,
            venus: Venus,
            earth: Earth,
            mars: Mars,
            jupiter: Jupiter,
            saturn: Saturn,
            neptune: Neptune,
            uranus: Uranus,
            pluto: Pluto
        }),

        applyMiddleware(thunk)
    )

    return store
}