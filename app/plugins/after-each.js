export default async ({ app }) => {

  app.router.afterEach((to, from) => {
    setTimeout(() => {
      AOS.refreshHard();
      AOS.init();
      }, 2000);
  });

}