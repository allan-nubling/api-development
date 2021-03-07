import { Router } from 'express'

// import AnalyticsReportController from '@controllers/analyticsReportController'
// import TemplateController from '@controllers/templateController'

const routes = Router()

routes.get('/mailer-api/', async (req, res) => {
    res.send('⚡️[server]: Server is running')
})

// routes.post('/mailer-api/:template/send', TemplateController.send)

// routes.get('/mailer-api/analytics-report', AnalyticsReportController.index)
// routes.get(
//     '/mailer-api/analytics-unsubscribe',
//     AnalyticsReportController.unsubscribe
// )

export default routes
