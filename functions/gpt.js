// functions/gpt.js

const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', JSON.parse(event.body), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error calling OpenAI API:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};