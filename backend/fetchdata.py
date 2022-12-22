import numpy as np
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import inspect
from pathlib import Path
import string


def clean(inp):
    inp = inp[0]
    inp = inp.translate(str.maketrans('', '', string.punctuation))
    inp = inp.replace('\n', ' ')
    inp = inp.replace('\t', ' ')
    inp = inp.strip()
    inp = inp.lower()
    return inp


def get_words_list(training_size=200):
    DATA = Path("/dataset/books.db")
    engine = create_engine("sqlite://" + str(DATA))

    # query the data
    text_files_df = pd.read_sql("select text from text_files order by RANDOM() limit "+str(training_size), con=engine)
    text_list = text_files_df.values.tolist()

    # clean the data
    text_list = list(map(clean, text_list))
    final_words_list = []

    for text in text_list:
        splitted = text.split(' ')
        for word in splitted:
            if not word == "":
                final_words_list.append(word)

    return final_words_list
