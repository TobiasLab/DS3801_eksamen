import HomePage from "./Pages/Home.page.js"

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: HomePage
        }
    ]
})

export default router;