import HomePage from "../Pages/Home.page.js"
import LandingPage from "../Pages/Landing.page.js"
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/LandingPage',
            component: LandingPage
        }
    ]
})

export default router;