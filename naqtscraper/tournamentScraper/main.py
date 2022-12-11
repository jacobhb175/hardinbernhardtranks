
import csv
from urllib.request import urlopen
from bs4 import BeautifulSoup
import urllib.request

user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'

#url = "http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers"
url = "https://hsquizbowl.org/db/tournaments/7530/stats/lunch_(1-5)/"
headers={'User-Agent':user_agent,}

def get_HSQBtournaments2(url):
    #html = urlopen(url)
    #bs = BeautifulSoup(html, 'html.parser')
    csvFile = open('SCOTTIE22-Data.csv', 'wt+')
    htmlFile = open('SCOTTIE22-Stats.html', 'w')
    request=urllib.request.Request(url,None,headers) 
    response = urllib.request.urlopen(request)
    data = response.read() 
    print(data)
    htmlFile.write(str(data))
    htmlFile.close()

'''
for x in range(1, 49):
    if x % 2 == 0:
        table = bs.findAll('table')[x]
        rows = table.findAll('tr')

        writer = csv.writer(csvFile)
        try:
            for row in rows:
                csvRow = []
                for cell in row.findAll(['td', 'th']):
                    csvRow.append(cell.get_text())
                    writer.writerow(csvRow)
        finally:
            print()
csvFile.close()'''

#import requests

#def roundScraper(roundUrl):

'''def get_stats(my_url):
    uClient = uReq(my_url)
    page_html = uClient.read()
    uClient.close()
    page_soup = soup(page_html, "html.parser")
    containers = page_soup.findAll("div", {"class": "_3O0U0u"})
    print(len(containers))
    r = requests.get(roundUrl)
    soup = BeautifulSoup(r.text, "html.parser")
    #print(roundUrl)
    #th=soup.find_all('th')
    #print(th)
    td=soup.find_all('td')
    print(td)
'''

'''
def get_HSQBtournaments(HSQBtournamentUrl):
    html = urlopen(HSQBtournamentUrl)
    bs = BeautifulSoup(html, 'html.parser')
    csvFile = open('CORGI-Data.csv', 'wt+')
    for x in range(1,49):
        if x%2 == 0:
            table = bs.findAll('table')[x]
            rows = table.findAll('tr')

            writer = csv.writer(csvFile)
            try:
                for row in rows:
                    csvRow = []
                    for cell in row.findAll(['td', 'th']):
                        csvRow.append(cell.get_text())
                        writer.writerow(csvRow)
            finally:
                print()
    csvFile.close()
'''

get_HSQBtournaments2('https://hsquizbowl.org/db/tournaments/7596/stats/prelims_(rounds_1-5)/games')
'''
HTMLFileToBeOpened = open("UKY-Stats.html", "r")
contents = HTMLFileToBeOpened.read()
beautifulSoupText = BeautifulSoup(contents, 'lxml')
print(beautifulSoupText.body.prettify())
for tag in beautifulSoupText.findAll(True):
    print(tag.name, " : ", len(beautifulSoupText.find(tag.name).text))
    
html = urlopen('CORGI-Stats.html')
bs = BeautifulSoup(html, 'html.parser')
for x in range(1, 49):
    if x % 2 == 0:
        table = bs.findAll('table')[x]
        rows = table.findAll('tr')

        writer = csv.writer(csvFile)
        try:
            for row in rows:
                csvRow = []
                for cell in row.findAll(['td', 'th']):
                    csvRow.append(cell.get_text())
                    writer.writerow(csvRow)
        finally:
            print()
csvFile.close()
'''



csvFile = open('ACFWINTER-Data.csv', 'wt+')
with open('ACFWINTER-Stats.html') as f:
    # read File
    content = f.read()
    # parse HTML
    soup = BeautifulSoup(content, 'html.parser')
    y = 0

    for x in range(0, 300):
        if x % 1 == 0:
            if x % 1 == 0:
                font = soup.findAll('h3')[x]
                print("xfont",x, font)
                writer = csv.writer(csvFile)
                csvRow = []
                fontSplitZero = str(font).split("</span>")
                print("fs0",fontSplitZero)
                if x == 102:
                    fontSplitOne=str(fontSplitZero[0]).split("<")
                    print("fs1A", fontSplitOne)
                    fontSplitOnePointFive=str(fontSplitOne[1]).split(">")
                    print("fs1.5A", fontSplitOnePointFive)
                    fontSplitTwo = fontSplitOnePointFive[1]
                    print("fs2A", fontSplitTwo)
                    finalFontSplit=str(fontSplitTwo).split(", ")
                    print("ffsA", finalFontSplit)
                    rowArray = []
                    A = (str(finalFontSplit[0]).rpartition(" "))
                    B = (str(finalFontSplit[1]).rpartition(" "))
                    rowArray.append(A[0])
                    rowArray.append(A[2])
                    rowArray.append(B[0])
                    rowArray.append(B[2])
                    print("rA", rowArray)
                    csvRow = rowArray
                    writer.writerow(csvRow)
                else:
                    fontSplitOne=str(fontSplitZero[1]).split("<")
                    print("fs1", fontSplitOne)
                    fontSplitTwo = fontSplitOne
                    # fontSplitTwo = str(fontSplitOne[1]).split(">")
                    # print(fontSplitTwo[1])
                    finalFontSplit = str(fontSplitTwo[0]).split(", ")
                    print("ffs", finalFontSplit)
                    rowArray = []
                    A = (str(finalFontSplit[0]).rpartition(" "))
                    B = (str(finalFontSplit[1]).rpartition(" "))
                    rowArray.append(A[0])
                    rowArray.append(A[2])
                    rowArray.append(B[0])
                    rowArray.append(B[2])
                    print("rA", rowArray)
                    csvRow = rowArray
                    writer.writerow(csvRow)
        else:
            print("RED",x)
            if y == 1:
                y = 0
            elif y == 0:
                y = 1
'''

    for x in range(0, 200):
        if x % 13 != 0 and x != 89 and x != 101:
            #print(1, x, soup.findAll('font')[x])
            if (x+y) % 2 == 0 and x != 76 and x != 78 and x != 90:
                font = soup.findAll('font')[x]
                print("xfont",x, font)
                writer = csv.writer(csvFile)
                csvRow = []
                fontSplitZero = str(font).split("</font>")
                fontSplitOne=str(fontSplitZero[0]).split(">")
                fontSplitTwo = fontSplitOne[1]
                print("fs1", fontSplitTwo)
                #fontSplitTwo = str(fontSplitOne[1]).split(">")
                #print(fontSplitTwo[1])
                finalFontSplit = str(fontSplitTwo).split(", ")
                print("ffs",finalFontSplit)
                rowArray = []
                A=(str(finalFontSplit[0]).rpartition(" "))
                B=(str(finalFontSplit[1]).rpartition(" "))
                rowArray.append(A[0])
                rowArray.append(A[2])
                rowArray.append(B[0])
                rowArray.append(B[2])
                print("rA",rowArray)
                csvRow=rowArray
                writer.writerow(csvRow)
        else:
            print("RED",x)
            if y == 1:
                y = 0
            elif y == 0:
                y = 1'''
csvFile.close()
