import { devlog } from '@/utils/devlog'
import router from './index'

router.beforeEach(async (to) => {
  devlog(to.fullPath) // remove this line when you start coding
})
