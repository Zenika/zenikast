import * as is from 'is_js';

export default {
  isMobileAndPortrait: state =>
    is.mobile() &&
    (state.screenOrientation === 'portrait-primary' ||
      state.screenOrientation === 'portrait-secondary')
};
