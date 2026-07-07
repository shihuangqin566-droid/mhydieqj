import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PotentialSectors from '@/views/PotentialSectors.vue'
import DarkHorseSectors from '@/views/DarkHorseSectors.vue'
import DarkHorseStocks from '@/views/DarkHorseStocks.vue'
import ContactUs from '@/views/ContactUs.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/potential-sectors', name: 'PotentialSectors', component: PotentialSectors },
  { path: '/darkhorse-sectors', name: 'DarkHorseSectors', component: DarkHorseSectors },
  { path: '/darkhorse-stocks', name: 'DarkHorseStocks', component: DarkHorseStocks },
  { path: '/contact', name: 'Contact', component: ContactUs },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
