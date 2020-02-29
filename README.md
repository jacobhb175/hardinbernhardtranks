# Hardin-Bernhardt Ranks
Hardin-Bernhardt Ranks is a new way of ranking NHBB teams using a modified version of the Go Elo formula that takes into account strength of field and margin of victory.

# The Formulas
Expected Score:
expScore = 1/((Math.E^((B.rank-A.rank)/A.rank))+1)

New Rank:
A.rank = A.rank + q*K*((AScore/((AScore+BScore)*avgT))-expScoreA)
