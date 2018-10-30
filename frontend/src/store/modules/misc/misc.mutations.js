export const SET_CURRENT_MSG = 'SET CURRENT MSG';
export const PUSH_MSG_QUEUE = 'PUSH MSG';
export const POP_MSG_QUEUE = 'POP MSG';
export const PUSH_ACTION_TO_EXECUTE_WHEN_ONLINE =
  'PUSH ACTION TO EXECUTE WHEN ONLINE';
export const POP_ACTION_TO_EXECUTE_WHEN_ONLINE =
  'POP ACTION TO EXECUTE WHEN ONLINE';
export const RESET_ACTIONS_TO_EXECUTE_WHEN_ONLINE =
  'RESET ACTIONS TO EXECUTE WHEN ONLINE';

export default {
  [SET_CURRENT_MSG]: (state, msg) => (state.currentMsg = msg),
  [PUSH_MSG_QUEUE]: (state, msg) => state.msgQueue.push(msg),
  [POP_MSG_QUEUE]: state => state.msgQueue.splice(0, 1),
  [PUSH_ACTION_TO_EXECUTE_WHEN_ONLINE]: (state, action) =>
    state.actionsToExecuteWhenOnLine.push(action),
  [POP_ACTION_TO_EXECUTE_WHEN_ONLINE]: state =>
    state.actionsToExecuteWhenOnLine.splice(0, 1),
  [RESET_ACTIONS_TO_EXECUTE_WHEN_ONLINE]: state =>
    (state.actionsToExecuteWhenOnLine = [])
};
