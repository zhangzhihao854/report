import Vue from 'vue'
import Router from 'vue-router'
import report_1 from '@/components/myreport'
import report_2 from '@/components/report2'
import write_report from '@/components/write_report'
import evaluation_1 from '@/components/evaluation_1'
import evaluation_2 from '@/components/evaluation_2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: report_1
    }, 
    {path:"/report_1",component:report_1},
    {path:"/report_2",component:report_2},
    {path:"/write_report/:id",component:write_report},
    {path:"/evaluation_1",component:evaluation_1},
    {path:"/evaluation_2",component:evaluation_2},
    
//  {path:"/tab3",component:tab3},
//  {path:"/tab4",component:tab4},
  ]
})
