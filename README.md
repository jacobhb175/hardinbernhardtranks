# Hardin-Bernhardt Ranks
Hardin-Bernhardt Ranks is a new way of ranking NHBB teams using a modified version of the Go Elo formula that takes into account strength of field and margin of victory.

## The Formulas
Expected Score Formula:
expected score of A = 1 / ((e^((rank of B - rank of A) / rank of A)) + 1)

New Rank Formula:
new rank of A = rank of A + q * K * ((score of A / ((score of A + score of B) * average T-value)) - expected score of A)

## The Variables
The q-value is used to represent strength of field at a tournament and intended to help improve elo as a measure of skill unaffected by the field a team is up against, and thus more useful and accurate as a comparison between teams from different regions. It is calculated as a ratio of average total points scored per game at a given tournament : average total points scored per game on a given set, and is calculated independently the for MS, JV, and Varsity fields.
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
1. Millburn A New Jersey 2044.11
2. Stevenson A Illinois 1933.64
3. Hunter College High A New York 1879.89
4. Team Coldhug A Connecticut 1874.65
5. Stevenson C Illinois 1873
6. Cambridge A Georgia 1834.8
7. Auburn A Illinois 1826.07
8. Great Valley A Pennsylvania 1820.34
9. Trinity Prep A Florida 1819.35
10. High Tech A New Jersey 1796.55
11. Ransom Everglades A Florida 1781.55
12. Lambert A Georgia 1774.34
13. Beavercreek A Ohio 1772.52
14. Starr's Mill A Georgia 1759.73
15. George Washington A West Virginia 1758.57
16. Boston Latin A Massachusetts 1742.76
17. Glenbard West A Illinois 1741.79
18. Millburn C New Jersey 1733.12
19. Team Pi-oneers A California 1732.55
20. Jesuit A Washington 1729.51
21. Millburn B New Jersey 1727.02
22. Skyview A Montana 1725.81
23. Gonzaga Prep A Washington 1722.47
24. Darien A Connecticut 1716.15
25. Largo A Florida 1715.97
26. Belen Jesuit B Florida 1712.63
27. Ridgewood A New Jersey 1706.52
28. East Brunswick A New Jersey 1701.75
29. Richard Montgomery A Maryland 1701.12
30. Charleston Catholic A West Virginia 1699.08
31. Saratoga A California 1695.47
32. Blazer A Kentucky 1694.77
33. Chattahoochee A Georgia 1692.5
34. Scarsdale A New York 1684.55
35. Miami Palmetto B Florida 1681.4
36. Phillips Exeter A Massachusetts 1681.31
37. Oratory Prep A New Jersey 1676.34
38. Nichols B New York 1675.34
39. Methacton A Pennsylvania 1672.94
40. Johnson A Kentucky 1670.86
41. Georgetown Day School A DC 1661.47
42. Barrington A Illinois 1661.37
43. Westview A Washington 1661.32
44. Archimedean A Florida 1660.04
45. Iolani B Hawaii 1651.4
46. Elgin Academy A Illinois 1647.24
47. Wilton Alex Connecticut 1645.4**
48. Ranney A New Jersey 1642.55
49. Belen Jesuit A Florida 1640.31
50. Oak Mountain A Georgia 1639.39
51. Bozeman B Montana 1629.87
52. Lexington A Massachusetts 1618.17
53. King A Florida 1616.66
54. Montgomery Blair A Maryland 1615.6
55. Maryville Jr. High A Tennessee 1615.41
56. Stanburg A Illinois 1612.25
57. Homewood-Flossmoor A Illinois 1609.58
58. King B Florida 1606.18
59. Gatlinburg-Pittman A Tennessee 1600.26
60. Miami Palmetto A Florida 1598.18
61. Moravian Academy A New Jersey 1588.91
62. Tower Hill A Delaware 1588.05
63. Iolani A Hawaii 1583.53
64. Dalton A New York 1582.58
65. Princeton A New Jersey 1578.98
66. Brookwood A Georgia 1575.21
67. Hinsdale Central A Illinois 1574.46
68. Stevenson B Illinois 1569.57
69. Stuyvesant A New York 1567.19
70. Tenafly A New Jersey 1562.19
71. Zachary B Louisiana 1562.07
72. Columbia River A Washington 1561.94
73. Dunbar A Kentucky 1560.16
74. Baton Rouge Episcopal A Louisiana 1557.21
75. Mt. Spokane B Washington 1554.8
76. George Washington B West Virginia 1554.54
77. St. Albans A West Virginia 1553.1
78. Coral Reef A Florida 1549.64
79. Hewlett A New Jersey 1548.7
80. Lynbrook A California 1546.84
81. Coral Reef B Georgia 1546.53
82. Newark Charter A Deleware 1543.84
83. Irvington A New York 1543.44
84. Iroquois A New York 1543.13
85. Thomas Jefferson B Virginia 1541.01
86. St. George's A Washington 1533.78
87. St. Anselm's A Maryland 1532.35
88. Williams Bay A Illinois 1531.44
89. Miami Palmetto C Florida 1524.8
90. Nitro A West Virginia 1522.31
91. Berkeley Prep B Florida 1520.5
92. Greens Farms A Connecticut 1520.31
93. Veterans A Georgia 1516.62
94. Mountain Lakes A New Jersey 1516.28
95. Largo B Florida 1511.51
96. Eriksen A California 1510.54
97. Thomas Jefferson A Virginia 1508.65
98. Newark Academy A New Jersey 1506.59
99. Zachary A Louisiana 1506.56
100. Saratoga B California 1506.45
101. Billings Senior A Montana 1506.31
102. Nichols A New York 1503.63
103. Johns Creek A Georgia 1502.7
104. Newark Charter C Deleware 1495.49
105. Westminster Christian A Florida 1493.57
106. Princeton B New Jersey 1491.09
107. Central Kitsap A Washington 1489.44
108. Starr's Mill B Georgia 1488.54
109. Team Gotham A New York 1487.13
110. Methacton B Pennsylvania 1485.27
111. Salem B Massachusetts 1484.13
112. Ransom Everglades B Florida 1483.73
113. Baton Rouge Magnet A Louisiana 1478.83
114. Trinity Prep B Florida 1478.18
115. East Brunswick B New Jersey 1475.37
116. Mt. Spokane A Washington 1474.37
117. Russell A Kentucky 1471.67
118. Riverview A Florida 1470.36
119. Centennial HS A Maryland 1467.59
120. East Valley A Washington 1466.97
121. Pigeon Forge A Tennessee 1466.1
122. Riverview C Florida 1465.64
123. Newnan A Georgia 1464.72
124. Doral Academy A Florida 1463.54
125. Holy Names Academy A Washington 1463.35
126. Marmion Academy A Illinois 1462.85
127. Punahou A Hawaii 1460.63
128. Tippecanoe A Ohio 1459.08
129. Foothill A California 1449.99
130. Bozeman A Montana 1448.13
131. Friends Central A Pennsylvania 1445.65
132. Lewis and Clark A Washington 1445.54
133. Charleston Catholic B West Virginia 1439.47
134. Morristown East A Tennessee 1436.47
135. Nitro B West Virginia 1428.13
136. Archimedean B Florida 1426.55
137. Miami Palmetto E Florida 1425.68
138. Wilmington Friends A Deleware 1423.49
139. Skyview B Montana 1422.75
140. Wilmington Friends B Deleware 1418.72
141. Leonia A New Jersey 1417.75
142. Ardsley A New York 1417.71
143. Nichols C New York 1413.02
144. Gunderson A California 1412.72
145. Lincoln A Washington 1412.52
146. Hewlett B New Jersey 1407.94
147. Pine View A Florida 1406.33
148. Centennial HS B Maryland 1405.34
149. BASIS McLean A Virginia 1403.75
150. Poca A West Virginia 1402.98
151. Paramus A New Jersey 1402.89
152. Riverview B Florida 1398.17
153. Winnebago A Illinois 1397.11
154. St. Joseph A New Jersey 1396.86
155. Caravel A Deleware 1396.57
156. Amherst B New York 1394.03
157. East Valley B Washington 1391.46
158. Dickinson A Deleware 1387.88
159. Woodstock A Georgia 1385.49
160. Billings West A Montana 1382.29
161. Starr's Mill D Georgia 1379.73
162. Newark Charter B Deleware 1375.57
163. Classical Prep A Florida 1374.3
164. Jesuit B Washington 1372.41
165. Commerce A Georgia 1371.47
166. Manatee A Florida 1371.04
167. White Plains A New York 1370.6
168. Seymour A Tennessee 1368.89
169. Glenelg Country School A Maryland 1367.93
170. Archimedean C Florida 1367.44
171. Beavercreek B Ohio 1367.11
172. Berkeley Prep A Florida 1363.45
173. Punahou B Hawaii 1361.51
174. Riverview E Florida 1356.59
175. Moorestown Friends A New Jersey 1356.24
176. Tantasqua A Massachusetts 1354.19
177. Northfield Mt. Hermon A Massachusetts 1354.02
178. Wilmington Friends E Deleware 1343.47
179. Starr's Mill C Georgia 1343.34
180. Wilmington Friends D Deleware 1336.81
181. Miami Palmetto G Florida 1332.58
182. Williams Bay B Illinois 1332.52
183. Piedmont Hills A California 1330.35
184. Tower Hill B Delaware 1328.08
185. Billings West B Montana 1318.65
186. Amherst A New York 1316.57
187. Tantasqua B Massachusetts 1315.57
188. Salem A Massachusetts 1314.27
189. George Walton A Georgia 1312.2
190. Woodward Academy A Georgia 1305.74
191. Frenchtown A Washington 1303.88
192. Northwestern Middle A Louisiana 1299.46
193. Miami Palmetto F Florida 1299.21
194. Saratoga C California 1296.97
195. Fordham Hall Academy A New Jersey 1294.4
196. Johnson B Kentucky 1294.3
197. Fordham Prep A New Jersey 1290.24
198. Westview B Washington 1289.16
199. Archimedean E Florida 1286.06
200. Starr's Mill E Georgia 1283.91
201. John Paul II A Washington 1281.39
202. Moorestown Friends B New Jersey 1278.47
203. Archimedean D Florida 1273.75
204. Team Holmdel A New Jersey 1273.35
205. Riverview D Florida 1272.18
206. Horace Greeley A New York 1269.43
207. Creekside A Georgia 1262.68
208. Williams Bay C Illinois 1261.95
209. Zachary C Louisiana 1261.59
210. Riverside A Montana 1257.53
211. Miami Palmetto J Florida 1251.41
212. Wilmington Friends C Deleware 1250.33
213. Miami Palmetto D Florida 1247.12
214. Wilmington Friends G Deleware 1244.49
215. Skyview C Montana 1244.09
216. Wilmington Friends F Deleware 1237.12
217. Caravel B Deleware 1236.48
218. Les Quiz A California 1234.59
219. Apalachee A Georgia 1234.48
220. Miami Palmetto I Florida 1229.72
221. Johnson C Kentucky 1220.33
222. Columbia River B Washington 1217.08
223. Miami Palmetto H Florida 1215.22
224. Fordham Hall Academy B New Jersey 1213.05
225. Morristown East B Tennessee 1207.96
226. Gatlinburg-Pittman B Tennessee 1196.94
227. Barrington B Illinois 1196.08
228. Frenchtown B Washington 1189.24
229. St. Peter's Prep A New Jersey 1177.32
230. Tenafly B New Jersey 1155.94
231. Mount Vernon A Virginia 1148.9
232. St. Peter's Prep B New Jersey 1145.89
233. Donovan Catholic A New Jersey 1128.62
234. Poca B West Virginia 1125.18

