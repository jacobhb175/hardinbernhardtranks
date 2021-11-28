import csv
from urllib.request import urlopen
from bs4 import BeautifulSoup
import urllib.request

def get_individual(tournamentUrl):
    csvFile = open('TEST-Data.csv', 'wt+')
    html = urlopen(tournamentUrl)
    bs = BeautifulSoup(html, 'html.parser')

    table = bs.findAll('table')[1]
    rows = table.findAll('tr')
    writer = csv.writer(csvFile)
    try:
        for row in rows:
            csvRow = []
            for cell in row.findAll(['td', 'th']):
                csvRow.append(cell.get_text())
                if len(csvRow) == 9:
                    writer.writerow(csvRow)
    finally:
        print()
    csvFile.close()


get_individual("https://www.naqt.com/stats/tournament/player.jsp?team_member_id=723325")