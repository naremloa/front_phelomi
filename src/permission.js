import router from './router';
import store from './store';
import { fDatabase } from './firebase';

const handleExpress = method => new Promise((res, rej) => {
  const intervalId = setInterval(() => {
    if (method()) return;
    clearInterval(intervalId);
    res();
  }, 50);
});

router.beforeResolve((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title}-飛樂米星空號` : '飛樂米星空號';
  if (to.meta.goBackIndex) {
    next('/');
  }
  // if (!/^\/maintenance(?:\/(?=$))?$/i.test(to.path)) {
  //   next('/maintenance');
  // }
  next();
});

router.beforeEach(async (to, from, next) => {
  const res = await fDatabase.ref('/').once('value');
  store.dispatch('setInfo', res.val());
  await new Promise((resolve) => {
    const checkFunc = () => setTimeout(() => {
      if (store.getters.init) checkFunc();
      else resolve();
    }, 100);
    checkFunc();
  });
  // await handleExpress(() => store.getters.init);
  next();
});
