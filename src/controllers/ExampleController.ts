import { Request, Response } from 'express'

class ExampleController {
    async show(req: Request, res: Response): Promise<void> {
        res.send('ok')
    }
}

export default new ExampleController()
