# Markov Shakespeare
Markov Shakespeare is a classical passage (sentence, paragraph, essay) generator using the Markov Chain model trained by the classic literature dataset.

## Technologies
Python (with NumPy, Pandas), Flask, SQLite, JavaScript, React

## Explanation
To learn more about the Markov Chain, [read here](https://en.wikipedia.org/wiki/Markov_chain). The data is trained base on a Kaggle dataset of over 10,000 text files of over 1,000 classic literatures. 


<img src="https://setosa.io/ev/markov-chains/fb-thumb.png" alt="Markov Chain" border="0">


The React app is connected to the Flask server, so it can send API requests and receive response from the server.

In the app, you can set the level of composition (8 different levels varied by training sizes), the initial prompt, and length of the passage (9 different default length options). 

## Demos
Visit the `demo` directory in this repository.

First, select your Composition Level: Junior, Intermediate, Advanced, Master, William Shakespeare, Super William Shakespeare, Markov Shakespeare, and Super Markov Shakespeare. This corresponds to the training size and intensity of the model. 

<img src="https://github.com/ricsign/markov-shakespeare/blob/main/demo/1.png?raw=true" alt="Markov Chain" border="0">

Next, type the initial word you want the model to start. If you input nothing, the model will generate a random passage.

<img src="https://github.com/ricsign/markov-shakespeare/blob/main/demo/2.png?raw=true" alt="Markov Chain" border="0">

Lastly, select the length of passage you wish to generate: Short Sentence, Long Setence, Short Paragraph, Long Paragraph, Short Essay, Long Essay, Literature, and Super Literature. Each option is longer than the previous ones.

<img src="https://github.com/ricsign/markov-shakespeare/blob/main/demo/3.png?raw=true" alt="Markov Chain" border="0">

The model will produce the result. The result is almost guaranteed to be different every time since the data is produced by a trained Markov Chain model.

<img src="https://github.com/ricsign/markov-shakespeare/blob/main/demo/4.png?raw=true" alt="Markov Chain" border="0">
<img src="https://github.com/ricsign/markov-shakespeare/blob/main/demo/5.png?raw=true" alt="Markov Chain" border="0">

## How to Use
- Clone this repository or download the code.  
- To run the frontend, enter the directory and run `npm start`. Then open `http://localhost:3000` to view it in your browser. This application has a proxy to port `8001` so it connects to the backend server. You can change it in `package.json`.
- To run the backend, enter a Python virtual enviornment. First install the dependencies listed in `requirements.txt`. Then download the database at `https://www.kaggle.com/code/raynardj/starter-classic-english-literature` to the `dataset` directory. Run the program `main.py`, and it will start at port `8001`. 



