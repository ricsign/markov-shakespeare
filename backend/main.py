import random
from fetchdata import get_words_list
from graph import Graph, Vertex


def generate(g, words, length=50, initial_word=''):
    generated_text = []
    if len(initial_word) != 0 and initial_word in words:
        word = g.get_vertex(initial_word)
    else:
        word = g.get_vertex(random.choice(words))
    for _ in range(length):
        generated_text.append(word.value)
        word = g.get_next_word(word)
    return generated_text


def make_graph(words):
    g = Graph()
    prev_word = None
    for word in words:
        word_vertex = g.get_vertex(word)
        if prev_word:  # prev word should be a vertex
            prev_word.increment_edge(word_vertex)
        prev_word = word_vertex
    g.generate_probability_mappings()
    return g


def main():
    words = get_words_list(300)
    g = make_graph(words)
    generated_text = generate(g, words, 200)
    generated_text = ' '.join(generated_text).capitalize()+'.'
    return generated_text


print(main())
