# Markov Shakespeare
Markov Shakespeare is a functional passage (sentence, paragraph, essay) generator using the Markov Chain model trained by the classic literature dataset.

## Technologies
Python (with Numpy, Pandas), Flask, SQLite, JavaScript, React

## Demos
Visit the `demo` directory in this repository.

## How to Use
- Clone this repository or download the code.  
- To run the frontend, enter the directory and run `npm start`. Then open `http://localhost:3000` to view it in your browser. This application has a proxy to port `8001` so it connects to the backend server. You can change it in `package.json`.
- To run the backend, enter a Python virtual enviornment. First install the dependencies listed in `requirements.txt`. Then download the database at `https://www.kaggle.com/code/raynardj/starter-classic-english-literature` to the `dataset` directory. Run the program `main.py`, and it will start at port `8001`. 

## Explanation
To learn more about the Markov Chain, [read here](https://en.wikipedia.org/wiki/Markov_chain). The data is trained base on a Kaggle dataset of over 10,000 text files of over 1,000 classic literatures. 


<img src="https://setosa.io/ev/markov-chains/fb-thumb.png" alt="Markov Chain" border="0">


The React app is connected to the Flask server, so it can send API requests and receive response from the server.


