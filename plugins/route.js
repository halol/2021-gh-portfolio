export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from, savedPosition) => {
    //do something to validat
    
    console.log(savedPosition)
      
  })
}