# Hardin-Bernhardt Ranks
Hardin-Bernhardt Ranks is a new way of ranking NHBB teams using a modified version of the Go Elo formula that takes into account strength of field and margin of victory.

## The Formulas
### Expected Score Formula
expected score of A = 1 / ((e^((rank of B - rank of A) / rank of A)) + 1)

### New Rank Formula
new rank of A = rank of A + K * q (score of A / (score of A + score of B) - expected score of A)

For more detailed information go to https://jacobhb175.github.io/
