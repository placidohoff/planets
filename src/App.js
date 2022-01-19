
import './App.css'
import Main from './components/MainComponent';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'


// const reducer = (state = { planets: [] }, action) => {
//   switch (action.type) {
//     case 'ADD_MERCURY':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_VENUS':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_EARTH':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_MARS':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_JUPITER':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_SATURN':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_URANAUS':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_NEPTUNE':
//       return { ...state, planets: [...state.planets, action.payload] }
//     case 'ADD_PLUTO':
//       return { ...state, planets: [...state.planets, action.payload] }
//     // case 'LOADING_PLANETS'

//     case 'test':
//       console.log(state)
//       return state
//     default:
//       console.log(state)
//       return state
//   }
// }

// const store = createStore(reducer)

const store = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  )
}

