import store from '@/store';

const handleNetworkStatus = () => {
  navigator.onLine
    ? store.dispatch('config/setNetworkOnLine', true)
    : store.dispatch('config/setNetworkOnLine', false);

  window.addEventListener('online', () => {
    store.dispatch('config/setNetworkOnLine', true);
  });

  window.addEventListener('offline', () =>
    store.dispatch('config/setNetworkOnLine', false)
  );
};

export default {
  handleNetworkStatus
};
