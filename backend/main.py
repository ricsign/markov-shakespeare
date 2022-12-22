import random
from flask import Flask, request, jsonify
from fetchdata import get_words_list
from graph import Graph, Vertex, make_graph, generate

app = Flask(__name__)


@app.route('/generate', methods=['GET'])
# arguments: training_size (optional), length (optional), initial_word (optional)
def get_generation():
    training_size = request.args.get("training_size")
    training_size = 50 if not training_size else int(training_size)
    length = request.args.get("length")
    length = 100 if not length else int(length)
    initial_word = request.args.get("initial_word")
    initial_word = '' if not initial_word else str(initial_word)

    words = get_words_list(training_size)
    g = make_graph(words)
    generated_text = generate(g, words, length, initial_word)
    generated_text = ' '.join(generated_text).capitalize() + '.'

    return jsonify(text=generated_text)


if __name__ == '__main__':
    app.run(port=8001)
