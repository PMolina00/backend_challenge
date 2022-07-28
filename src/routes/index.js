import { Router } from 'express'

const router = Router()

/**
 * Method Get /iecho
 * Response string reverse
 */

router
  .route('/iecho')
  .get((req, res) => {
    if (req.query.text) {
      const text = req.query.text
      let newText = ''
      for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i]
      }
      const palindromeRes = newText === text
      const data = { text: newText, palindrome: palindromeRes }
      res.json(data)
    } else {
      res.status(400).json({ error: 'no text' })
    }
  })

export default router
