# Hardin-Bernhardt Ranks
Hardin-Bernhardt Ranks is a new way of ranking NHBB teams, affiliated with NHBB Ranks, using a modified version of the Go Elo formula that takes into account strength of field and margin of victory.

## The Formulas
Expected Score:
expScoreA = 1/((Math.E^((B.rank-A.rank)/A.rank))+1)

New Rank:
A.rank = A.rank + q*K*((AScore/((AScore+BScore)*avgT))-expScoreA)

## The Variables
The q-value is used to represent strength of field at a tournament and intended to help improve elo as a measure of skill unaffected by the field a team is up against, and thus more useful and accurate as a comparison between teams from different regions. It is calculated as a ratio of average total points scored per game at a given tournament : average total points scored per game on a given set, and is calculated independently the for MS, JV, and Varsity fields.
The T-value is used to account for the inherent issues in equating the percent chance of a given winning to the percent of total points that team will score. It is calculated as a ratio of the percent of total points scored by a given team : the percent chance given to that team to win.

## List of Tournaments
Tournament|Date|Set Played|Status
---|---|---|---
Western New York|1/4/2020|C|Complete
Eastern Kentucky|12/14/2019|C|Complete
Louisiana Fall|12/14/2019|C|Complete
Northwest Illinois|12/14/2019|C|Complete
Southern New Jersey|12/14/2019|C|Complete
Washington DC|12/7/2019|C|Complete
Boston Fall|11/23/2019|C|Complete
Western Washington Fall|11/23/2019|C|Complete
Central Florida Fall|11/16/2019|C|Complete
Eastern Georgia Fall|11/16/2019|C|Complete
Greater Knoxville Fall|11/16/2019|C|Complete
Oahu|11/16/2019|C|Complete
South Florida Fall|11/16/2019|C|Complete
Buffalo|11/9/2019|C|Complete
Greater Dayton|11/9/2019|C|Complete
Northern Illinois|11/9/2019|C|Complete
Northern New Jersey|11/9/2019|C|Complete
West Viginia Fall|11/9/2019|C|Complete
Montana|11/5/2019|C|Complete
Central Georgia Fall|11/2/2019|C|Complete
Eastern Washington|11/2/2019|C|Complete
Northern California Fall|10/27/2019|C|Complete

## The Rankings

