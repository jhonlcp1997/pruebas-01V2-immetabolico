// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  dni: string,
  email: string,
  number: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    name: 'John Doe',
    dni: '9393939',
    email: 'adafafaf',
    number: '12121212'
  })
}
