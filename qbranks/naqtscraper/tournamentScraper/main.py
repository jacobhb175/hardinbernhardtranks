import csv
from urllib.request import urlopen
from bs4 import BeautifulSoup
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
    print(td)'''

def get_tournaments(tournamentUrl):
    newTournamentUrl = tournamentUrl.replace('standings', 'round')
    csvFile = open('Tal-Atkins-Data.csv', 'wt+')
    for x in range(1, 12):
        roundUrl = newTournamentUrl + '&round=' + str(x)
        html = urlopen(roundUrl)
        bs = BeautifulSoup(html, 'html.parser')

        table = bs.findAll('table')[1]
        rows = table.findAll('tr')
        writer = csv.writer(csvFile)
        try:
            for row in rows:
                csvRow = []
                for cell in row.findAll(['td', 'th']):
                    csvRow.append(cell.get_text())
                    # print(csvRow)
                    if len(csvRow) == 15:
                        writer.writerow(csvRow)
        finally:
            print()
    csvFile.close()

get_tournaments('https://www.naqt.com/stats/tournament/standings.jsp?tournament_id=11773')