import csv
from urllib.request import urlopen
from bs4 import BeautifulSoup
import urllib.request

def get_tournaments(tournamentUrl):
    newTournamentUrl = tournamentUrl.replace('standings', 'round')
    csvFile = open('VCU-Data.csv', 'wt+')
    for x in range(1, 250):
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
                    # writer.writerow(csvRow)
                    if len(csvRow) == 15:
                        writer.writerow(csvRow)
        finally:
            print()
    csvFile.close()

get_tournaments("https://www.naqt.com/stats/tournament/standings.jsp?tournament_id=12708")