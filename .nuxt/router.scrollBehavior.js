export default (to, from, savedPosition) => {
      if (savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: savedPosition.y });
          }, 200);
        });
      } else {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: 0 });
          }, 200);
        });
      }
    }
