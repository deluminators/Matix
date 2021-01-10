import numpy as np
import pandas as pd
import tensorflow as tf
import re
import codecs
import os
from nltk.tokenize import RegexpTokenizer
import utilityFunctions as uf

#Merging sentences with labels to create the processed dataset
df_data_sentence = pd.read_table('dictionary.txt')
df_data_sentence_processed = df_data_sentence['Phrase|Index'].str.split('|', expand=True)
df_data_sentence_processed = df_data_sentence_processed.rename(columns={0: 'Phrase', 1: 'phrase_ids'})

# read sentiment labels into df
df_data_sentiment = pd.read_table('sentiment_labels.txt')
df_data_sentiment_processed = df_data_sentiment['phrase ids|sentiment values'].str.split('|', expand=True)
df_data_sentiment_processed = df_data_sentiment_processed.rename(columns={0: 'phrase_ids', 1: 'sentiment_values'})


#combine data frames containing sentence and sentiment
processed_data = df_data_sentence_processed.merge(df_data_sentiment_processed, how='inner', on='phrase_ids')

#Creating embeddings
numClasses = 10
gloveFile='glove_6B_100d.txt'
#Load embeddings for the filtered glove list

weight_matrix, word_idx = uf.load_embeddings(gloveFile)
   
# create test, validation and trainng data 
all_data = processed_data
data_dir=" "
train_data, test_data, dev_data = uf.training_data_split(all_data, 0.8, data_dir)
train_data = train_data.reset_index()
dev_data = dev_data.reset_index()
test_data = test_data.reset_index()    
maxSeqLength, avg_words, sequence_length = uf.maxSeqLen(all_data)
  
# load Training data matrix
train_x = uf.tf_data_pipeline_nltk(train_data, word_idx, weight_matrix, maxSeqLength)
test_x = uf.tf_data_pipeline_nltk(test_data, word_idx, weight_matrix, maxSeqLength)
val_x = uf.tf_data_pipeline_nltk(dev_data, word_idx, weight_matrix, maxSeqLength)    
# load labels data matrix
train_y = uf.labels_matrix(train_data)
val_y = uf.labels_matrix(dev_data)
test_y = uf.labels_matrix(test_data)


import keras
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Flatten
from keras.layers import LSTM
from keras.layers.embeddings import Embedding
from keras.layers import Bidirectional
from keras.preprocessing import sequence
from keras.layers import Dropout
from keras.models import model_from_json
from keras.models import load_model

EMBEDDING_DIM = 100
max_words = 56 # max no of words in your training data
batch_size = 2000 # batch size for training

weight_matrix, word_idx = uf.load_embeddings(gloveFile)

# create the model
model = Sequential()
model.add(Embedding(len(weight_matrix), EMBEDDING_DIM, weights=[weight_matrix], input_length=max_words, trainable=False))
model.add(Bidirectional(LSTM(128, dropout=0.2, recurrent_dropout=0.2)))
model.add(Dense(512, activation='relu'))
model.add(Dropout(0.50))
model.add(Dense(10, activation='softmax'))
# Adam Optimiser
model.compile(loss='categorical_crossentropy',optimizer='adam', metrics=['accuracy'])

saveBestModel = keras.callbacks.ModelCheckpoint('../best_weight_glove_bi_100d.hdf5', monitor='val_acc', verbose=0, save_best_only=True, save_weights_only=False, mode='auto', period=1)
earlyStopping = keras.callbacks.EarlyStopping(monitor='val_loss', min_delta=0, patience=3, verbose=0, mode='auto')

# Fit the model
model.fit(train_x, train_y, batch_size=batch_size, epochs=25,validation_data=(val_x, val_y), callbacks=[saveBestModel, earlyStopping])
# Final evaluation of the model
score, acc = model.evaluate(test_x, test_y, batch_size=batch_size)
    
model.save_weights("SentimentAnalysis.h5")

