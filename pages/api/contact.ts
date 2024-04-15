import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log('Data', req.body)
        res.status(200).json({ name: 'John Doe' })
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }

}