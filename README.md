# Hardin-Bernhardt Ranks
Hardin-Bernhardt Ranks is a new way of ranking NHBB teams using a modified version of the Go Elo formula that takes into account strength of field and margin of victory.

## The Formulas
### Expected Score Formula
expected score of A = 1 / ((e^((rank of B - rank of A) / rank of A)) + 1)

### New Rank Formula
new rank of A = rank of A + g * q (score of A / (score of A + score of B) - expected score of A)

## The Variables
### q-Value
The q-value is a multiplier used to represent strength of field at a tournament and intended to help improve elo as a measure of skill unaffected by the field a team is up against, and thus more useful and accurate as a comparison between teams from different regions. It is calculated as a ratio of average total points scored per game at a given tournament : average total points scored per game on a given set, and is calculated independently the for MS, JV, and Varsity fields.
### g-Value
The g-Value is a multiplier to adjust for the different formats of tournaments which lead some teams to play more or fewer games. It is set equal to 800/the number of games played by the team (not counting byes or crossover matches).


### Note: These statistics are from the 2019-2020 season. Rankings for the 2020-2021 season are currently in progress and will be released soon.
## List of Tournaments
Tournament|Date|Set Played|Status|Varsity q-Value|JV q-Value
---|---|---|---|---|---
Southern California|3/1/2020|C|Complete|1.188|1.147
Arkansas|2/29/2020|C|Complete|0.959|0.743
New Hampshire|2/29/2020|C|Complete|1.066|0.818
Northern Pennsylvania|2/1/2020|C|Complete|0.841|-
Upper Hudson|2/1/2020|C|Complete|0.982|0.990
Eastern Iowa|1/28/2020|C|Complete|1.130|0.917
Nevada|1/26/2020|C|Complete|1.225|1.020
Mississippi Winter|1/25/2020|C|Complete|0.775|0.892
Western Pennsylvania|1/25/2020|C|Complete|0.996|1.062
Southwestern Illinois|1/20/2020|C|Complete|1.038|1.001
Florida Panhandle|1/18/2020|C|Complete|0.962|0.360
Deleware|1/11/2020|C|Complete|0.896|0.941
Lower Hudson|1/11/2020|C|Complete|1.085|1.182
Bergen County|1/5/2020|C|Complete|1.169|1.180
Eastern Kentucky|12/14/2019|C|Complete|1.006|-
Louisiana Fall|12/14/2019|C|Complete|0.874|-
Northwest Illinois|12/14/2019|C|Complete|0.974|0.852
Southern New Jersey|12/14/2019|C|Complete|1.019|1.056
Washington DC|12/7/2019|C|Complete|1.267|1.261
Boston Fall|11/23/2019|C|Complete|1.065|1.118
Southern Washington|11/23/2019|C|Complete|0.997|-
Western Washington|11/23/2019|C|Complete|0.929|0.929
Central Florida Fall|11/16/2019|C|Complete|1.007|0.767
Eastern Georgia Fall|11/16/2019|C|Complete|1.083|1.000
Greater Knoxville Fall|11/16/2019|C|Complete|0.846|-
Oahu|11/16/2019|C|Complete|1.068|-
South Florida Fall|11/16/2019|C|Complete|0.880|0.959
Buffalo|11/9/2019|C|Complete|0.960|0.727
Greater Dayton|11/9/2019|C|Complete|1.212|0.521
Northern Illinois|11/9/2019|C|Complete|1.228|1.235
Northern New Jersey|11/9/2019|C|Complete|1.092|1.154
West Viginia Fall|11/9/2019|C|Complete|0.860|0.828
Montana|11/5/2019|C|Complete|0.779|0.608
Central Georgia Fall|11/2/2019|C|Complete|0.898|0.723
Eastern Washington|11/2/2019|C|Complete|0.848|0.718
Northern California Fall|10/27/2019|C|Complete|1.222|1.213

## The Rankings

### Varsity Rankings
Ranking|Team|State|Points
---|---|---|---
1.|Millburn A|New Jersey|2104.275
2.|Arcadia A|California|2072.387
3.|Russellville A|Arkansas|2060.707
4.|Team Coldhug A|Connecticut|1996.221
5.|Team Pi-oneers A|California|1983.979
6.|Collegiate A|Florida|1981.544
7.|Cambridge A|Georgia|1966.800
8.|Stevenson A|Illinois|1939.301
9.|Richard Montgomery A|Maryland|1938.246
10.|Saratoga A|California|1925.474

### Junior Varsity Rankings
Ranking|Team|State|Points
---|---|---|---
1.|Stevenson E|Illinois|2145.523
2.|Hunter B|New York|2072.991
3.|Churchill A|New Jersey|2040.958
4.|Ridgewood C|New Jersey|2040.198
5.|Ransom Everglades C|Florida|1997.725
6.|Methacton C|Pennsylvania|1990.755
7.|Montgomery Blair B|Maryland|1982.417
8.|McLean A|Virginia|1977.806
9.|St. Margaret's|California|1973.390
10.|Phillips Exeter B|New Hampshire|1918.715
