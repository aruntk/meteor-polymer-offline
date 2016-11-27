Meteor.startup(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((e) => {
      // Registration was successful
      e.onupdatefound = () => {
        const t = e.installing;
        t.onstatechange = () => {
          switch (t.state) {
            case 'installed':
              navigator.serviceWorker.controller || toast('Caching complete! Future visits will work offline.');
              break;
            case 'redundant':
              throw Error('The installing service worker became redundant.');
          }
        };
      };
    }).catch((err) => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }
});

const toast = (text) => {
  setTimeout(() => {
    const toast = document.querySelector('#toast');
    toast.text = text;
    toast.toggle();
  }, 1000);

}
