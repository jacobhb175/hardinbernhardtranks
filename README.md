# Hardin-Bernhardt Ranks
Hardin-Bernhardt Ranks is a new way of ranking NHBB teams using a modified version of the Go Elo formula that takes into account strength of field and margin of victory.

## The Formulas
### Expected Score Formula
expected score of A = 1 / ((e^((rank of B - rank of A) / rank of A)) + 1)

### New Rank Formula
new rank of A = rank of A + q * K * ((score of A / ((score of A + score of B) * average T-value)) - expected score of A)

## The Variables
### q-Value
The q-value is used to represent strength of field at a tournament and intended to help improve elo as a measure of skill unaffected by the field a team is up against, and thus more useful and accurate as a comparison between teams from different regions. It is calculated as a ratio of average total points scored per game at a given tournament : average total points scored per game on a given set, and is calculated independently the for MS, JV, and Varsity fields.
### T-Value
The T-value is used to account for the inherent issues in equating the percent chance of a given winning to the percent of total points that team will score. It is calculated as a ratio of the percent of total points scored by a given team : the percent chance given to that team to win. The g-value is used to account for the disparity in game numbers between tournaments, and is set equal to 10/games played.

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
1.|Millburn A|New Jersey|2105.886
2.|Arcadia A|California|2082.677
3.|Russellville A|Arkansas|2037.378
4.|Stevenson C|Illinois|1925.355
5.|Team Pi-oneers A|California|1885.982
6.|Cambridge A|Georgia|1876.142
7.|Team Coldhug A|Connecticut|1867.569
8.|Great Valley A|Pennsylvania|1861.875
9.|Trinity Prep A|Florida|1848.294
10.|Canyon Crest Academy A|California|1845.995

### Junior Varsity Rankings
Ranking|Team|State|Points
---|---|---|---
1.|Hunter College High B|New York|2074.658
2.|Churchill A|New Jersey|2042.498
3.|Methacton C|Pennsylvania|1900.241
4.|Montgomery Blair B|Maryland|1893.419
5.|St. Margaret's A|California|1885.588
6.|Ridgewood C|New Jersey|1877.172
7.|Ransom Everglades C|Florida|1876.610
8.|Sagittarius|California|1831.614
9.|Mission San Jose|California|1830.778
10.|Phillips Exeter B|New Hampshire|1799.496
