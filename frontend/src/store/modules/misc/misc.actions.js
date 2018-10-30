import {
  SET_CURRENT_MSG,
  PUSH_MSG_QUEUE,
  POP_MSG_QUEUE,
  RESET_ACTIONS_TO_EXECUTE_WHEN_ONLINE
} from './misc.mutations';
import { PUSH_ACTION_TO_EXECUTE_WHEN_ONLINE } from './misc.mutations';

let timeout = null;

export default {
  displayLastMsg: ({ commit, state, dispatch }) => {
    if (state.msgQueue.length) {
      clearTimeout(timeout);
      commit(SET_CURRENT_MSG, state.msgQueue[0]);
      commit(POP_MSG_QUEUE);

      timeout = setTimeout(() => dispatch('removeCurrentMsg'), 5000);
    }
  },
  pushMsg: ({ dispatch, commit, state }, msg) => {
    commit(PUSH_MSG_QUEUE, msg);
    if (state.msgQueue.length === 1 && !state.currentMsg)
      dispatch('displayLastMsg');
  },
  removeCurrentMsg: ({ commit, dispatch }) => {
    commit(SET_CURRENT_MSG, null);
    setTimeout(() => dispatch('displayLastMsg'), 200);
  },
  async executeActionsQueue({ commit, state, dispatch }) {
    state.actionsToExecuteWhenOnLine.forEach(
      async action =>
        await dispatch(action.name, action.payload, { root: true })
    );
    commit(RESET_ACTIONS_TO_EXECUTE_WHEN_ONLINE);
  },
  /**
   * If network is offline, push the action to a queue
   * that will be executed on network onLine event.
   * If network is online, we just dispatch the action
   */
  dispatchWithPersistence(
    { commit, dispatch, rootState },
    { actionName, payload }
  ) {
    if (!rootState.config.networkOnLine) {
      commit(
        `misc/${PUSH_ACTION_TO_EXECUTE_WHEN_ONLINE}`,
        {
          name: actionName,
          payload
        },
        { root: true }
      );
      return dispatch(
        'misc/pushMsg',
        {
          text:
            'Cette action sera éxecutée dès que vous retrouverez une connexion stable',
          type: 'warning'
        },
        { root: true }
      );
    }

    return dispatch(actionName, payload, { root: true });
  }
};
