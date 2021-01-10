def sentimentPredict(data):
    import pandas as pd
    import numpy as np
    import keras
    from keras.models import Sequential
    from keras.layers import Dense
    from keras.layers import Flatten
    from keras.layers import LSTM
    from keras.layers.embeddings import Embedding
    from keras.layers import Bidirectional
    from keras.preprocessing import sequence
    from keras.layers import Dropout
    import h5py
    from keras.models import model_from_json
    from keras.models import load_model
    import json
    from nltk.tokenize import RegexpTokenizer
    
    weight_path = 'SentimentAnalysis.hdf5'
    trained_model = load_model(weight_path)
    trained_model.summary()
    word_idx = json.load(open("word_idx.txt"))

    live_list = []
    live_list_np = np.zeros((56,1))# split the sentence into its words and remove any punctuations.
    tokenizer = RegexpTokenizer(r'\w+')
    data_sample_list = tokenizer.tokenize(data)
    labels = np.array(['1','2','3','4','5','6','7','8','9','10'], dtype = "int")# get index for the live stage
    data_index = np.array([word_idx[word.lower()] if word.lower() in word_idx else 0 for word in data_sample_list])
    data_index_np = np.array(data_index)# padded with zeros of lengths 56 i.e maximum length
    padded_array = np.zeros(56)
    padded_array[:data_index_np.shape[0]] = data_index_np
    data_index_np_pad = padded_array.astype(int)
    live_list.append(data_index_np_pad)
    live_list_np = np.asarray(live_list)# get score from the model
    score = trained_model.predict(live_list_np, batch_size=1, verbose=0)
    single_score = np.round(np.argmax(score)/10, decimals=2) # maximum of the array i.e single band# weighted score of top 3 bands
    top_3_index = np.argsort(score)[0][-3:]
    top_3_scores = score[0][top_3_index]
    top_3_weights = top_3_scores/np.sum(top_3_scores)
    single_score_dot = np.round(np.dot(top_3_index, top_3_weights)/10, decimals = 2)
    
    return single_score_dot, single_score
