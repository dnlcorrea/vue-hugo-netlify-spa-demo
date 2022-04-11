export default async ({ app }) => {

  app.router.afterEach((to, from) => {
      AOS.init();
      setTimeout(() => {
          AOS.refreshHard();
      }, 2000);
  });

}