### Junior Varsity Rankings
1. Hunter College High B New York 1998.16
2. Churchill I A New Jersey 1953.71*
3. Methacton C Pennsylvania 1904.93
4. Ransom Everglades C Florida 1829.23
5. Phillips Exeter B Massachusetts 1822.91
6. Lexington B Massachusetts 1774.41
7. Montgomery Blair B Maryland 1755.03
8. Wilmington Friends H Deleware 1744.28
9. Horace Greeley B New York 1737.81
10. Wilton Lukas Connecticut 1712.78**
11. Ridgewood C New Jersey 1706.68
12. Auburn B Illinois 1696.1
13. Princeton C New Jersey 1683.96
14. Team Holmdel B New Jersey 1678.77
15. Mission San Jose California 1675.26
16. Millburn D New Jersey 1671.59
17. Tesla STEM A Washington 1669.96
18. Saggitarius A California 1664.15
19. Miami Palmetto P Florida 1663.63
20. Yonkers A New York 1633.62
21. Richard Montgomery B Maryland 1628.35
22. Churchill II A New Jersey 1627.98*
23. Wilton Anjo Connecticut 1620.6**
24. Chattahoochee B Georgia 1620.44
25. Stevenson E Illinois 1617.98
26. Hermann Homeschool A Georgia 1616.12
27. Riverview H Florida 1610.67
28. Riverview F Florida 1606.65
29. Morgantown A West Virginia 1602.83
30. Stevenson D Illinois 1597.86
31. Chamblee Charter A Georgia 1591.54
32. Mountain Lakes New Jersey 1590.27
33. Libby Middle School A Washington 1589.63
34. Berkeley Prep C Florida 1589.19
35. Thomas Jefferson D Virginia 1588.39
36. Homewood-Flossmoor B Illinois 1568.26
37. California A California 1562.26
38. Belen Jesuit C Florida 1555.64
39. Ransom Everglades D Florida 1553.4
40. Team Coldhug B Connecticut 1548.59
41. Miami Palmetto M Florida 1533.27
42. Fordham Prep B New Jersey 1531.63
43. Largo C Florida 1528.85
44. Harker A California 1528.64
45. John Adams A West Virginia 1526.56
46. McLean A Virginia 1525.17
47. Kinnelon A New Jersey 1523.68
48. Hewlett C New Jersey 1514.97
49. Saratoga D California 1510.94
50. Archimedean F Florida 1506.21
51. Thomas Jefferson C Virginia 1504.66
52. Santa Clara A California 1503.83
53. Fulton Science Academy A Georgia 1499.26
54. Tenafly C New Jersey 1498.05
55. Bozeman C Montana 1495.73
56. Stanburg B Illinois 1492.93
57. Ranney B New Jersey 1480.82
58. Homestead A California 1477.89
59. Miami Palmetto L Florida 1477.17
60. Millburn Middle School A New Jersey 1469.19
61. Cherokee Bluff Georgia 1461.93
62. Centennial HS C Maryland 1449.99
63. Nichols D New York 1445.62
64. Manatee B Florida 1444.47
65. Skyview D Montana 1444.47
66. Odle Middle A Washington 1444.12
67. Newnan C Georgia 1440.14
68. Newnan B Georgia 1439.9
69. Brookwood B Georgia 1438.15
70. High Tech B New Jersey 1437.15
71. Doral Academy B Florida 1431.84
72. Classical Prep B Florida 1419.82
73. Mt. Spokane C Washington 1418.53
74. Tower Hill C Delaware 1412.49
75. Montgomery Blair C Maryland 1409.57
76. Mt. Spokane D Washington 1406.74
77. Charleston Catholic D West Virginia 1388.06
78. Berkeley Prep D Florida 1382.3
79. Georgetown Day B DC 1379.98
80. South Brunswick A New Jersey 1375.97
81. Wilmington Friends I Deleware 1370.56
82. Miami Palmetto O Florida 1370.38
83. Miami Palmetto R Florida 1365.22
84. Centennial HS E Maryland 1361
85. Yonkers B New York 1360.06
86. Churchill I B New Jersey 1355.71*
87. Ridgewood D New Jersey 1353.68
88. St. Anselm's B Maryland 1352.25
89. Winnebago B Illinois 1352.21
90. Nichols E New York 1346.56
91. Miami Palmetto K Florida 1344.21
92. John Paul II B Washington 1341.82
93. Centennial HS D Maryland 1335.52
94. St. Joseph B New Jersey 1332.22
95. East Valley C Washington 1331.06
96. Wilmington Friends M Deleware 1324.41
97. St. Peter's Prep C New Jersey 1323.41
98. Princeton D New Jersey 1322.99
99. Billings Senior B Montana 1318.49
100. Charleston Catholic C West Virginia 1318.1
101. Phillips Andover A Massachusetts 1315.11
102. Greens Farms B Connecticut 1308.39
103. Miami Palmetto N Florida 1306.99
104. Bromfield A Massachusetts 1304.9
105. Wilmington Friends L Deleware 1300.14
106. Beavercreek C Ohio 1295.22
107. Saratoga E California 1294.84
108. Stevenson F Illinois 1288.69
109. Leonia A New Jersey 1287.18
110. Wilmington Friends J Deleware 1286.1
111. Riverview G Florida 1285.3
112. Aptakisic A Illinois 1281.93
113. Mountain View A California 1279.41
114. Donovan Catholic B New Jersey 1274.55
115. Duvall Washington 1268.96
116. Park City B Montana 1268.16
117. Riverview I Florida 1265.86
118. Fordham Hall Academy C New Jersey 1264.27
119. Apalachee B Georgia 1261.13
120. BASIS Brooklyn A New York 1239.12
121. Veterans B Georgia 1233.6
122. Park City A Montana 1233.09
123. Eriksen B California 1227.95
124. Williams Bay D Illinois 1227.62
125. Riverview J Florida 1223.43
126. Iroquois B New York 1219.5
127. George Washington A New Jersey 1217.02
128. Wilmington Friends K Deleware 1207.37
129. George Walton B Georgia 1205.01
130. Tippecanoe B Ohio 1201.28
131. Miami Palmetto Q Florida 1161.32

