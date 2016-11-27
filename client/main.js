import '../imports/startup/client/index.js';

Meteor.startup(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
      // Registration was successful
      setTimeout(() => {
        const toast = document.querySelector('#toast');
        toast.text = 'Caching done. You can use the app offline.';
        toast.toggle();
      }, 1000);
    }).catch((err) => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }
});
