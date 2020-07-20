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
Southern California|3/1/2020|C|Complete|1.188|1.146
Arkansas|2/29/2020|C|Complete|0.959|0.742
New Hampshire|2/29/2020|C|Complete|1.066|
Northern Pennsylvania|2/1/2020|C|Complete|0.841|-
Upper Hudson|2/1/2020|C|Complete|0.982|0.989
Eastern Iowa|1/28/2020|C|Complete|1.130|0.916
Nevada|1/26/2020|C|Complete|1.225|1.019
Mississippi Winter|1/25/2020|C|Complete|0.775|0.891
Western Pennsylvania|1/25/2020|C|Complete|0.996|1.061
Southwestern Illinois|1/20/2020|C|Complete|1.038|1.000
Florida Panhandle|1/18/2020|C|Complete|0.962|0.359
Deleware|1/11/2020|C|Complete|0.896|0.940
Lower Hudson|1/11/2020|C|Complete|1.085|1.181
Bergen County|1/5/2020|C|Complete|1.169|1.179
Eastern Kentucky|12/14/2019|C|Complete|1.006|-
Louisiana Fall|12/14/2019|C|Complete|0.874|-
Northwest Illinois|12/14/2019|C|Complete|0.974|0.851
Southern New Jersey|12/14/2019|C|Complete|1.055|1.019
Washington DC|12/7/2019|C|Complete|1.267|1.260
Boston Fall|11/23/2019|C|Complete|1.065|1.117
Southern Washington|11/23/2019|C|Complete|0.997|-
Western Washington|11/23/2019|C|Complete|0.929|0.929
Central Florida Fall|11/16/2019|C|Complete|1.007|0.766
Eastern Georgia Fall|11/16/2019|C|Complete|1.083|0.999
Greater Knoxville Fall|11/16/2019|C|Complete|0.846|-
Oahu|11/16/2019|C|Complete|1.068|-
South Florida Fall|11/16/2019|C|Complete|0.880|0.958
Buffalo|11/9/2019|C|Complete|0.960|0.726
Greater Dayton|11/9/2019|C|Complete|1.212|0.521
Northern Illinois|11/9/2019|C|Complete|1.228|1.234
Northern New Jersey|11/9/2019|C|Complete|1.092|1.153
West Viginia Fall|11/9/2019|C|Complete|0.860|0.827
Montana|11/5/2019|C|Complete|0.779|0.607
Central Georgia Fall|11/2/2019|C|Complete|0.898|0.722
Eastern Washington|11/2/2019|C|Complete|0.848|0.717
Northern California Fall|10/27/2019|C|Complete|1.222|1.212

## The Rankings

### Varsity Rankings
Ranking|Team|State|Points
---|---|---|---
1.|Millburn A|New Jersey|2105.886
2.|Arcadia A|California|2092.585
3.|Russellville A|Arkansas|2037.378
4.|Stevenson C|Illinois|1925.355
5.|Team Pi-oneers A|California|1885.982
6.|Cambridge A|Georgia|1876.142
7.|Team Coldhug A|Connecticut|1867.569
8.|Great Valley A|Pennsylvania|1861.875
9.|Trinity Prep A|Florida|1848.294
10.|Millburn C|New Jersey|1839.365

### Junior Varsity Rankings
Ranking|Team|State|Points
---|---|---|---
1.|Hunter College High B||New York|2073.902
2.|Churchill A|New Jersey|2041.770
3.|Methacton C|Pennsylvania|1899.636
4.|Montgomery Blair B|Maryland|1892.820
5.|Ridgewood C|New Jersey|1876.587
6.|Ransom Everglades C|Florida|1876.026
7.|Saggitarius A|California|1831.068
8.|Mission San Jose|California|1830.233
9.|Phillips Exeter B|New Hampshire|1798.978
10.|Stevenson E|Illinois|1791.394