### Middle School Rankings
1. Trinity Prep C Florida 1825.76
2. Burleigh Manor A Maryland 1764.68
3. Burleigh Manor B Maryland 1674.64
4. Nysmith A Virginia 1620.84
5. Stoller K Washington 1589.19
6. Tenafly Middle A New Jersey 1583.11
7. Stoller H Washington 1557.16
8. Centennial Lane ES A Maryland 1556.03
9. Compass A Virginia 1528.42
10. Tenafly Middle B New Jersey 1459.49
11. Challenger-Almaden A California 1451.04
12. Nysmith B Virginia 1439.4
13. Burleigh Manor D Maryland 1437.75
14. Burleigh Manor C Maryland 1389.82
15. Harvest Park A California 1379.63
16. Rippon A Virginia 1375.56
17. Trinity Prep D Florida 1374.8
18. Classical Prep C Florida 1371.31
19. Centennial Lane ES B Maryland 1353.31
20. JLS A California 1351.59
21. Centennial Lane ES C Maryland 1320.14
22. Stoller W Washington 1276.16
23. Tenafly Middle C New Jersey 1275.05
24. Rippon B Virginia 1272.93
25. Indian Fields A New Jersey 1270.88
26. Classical Prep D Florida 1216.94
27. Stoller T Washington 1210.85
28. Classical Prep E Florida 1175.26
29. BRIGHT Homeschool A New Jersey 1171.52

* Given that there  are two Churchill New Jersey schools, their teams have been labeled as either Churchill I or Churchill II to distinguish them
** Given that there are three Wilton Connecticut teams, each consisting of one player, their teams have been labeled with the name of the respective player
