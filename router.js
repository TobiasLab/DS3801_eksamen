import HomePage from "./Pages/Home.page.js/index.js.js"

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: HomePage
        }
    ]
})

export default router;