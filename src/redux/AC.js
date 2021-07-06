import db from '../firebase';
import * as AC from './TYPES';

export const initApp = () => async (dispatch) => {
  const result = await db.collection('main').doc('info').get();
  dispatch({
    type: AC.SET_DATA,
    payload: { ...result.data() },
  });
};