### Varsity Rankings
1. Millburn A New Jersey 2044.11
2. Stevenson A Illinois 1933.64
3. Hunter College High A New York 1889.57
4. Team Coldhug A Connecticut 1874.65
5. Stevenson C Illinois 1873
6. Cambridge Georgia 1834.8
7. Auburn A Illinois 1826.07
8. Trinity Prep A Florida 1819.35
9. High Tech A New Jersey 1796.55
10. Ransom Everglades A Florida 1781.55
11. Lambert Georgia 1774.34
12. Beavercreek A Ohio 1772.52
13. Starr's Mill A Georgia 1759.73
14. George Washington A West Virginia 1758.57
15. Boston Latin Massachusetts 1742.76
16. Glenbard West Illinois 1741.79
17. Millburn C New Jersey 1733.12
18. Team Pi-oneers California 1732.55
19. Jesuit A Washington 1729.51
20. Millburn B New Jersey 1727.02
21. Skyview A Montana 1725.81
22. Gonzaga Prep Washington 1722.47
23. Darien Connecticut 1716.15
24. Largo A Florida 1715.97
25. Belen Jesuit B Florida 1712.63
26. Ridgewood A New Jersey 1706.52
27. East Brunswick A New Jersey 1701.75
28. Richard Montgomery A Maryland 1701.12
29. Charleston Catholic A West Virginia 1699.08
30. Saratoga A California 1695.47
31. Blazer Kentucky 1694.77
32. Chattahoochee A Georgia 1692.5
33. Scarsdale New York 1684.55
34. Miami Palmetto B Florida 1681.4
35. Phillips Exeter A Massachusetts 1681.31
36. Oratory Prep New Jersey 1676.34
37. Nichols B New York 1675.34
38. Johnson A Kentucky 1670.86
39. Georgetown Day School A DC 1661.47
40. Barrington A Illinois 1661.37
41. Westview A Washington 1661.32
42. Archimedean A Florida 1660.04
43. Iolani B Hawaii 1651.4
44. Elgin Academy Illinois 1647.24
45. Wilton A Connecticut 1645.4
46. Ranney A New Jersey 1642.55
47. Belen Jesuit A Florida 1640.31
48. Oak Mountain Georgia 1639.39
49. Bozeman B Montana 1629.87
50. Lexington A Massachusetts 1618.17
51. King A Florida 1616.66
52. Montgomery Blair A Maryland 1615.6
53. Maryville Jr. High Tennessee 1615.41
54. Stanburg A Illinois 1612.25
55. Homewood-Flossmoor A Illinois 1609.58
56. King B Florida 1606.18
57. Gatlinburg-Pittman A Tennessee 1600.26
58. Miami Palmetto A Florida 1598.18
59. Moravian Academy New Jersey 1588.91
60. Iolani A Hawaii 1583.53
61. Dalton New York 1582.58
62. Princeton A New Jersey 1578.98
63. Brookwood A Georgia 1575.21
64. Hinsdale Central Illinois 1574.46
65. Stevenson B Illinois 1569.57
66. Stuyvesant New York 1567.19
67. Tenafly A New Jersey 1562.19
68. Zachary B Louisiana 1562.07
69. Columbia River A Washington 1561.94
70. Dunbar Kentucky 1560.16
71. Baton Rouge Episcopal Louisiana 1557.21
72. Mt. Spokane B Washington 1554.8
73. George Washington B West Virginia 1554.54
74. St. Albans West Virginia 1553.1
75. Coral Reef A Florida 1549.64
76. Hewlett A New Jersey 1548.7
77. Lynbrook California 1546.84
78. Coral Reef B Georgia 1546.53
79. Irvington New York 1543.44
80. Iroquois A New York 1543.13
81. Thomas Jefferson B Virginia 1541.01
82. St. Georges Washington 1533.78
83. St. Anselm's A Maryland 1532.35
84. Williams Bay A Illinois 1531.44
85. Miami Palmetto C Florida 1524.8
86. Nitro A West Virginia 1522.31
87. Berkeley Prep B Florida 1520.5
88. Greens Farms A Connecticut 1520.31
89. Veterans A Georgia 1516.62
90. Mountain Lakes A New Jersey 1516.28
91. Largo B Florida 1511.51
92. Eriksen A California 1510.54
93. Thomas Jefferson A Virginia 1508.65
94. Newark Academy New Jersey 1506.59
95. Zachary A Louisiana 1506.56
96. Saratoga B California 1506.45
97. Billings Senior A Montana 1506.31
98. Nichols A New York 1503.63
99. Johns Creek Georgia 1502.7
100. Westminster Christian Florida 1493.57
101. Princeton B New Jersey 1491.09
102. Central Kitsap Washington 1489.44
103. Starr's Mill B Georgia 1488.54
104. Team Gotham New York 1487.13
105. Salem B Massachusetts 1484.13
106. Ransom Everglades B Florida 1483.73
107. Baton Rouge Magnet Louisiana 1478.83
108. Trinity Prep B Florida 1478.18
109. East Brunswick B New Jersey 1475.37
110. Mt. Spokane A Washington 1474.37
111. Russell Kentucky 1471.67
112. Riverview A Florida 1470.36
113. Centennial HS A Maryland 1467.59
114. East Valley A Washington 1466.97
115. Pigeon Forge Tennessee 1466.1
116. Riverview C Florida 1465.64
117. Newnan A Georgia 1464.72
118. Doral Academy A Florida 1463.54
119. Holy Names Academy Washington 1463.35
120. Marmion Academy Illinois 1462.85
121. Punahou A Hawaii 1460.63
122. Tippecanoe A Ohio 1459.08
123. Foothill California 1449.99
124. Bozeman A Montana 1448.13
125. Lewis and Clark Washington 1445.54
126. Charleston Catholic B West Virginia 1439.47
127. Morristown East A Tennessee 1436.47
128. Nitro B West Virginia 1428.13
129. Archimedean B Florida 1426.55
130. Miami Palmetto E Florida 1425.68
131. Skyview B Montana 1422.75
132. Leonia A New Jersey 1417.75
133. Ardsley New York 1417.71
134. Nichols C New York 1413.02
135. Gunderson California 1412.72
136. Lincoln Washington 1412.52
137. Hewlett B New Jersey 1407.94
138. Pine View Florida 1406.33
139. Centennial HS B Maryland 1405.34
140. BASIS McLean Virginia 1403.75
141. Poca A West Virginia 1402.98
142. Paramus New Jersey 1402.89
143. Riverview B Florida 1398.17
144. Winnebago A Illinois 1397.11
145. St. Joseph A New Jersey 1396.86
146. Amherst B New York 1394.03
147. East Valley B Washington 1391.46
148. Woodstock A Georgia 1385.49
149. Billings West A Montana 1382.29
150. Starr's Mill D Georgia 1379.73
151. Classical Prep A Florida 1374.3
152. Jesuit B Washington 1372.41
153. Commerce Georgia 1371.47
154. Manatee A Florida 1371.04
155. White Plains New York 1370.6
156. Seymour Tennessee 1368.89
157. Glenelg Country School Maryland 1367.93
158. Archimedean C Florida 1367.44
159. Beavercreek B Ohio 1367.11
160. Berkeley Prep A Florida 1363.45
161. Punahou B Hawaii 1361.51
162. Riverview E Florida 1356.59
163. Moorestown Friends A New Jersey 1356.24
164. Tantasqua A Massachusetts 1354.19
165. Northfield Mt. Hermon Massachusetts 1354.02
166. Starr's Mill C Georgia 1343.34
167. Miami Palmetto G Florida 1332.58
168. Williams Bay B Illinois 1332.52
169. Piedmont Hills California 1330.35
170. Billings West B Montana 1318.65
171. Amherst A New York 1316.57
172. Tantasqua B Massachusetts 1315.57
173. Salem A Massachusetts 1314.27
174. George Walton A Georgia 1312.2
175. Woodward Academy Georgia 1305.74
176. Frenchtown A Washington 1303.88
177. Northwestern Middle Louisiana 1299.46
178. Miami Palmetto F Florida 1299.21
179. Saratoga C California 1296.97
180. Fordham Hall Academy A New Jersey 1294.4
181. Johnson B Kentucky 1294.3
182. Fordham Prep A New Jersey 1290.24
183. Westview B Washington 1289.16
184. Archimedean E Florida 1286.06
185. Starr's Mill E Georgia 1283.91
186. John Paul II A Washington 1281.39
187. Moorestown Friends B New Jersey 1278.47
188. Archimedean D Florida 1273.75
189. Team Holmdel A New Jersey 1273.35
190. Riverview D Florida 1272.18
191. Horace Greeley A New York 1269.43
192. Creekside Georgia 1262.68
193. Williams Bay C Illinois 1261.95
194. Zachary C Louisiana 1261.59
195. Riverside Montana 1257.53
196. Miami Palmetto J Florida 1251.41
197. Miami Palmetto D Florida 1247.12
198. Skyview C Montana 1244.09
199. Les Quiz California 1234.59
200. Apalachee A Georgia 1234.48
201. Miami Palmetto I Florida 1229.72
202. Johnson C Kentucky 1220.33
203. Columbia River B Washington 1217.08
204. Miami Palmetto H Florida 1215.22
205. Fordham Hall Academy B New Jersey 1213.05
206. Morristown East B Tennessee 1207.96
207. Gatlinburg-Pittman B Tennessee 1196.94
208. Barrington B Illinois 1196.08
209. Frenchtown B Washington 1189.24
210. St. Peter's Prep A New Jersey 1177.32
211. Tenafly B New Jersey 1155.94
212. Mount Vernon Virginia 1148.9
213. St. Peter's Prep B New Jersey 1136.22
214. Donovan Catholic A New Jersey 1128.62
215. Poca B West Virginia 1125.18
### Junior Varsity Rankings
1. Hunter College High B New York 2017.6
2. Churchill A New Jersey 1953.71
3. Ransom Everglades C Florida 1829.23
4. Phillips Exeter B Massachusetts 1822.91
5. Lexington B Massachusetts 1774.41
6. Montgomery Blair B Maryland 1755.03
7. Horace Greeley B New York 1737.81
8. Wilton B Connecticut 1712.78
9. Ridgewood C New Jersey 1706.68
10. Auburn B Illinois 1696.1
11. Princeton C New Jersey 1683.96
12. Team Holmdel B New Jersey 1678.77
13. Mission San Jose California 1675.26
14. Millburn D New Jersey 1671.59
15. Tesla STEM Washington 1669.96
16. Saggitarius California 1664.15
17. Miami Palmetto P Florida 1663.63
18. Yonkers A New York 1633.62
19. Richard Montgomery B Maryland 1628.35
20. Churchill New Jersey 1627.98
21. Wilton Connecticut 1620.6
22. Chattahoochee B Georgia 1620.44
23. Stevenson E Illinois 1617.98
24. Hermann Homeschool Georgia 1616.12
25. Riverview H Florida 1610.67
26. Riverview F Florida 1606.65
27. Morgantown West Virginia 1602.83
28. Stevenson D Illinois 1597.86
29. Chamblee Charter Georgia 1591.54
30. Mountain Lakes New Jersey 1590.27
31. Libby Middle School Washington 1589.63
32. Berkeley Prep C Florida 1589.19
33. Thomas Jefferson D Virginia 1588.39
34. Homewood-Flossmoor B Illinois 1568.26
35. California California 1562.26
36. Belen Jesuit C Florida 1555.64
37. Ransom Everglades D Florida 1553.4
38. Team Coldhug B Connecticut 1548.59
39. Miami Palmetto M Florida 1533.27
40. Fordham Prep B New Jersey 1531.63
41. Largo C Florida 1528.85
42. Harker California 1528.64
43. John Adams West Virginia 1526.56
44. McLean Virginia 1525.17
45. Kinnelon New Jersey 1523.68
46. Hewlett C New Jersey 1514.97
47. Saratoga D California 1510.94
48. Archimedean F Florida 1506.21
49. Thomas Jefferson C Virginia 1504.66
50. Santa Clara California 1503.83
51. Fulton Science Academy Georgia 1499.26
52. Tenafly C New Jersey 1498.05
53. Bozeman C Montana 1495.73
54. Stanburg B Illinois 1492.93
55. Ranney B New Jersey 1480.82
56. Homestead California 1477.89
57. Miami Palmetto L Florida 1477.17
58. Millburn Middle School New Jersey 1469.19
59. Cherokee Bluff Georgia 1461.93
60. Centennial HS C Maryland 1449.99
61. Nichols D New York 1445.62
62. Manatee B Florida 1444.47
63. Skyview D Montana 1444.47
64. Odle Middle Washington 1444.12
65. Newnan C Georgia 1440.14
66. Newnan B Georgia 1439.9
67. Brookwood B Georgia 1438.15
68. High Tech B New Jersey 1437.15
69. Doral Academy B Florida 1431.84
70. Classical Prep B Florida 1419.82
71. Mt. Spokane C Washington 1418.53
72. Montgomery Blair C Maryland 1409.57
73. Mt. Spokane D Washington 1406.74
74. Charleston Catholic D West Virginia 1388.06
75. Berkeley Prep D Florida 1382.3
76. Georgetown Day B DC 1379.98
77. South Brunswick New Jersey 1375.97
78. Miami Palmetto O Florida 1370.38
79. Miami Palmetto R Florida 1365.22
80. Centennial HS E Maryland 1361
81. Yonkers B New York 1360.06
82. Churchill B New Jersey 1355.71
83. Ridgewood D New Jersey 1353.68
84. St. Anselm's B Maryland 1352.25
85. Winnebago B Illinois 1352.21
86. Nichols E New York 1346.56
87. Miami Palmetto K Florida 1344.21
88. John Paul II B Washington 1341.82
89. Centennial HS D Maryland 1335.52
90. St. Joseph B New Jersey 1332.22
91. East Valley C Washington 1331.06
92. Princeton D New Jersey 1322.99
93. Billings Senior B Montana 1318.49
94. Charleston Catholic C West Virginia 1318.1
95. Phillips Andover Massachusetts 1315.11
96. St. Peter's Prep C New Jersey 1313.8
97. Greens Farms B Connecticut 1308.39
98. Miami Palmetto N Florida 1306.99
99. Bromfield Massachusetts 1304.9
100. Beavercreek C Ohio 1295.22
101. Saratoga E California 1294.84
102. Stevenson F Illinois 1288.69
103. Leonia A New Jersey 1287.18
104. Riverview G Florida 1285.3
105. Aptakisic Illinois 1281.93
106. Mountain View California 1279.41
107. Donovan Catholic B New Jersey 1274.55
108. Duvall Washington 1268.96
109. Park City B Montana 1268.16
110. Riverview I Florida 1265.86
111. Fordham Hall Academy C New Jersey 1264.27
112. Apalachee B Georgia 1261.13
113. Veterans B Georgia 1233.6
114. Park City A Montana 1233.09
115. BASIS Brooklyn New York 1229.29
116. Eriksen B California 1227.95
117. Williams Bay D Illinois 1227.62
118. Riverview J Florida 1223.43
119. Iroquois B New York 1219.5
120. George Washington New Jersey 1217.02
121. George Walton B Georgia 1205.01
122. Tippecanoe B Ohio 1201.28
123. Miami Palmetto Q Florida 1161.32
### Middle School Rankings
1. Trinity Prep C Florida 1825.76
2. Burleigh Manor A Maryland 1764.68
3. Burleigh Manor B Maryland 1674.64
4. Nysmith A Virginia 1620.84
5. Stoller K Washington 1589.19
6. Tenafly Middle A New Jersey 1583.11
7. Stoller H Washington 1557.16
8. Centennial Lane ES A Maryland 1556.03
9. Compass Virginia 1528.42
10. Tenafly Middle B New Jersey 1459.49
11. Challenger-Almaden California 1451.04
12. Nysmith B Virginia 1439.4
13. Burleigh Manor D Maryland 1437.75
14. Burleigh Manor C Maryland 1389.82
15. Harvest Park California 1379.63
16. Rippon A Virginia 1375.56
17. Trinity Prep D Florida 1374.8
18. Classical Prep C Florida 1371.31
19. Centennial Lane ES B Maryland 1353.31
20. JLS California 1351.59
21. Centennial Lane ES C Maryland 1320.14
22. Stoller W Washington 1276.16
23. Tenafly Middle C New Jersey 1275.05
24. Rippon B Virginia 1272.93
25. Indian Fields New Jersey 1270.88
26. Classical Prep D Florida 1216.94
27. Stoller T Washington 1210.85
28. Classical Prep E Florida 1175.26
29. BRIGHT Homeschool New Jersey 1171.52
