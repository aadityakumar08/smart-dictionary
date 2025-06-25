# API Documentation

## Overview

Smart Dictionary uses the Dictionary API by API Ninjas to fetch word definitions, examples, and related information.

## API Endpoint

```
GET https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word={word}
```

## Authentication

The API requires authentication via RapidAPI headers:

```javascript
headers: {
  'x-rapidapi-key': 'YOUR_API_KEY',
  'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
}
```

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `word` | string | Yes | The word to look up |

## Response Format

```json
{
  "word": "example",
  "definition": "A thing characteristic of its kind or illustrating a general rule...",
  "valid": true
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `word` | string | The searched word |
| `definition` | string | The definition(s) of the word |
| `valid` | boolean | Whether the word was found |

## Error Responses

### 404 Not Found
```json
{
  "valid": false,
  "definition": ""
}
```

### 429 Rate Limit Exceeded
```json
{
  "message": "Rate limit exceeded"
}
```

## Usage Examples

### JavaScript Fetch Example

```javascript
const searchWord = async (word) => {
  const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${encodeURIComponent(word)}`;
  
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'YOUR_API_KEY',
      'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    
    if (data.valid) {
      console.log(`Definition: ${data.definition}`);
    } else {
      console.log('Word not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### cURL Example

```bash
curl --request GET \
  --url 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=example' \
  --header 'x-rapidapi-key: YOUR_API_KEY' \
  --header 'x-rapidapi-host: dictionary-by-api-ninjas.p.rapidapi.com'
```

## Rate Limits

- **Free Plan**: 100 requests per month
- **Pro Plan**: 10,000 requests per month
- **Ultra Plan**: 100,000 requests per month

## Getting Your API Key

1. Visit [RapidAPI](https://rapidapi.com/dictionaryapi-ninjas-default/api/dictionary-by-api-ninjas/)
2. Sign up for a free account
3. Subscribe to the Dictionary API
4. Copy your API key from the dashboard

## Error Handling

The application includes comprehensive error handling for:

- Network errors
- API rate limiting
- Invalid responses
- Missing definitions

## Alternative APIs

If you need to switch APIs, consider these alternatives:

- **Free Dictionary API**: https://dictionaryapi.dev/
- **Merriam-Webster API**: https://www.dictionaryapi.com/
- **Oxford Dictionaries API**: https://developer.oxforddictionaries.com/

## Security Notes

- Never expose your API key in client-side code for production
- Use environment variables for API keys
- Implement proper rate limiting on your end
- Consider using a backend proxy for API calls 