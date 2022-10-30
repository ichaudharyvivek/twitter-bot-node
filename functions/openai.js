require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

// Setup Open AI Configurations
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

// Get API Instance
const openai = new OpenAIApi(configuration);

// Function to create new tweet
const createTweet = async () => {
  // Open AI GPT3 takes many arguments of which prompt is the most important one. Prompt can be a string or array of strings.
  // Note: Open AI is not free. At the time of writing this, we get $18 worth of credit which automatically expires in few months.
  //       Every request you make to the API is chargeable. Use with care.
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt:
      'Create an outline for an essay about Nikola Tesla and his contributions to technology:',
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  console.log(response.data.choices[0].text);
  return response.data.choices[0].text;
};

createTweet();
