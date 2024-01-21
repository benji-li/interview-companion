const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
require('dotenv').config()

const openai = new OpenAI();

router.post('/', async (req, res, next) => {
    const {prompt} = req.body;

    const completion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        max_tokens: 512,
        temperature: 0.2,
        messages: [{"role": "user", "content": prompt}]
    });
    res.send(completion.choices[0].message.content);
});

module.exports = router;
