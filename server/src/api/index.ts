import express from 'express'

import { mockUsers } from '../mocks/users'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

router.get('/users', (req, res) => {
  res.send(mockUsers)
})

export default router
