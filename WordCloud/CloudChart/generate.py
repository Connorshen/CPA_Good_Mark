import jieba
import numpy as np
from PIL import Image
from wordcloud import WordCloud
import matplotlib.pyplot as plt


def extract():
    file = open("message.js", "r")
    lines = file.readlines()
    messages = []
    for line in lines:
        if "m_nsContent" in line:
            if "<" in line:
                continue
            if "image" in line:
                continue
            if "jpeg" in line:
                continue
            if "mp4" in line:
                continue
            line = line.replace("m_nsContent", "")
            line = line.replace("\"", "")
            line = line.replace("\n", "")
            line = line.replace(":", "")
            line = line.replace(" ", "")
            line = line.replace("哈", "")
            messages.append(line)
    file.close()
    file = open("message.txt", "w")
    for message in messages:
        file.write(message + "\n")
    file.close()


def split_word():
    messages = open("message.txt", "r")
    stop_words = open("chinese_stop_words.txt", "r")
    stop_words = stop_words.readlines()
    messages = messages.readlines()
    stop_word_list = []
    results = []
    for stop_word in stop_words:
        stop_word = stop_word.replace("\n", "")
        stop_word_list.append(stop_word)
    for message in messages:
        message = message.replace("\n", "")
        cut_text = list(jieba.cut(message))
        cut_text_filtered = []
        for word in cut_text:
            if word not in stop_word_list:
                cut_text_filtered.append(word)
        results.extend(cut_text_filtered)
    results = " ".join(results)
    return results


def paint(text):
    mask = np.array(Image.open("binary.png"))
    font = 'simhei.ttf'
    wc = WordCloud(background_color="white", collocations=False, font_path=font, width=4400, height=4400, margin=2,
                   mask=mask,
                   max_font_size=120, min_font_size=20).generate(text)
    plt.imshow(wc)
    plt.axis("off")
    plt.show()
    wc.to_file('cloud_map.png')


extract()
result = split_word()
paint(result)
