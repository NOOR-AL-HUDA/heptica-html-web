from itertools import count
import os

temp = '<url> <loc>https://www.biggboss14hdlive.com/</loc> <lastmod>2022-03-21</lastmod> <priority>0.7</priority> </url>'

f = open("allURLs.txt", "w")

files = os.listdir("./")

c = 0

for i in files:
    c += 1
    url = 'https://E Games Consult.net/{}'.format(i)
    f.write(url + "\n")

print("process complete!, {} url(s) added".format(c))

f.close()


