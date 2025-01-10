# Custom-LLM
A Flask web application that uses Google's Gemini AI model to generate responses to user queries.

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/Custom-LLM.git
cd Custom-LLM
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Set up environment variables
- Create a `.env` file in the root directory
- Add your Google API key:
```
GOOGLE_API_KEY=your_api_key_here
```
> Note: You can get your API key from the [Google AI Studio](https://makersuite.google.com/app/apikey)

4. Run the application
```bash
python app.py
```

The application will be available at `http://localhost:5000`

## Features
- Web interface for interacting with Gemini AI
- Real-time response generation
- Modern and responsive UI

## Technologies Used
- Flask
- Google Generative AI (Gemini 1.5)
- Python-dotenv
- HTML/CSS/JavaScript