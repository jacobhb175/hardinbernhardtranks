import csv
from urllib.request import urlopen
from bs4 import BeautifulSoup
import urllib.request

user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'

# url = "http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers"
url = "https://hsquizbowl.org/db/tournaments/7212/stats/rounds_1-11/games/"
headers = {'User-Agent': user_agent, }

def get_tournaments(tournamentUrl):
    newTournamentUrl = tournamentUrl.replace('standings', 'round')
    csvFile = open('ICT-Data.csv', 'wt+')
    for x in range(1, 15):
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
                    print(csvRow)
                    # writer.writerow(csvRow)
                    if len(csvRow) == 15:
                        writer.writerow(csvRow)
        finally:
            print()
    csvFile.close()


get_tournaments("https://www.naqt.com/stats/tournament/standings.jsp?tournament_id=12404")