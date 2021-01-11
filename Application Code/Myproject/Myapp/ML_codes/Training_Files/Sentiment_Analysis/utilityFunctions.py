import pandas as pd
import numpy as np
import tensorflow as tf
import re
import codecs
import os
from nltk.tokenize import RegexpTokenizer



def filter_glove(full_glove_path,):
  vocab = set()
  sentence_path = os.path.join(data_dir,'SOStr.txt')
  filtered_glove_path = os.path.join(data_dir, 'filtered_glove.txt')

  with codecs.open(sentence_path, encoding='utf-8') as f:
    for line in f:
      # Drop the trailing newline and strip backslashes. Split into words.
      vocab.update(line.strip().replace('\\', '').split('|'))
  nread = 0
  nwrote = 0
  with codecs.open(full_glove_path, encoding='utf-8') as f:
    with codecs.open(filtered_glove_path, 'w', encoding='utf-8') as out:
      for line in f:
        nread += 1
        line = line.strip()
        if not line: continue
        if line.split(u' ', 1)[0] in vocab:
          out.write(line + '\n')
          nwrote += 1
  print('read %s lines, wrote %s' % (nread, nwrote))


def load_embeddings(embedding_path):
  """Loads embedings."""
  print('loading word embeddings from %s' % embedding_path)
  weight_vectors = []
  word_idx = {}
  with codecs.open(embedding_path, encoding='utf-8') as f:
    for line in f:
      word, vec = line.split(u' ', 1)
      word_idx[word] = len(weight_vectors)
      weight_vectors.append(np.array(vec.split(), dtype=np.float32))
.
  word_idx[u'-LRB-'] = word_idx.pop(u'(')
  word_idx[u'-RRB-'] = word_idx.pop(u')')
  # Random embedding vector for unknown words.
  weight_vectors.append(np.random.uniform(
      -0.05, 0.05, weight_vectors[0].shape).astype(np.float32))
  return np.stack(weight_vectors), word_idx



def training_data_split(all_data, spitPercent, data_dir):

    msk = np.random.rand(len(all_data)) < spitPercent
    train_only = all_data[msk]
    test_and_dev = all_data[~msk]


    msk_test = np.random.rand(len(test_and_dev)) <0.5
    test_only = test_and_dev[msk_test]
    dev_only = test_and_dev[~msk_test]

    dev_only.to_csv('dev.csv')
    test_only.to_csv('test.csv')
    train_only.to_csv('train.csv')

    return train_only, test_only, dev_only

#Glove Vector 
def loadGloveModel(gloveFile):
    print ("Loading Glove Model")
    f = open(gloveFile,'r',encoding='utf-8')
    model = {}
    for line in f:
        try:
            splitLine = line.split()
            word = splitLine[0]
            embedding = [float(val) for val in splitLine[1:]]
            model[word] = embedding
        except:
            print (word)
            continue

    print ("Done.",len(model)," words loaded!")
    return model


# Create Vocab subset GLove vectors 
def word_vec_index(training_data, glove_model):

    sentences = training_data['Phrase'] # get the phrases as a df series
    #sentences = sentences[0:100]
    sentences_concat = sentences.str.cat(sep=' ')
    sentence_words = re.findall(r'\S+', sentences_concat)
    sentence_words_lwr = [x.lower() for x in sentence_words]
    subdict = {word: glove_model[word] for word in glove_model.keys() & sentence_words_lwr}

    vocab_df = pd.DataFrame(subdict)
    vocab_df.to_csv(vocab_path)
    return vocab_df
    
# Convertdf to list
def word_list(vocab_df):

    wordVectors = vocab_df.values.T.tolist()
    wordVectors_np = np.array(wordVectors)
    wordList = list(vocab_df.columns.values)

    return wordList, wordVectors_np
    
    
# tensorflow data pipeline 
def maxSeqLen(training_data):

    total_words = 0
    sequence_length = []
    idx = 0
    for index, row in training_data.iterrows():

        sentence = (row['Phrase'])
        sentence_words = sentence.split(' ')
        len_sentence_words = len(sentence_words)
        total_words = total_words + len_sentence_words

        # get the length of the sequence of each training data
        sequence_length.append(len_sentence_words)

        if idx == 0:
            max_seq_len = len_sentence_words


        if len_sentence_words > max_seq_len:
            max_seq_len = len_sentence_words
        idx = idx + 1

    avg_words = total_words/index

    # convert to numpy array
    sequence_length_np = np.asarray(sequence_length)

    return max_seq_len, avg_words, sequence_length_np

  #%%
def tf_data_pipeline(data, word_idx, weight_matrix, max_seq_len):

    #training_data = training_data[0:50]

    maxSeqLength = max_seq_len #Maximum length of sentence
    no_rows = len(data)
    ids = np.zeros((no_rows, maxSeqLength), dtype='int32')
    # conver keys in dict to lower case
    word_idx_lwr =  {k.lower(): v for k, v in word_idx.items()}
    idx = 0

    for index, row in data.iterrows():


        sentence = (row['Phrase'])
        sentence_words = sentence.split(' ')

        i = 0
        for word in sentence_words:
            #print(index)
            word_lwr = word.lower()
            try:
                #print (word_lwr)
                ids[idx][i] =  word_idx_lwr[word_lwr]

            except Exception as e:
                #print (e)
                #print (word)
                if str(e) == word:
                    ids[idx][i] = 0
                continue
            i = i + 1
        idx = idx + 1
    return ids


# create labels matrix for the rnn


def tf_data_pipeline_nltk(data, word_idx, weight_matrix, max_seq_len):

    #training_data = training_data[0:50]

    maxSeqLength = max_seq_len #Maximum length of sentence
    no_rows = len(data)
    ids = np.zeros((no_rows, maxSeqLength), dtype='int32')
    # conver keys in dict to lower case
    word_idx_lwr =  {k.lower(): v for k, v in word_idx.items()}
    idx = 0

    for index, row in data.iterrows():


        sentence = (row['Phrase'])
        #print (sentence)
        tokenizer = RegexpTokenizer(r'\w+')
        sentence_words = tokenizer.tokenize(sentence)
        #print (sentence_words)
        i = 0
        for word in sentence_words:
            #print(index)
            word_lwr = word.lower()
            try:
                #print (word_lwr)
                ids[idx][i] =  word_idx_lwr[word_lwr]

            except Exception as e:
                #print (e)
                #print (word)
                if str(e) == word:
                    ids[idx][i] = 0
                continue
            i = i + 1
        idx = idx + 1

    return ids


def labels_matrix(data):

    labels = data['sentiment_values']

    lables_float = labels.astype(float)

    cats = ['0','1','2','3','4','5','6','7','8','9']
    labels_mult = (lables_float * 10).astype(int)
    dummies = pd.get_dummies(labels_mult, prefix='', prefix_sep='')
    dummies = dummies.T.reindex(cats).T.fillna(0)
    labels_matrix = dummies.to_numpy()

    return labels_matrix


def labels_matrix_unmod(data):

    labels = data['sentiment_values']

    lables_float = labels.astype(float)

    labels_mult = (lables_float * 10).astype(int)
    labels_matrix = labels_mult.as_matrix()

    return labels_matrix


