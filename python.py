e = 2.7;

def cExpScore(A,B):
    if A < B:
        return 1/(1+pow(e,((B-A)/400)));
    if B > A:
        return 1-1/(1+pow(e,((A-B)/400)));

print(cExpScore(1400,1600));

