
import Home from '../containers/HomePage'
import Registration from '../containers/Registration'
import About from '../containers/About'
import Jobs from '../containers/Jobs'
import Charts from '../containers/Charts'
import Timer from '../containers/Timer'
import PageNotFound from '../containers/PageNotFound'
const routes = [
    { path: '/', name: 'home', component: Registration },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/about/:id', name: 'about', component: About },
    { path: '/jobs', name: 'jobs', component: Jobs, props: {data: {Message : 'Hi'}} },
    { path: '/charts', name: 'charts', component: Charts },
    { path: '/timer', name: 'timer', component: Timer },
    { path: '*', name: 'PageNotFound', component: PageNotFound }
]
  
export default routes;