export default async ({ app }) => {

  app.router.afterEach((to, from) => {
    console.log(AOS)
      AOS.init();
      setTimeout(() => {
          AOS.refreshHard();
      }, 2000);
  });


  // app.router.beforeEach((to, from) => {
  //   console.log('befores')
  //     AOS.init();
  //     AOS.refresh();
  // });

}