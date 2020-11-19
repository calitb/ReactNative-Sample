import Action from './actions';
import { State } from './store';

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SELECCIONAR_PERSONAJE': {
      const nuevoState = { ...state };
      nuevoState.personaje = action.personaje;

      return nuevoState;
    }
    case 'SET_PERSONAJES': {
      const nuevoState = { ...state };
      nuevoState.personajes = action.personajes;

      return nuevoState;
    }
    case 'OBTENER_PERSONAJES': {
      const nuevoState = { ...state };
      nuevoState.personajes = [{ id: '1', name: 'Rick', image: 'imagen.png' }];

      return nuevoState;
    }
  }

  return state;
}