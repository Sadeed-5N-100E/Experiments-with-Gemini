# Custom-LLM
A Flask web application that uses Google's Gemini Flask 1.5 model to generate responses to user queries.
Feel free to use it for your own use cases.  Feel free to fork.

## Setup Instructions
In order to run this project
1. Clone the repository
2. Install dependencies
```bash
pip install -r requirements.txt
```
3. Set up environment variables
- Create a `.env` file in the root directory
- Get your own Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey):
```
GOOGLE_API_KEY=your_api_key_here
```

## Features
- Web interface for interacting with Gemini AI
- Real-time response generation
- Modern and responsive UI

## Technologies Used
- Flask
- Google Generative AI (Gemini 1.5)
- Python-dotenv
- HTML/CSS/JavaScript
