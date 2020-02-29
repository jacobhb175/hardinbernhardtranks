# Hardin-Bernhardt Ranks
Hardin-Bernhardt Ranks is a new way of ranking NHBB teams using a modified version of the Go Elo formula that takes into account strength of field and margin of victory.

# The Formulas
Expected Score:
expScoreA = 1/((Math.E^((B.rank-A.rank)/A.rank))+1)

New Rank:
A.rank = A.rank + q*K*((AScore/((AScore+BScore)*avgT))-expScoreA)

# The Variables
The q-value is used to represent strength of field at a tournament and intended to help improve elo as a measure of skill unaffected by the field a team is up against, and thus more useful and accurate as a comparison between teams from different regions. It is calculated as a ratio of average total points scored per game at a given tournament : average total points scored per game on a given set, and is calculated independently the for MS, JV, and Varsity fields.
The T-value is used to account for the inherent issues in equating the percent chance of a given winning to the percent of total points that team will score. It is calculated as a ratio of the percent of total points scored by a given team : the percent chance given to that team to win.
