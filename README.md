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

## The Rankings

### Varsity Rankings
1. Millburn A New Jersey 2044.1082264260967
2. Stevenson A Illinois 1933.6437823457336
3. Hunter College High A New York 1889.5697128192703
4. Team Coldhug A Connecticut 1874.6473921719291
5. Stevenson C Illinois 1872.9961484176583
6. Cambridge Georgia 1834.8004356083986
7. Auburn A Illinois 1826.0746675835037
8. Trinity Prep A Florida 1819.3505367516555
9. High Tech A New Jersey 1796.547182397425
10. Ransom Everglades A Florida 1781.5482340079645
11. Lambert Georgia 1774.337619863646
12. Beavercreek A Ohio 1772.5234359073206
13. Starr's Mill A Georgia 1759.7335409633008
14. George Washington A West Virginia 1758.574596498978
15. Boston Latin Massachusetts 1742.7645018281705
16. Glenbard West Illinois 1741.7889144783182
17. Millburn C New Jersey 1733.1210491878473
18. Team Pi-oneers California 1732.5467829157394
19. Jesuit A Washington 1729.5134664205682
20. Millburn B New Jersey 1727.0219242788662
21. Skyview A Montana 1725.8095536906446
22. Gonzaga Prep Washington 1722.4682050601446
23. Darien Connecticut 1716.1545232935346
24. Largo A Florida 1715.9673271097774
25. Belen Jesuit B Florida 1712.629259447852
26. Ridgewood A New Jersey 1706.5187612930952
27. East Brunswick A New Jersey 1701.7504702437964
28. Richard Montgomery A Maryland 1701.1249920434243
29. Charleston Catholic A West Virginia 1699.0818722518247
30. Saratoga A California 1695.4698732270808
31. Blazer Kentucky 1694.7693439515656
32. Chattahoochee A Georgia 1692.496679840012
33. Scarsdale New York 1684.552978423809
34. Miami Palmetto B Florida 1681.3970421972422
35. Phillips Exeter A Massachusetts 1681.3114199271192
36. Oratory Prep New Jersey 1676.343588741569
37. Nichols B New York 1675.3419135549061
38. Johnson A Kentucky 1670.8609388633536
39. Georgetown Day School A DC 1661.4724246841402
40. Barrington A Illinois 1661.36612079333
41. Westview A Washington 1661.3233820970331
42. Archimedean A Florida 1660.0442900183136
43. Iolani B Hawaii 1651.4017169001763
44. Elgin Academy Illinois 1647.2367767027615
45. Wilton A Connecticut 1645.4033828738318
46. Ranney A New Jersey 1642.5533735866632
47. Belen Jesuit A Florida 1640.3068864998397
48. Oak Mountain Georgia 1639.3891922174262
49. Bozeman B Montana 1629.8741094608904
50. Lexington A Massachusetts 1618.1731294196982
51. King A Florida 1616.6625192913696
52. Montgomery Blair A Maryland 1615.5957139836069
53. Maryville Jr. High Tennessee 1615.4128211343254
54. Stanburg A Illinois 1612.2462163858056
55. Homewood-Flossmoor A Illinois 1609.5787912013004
56. King B Florida 1606.179539143401
57. Gatlinburg-Pittman A Tennessee 1600.259321988137
58. Miami Palmetto A Florida 1598.1838339340288
59. Moravian Academy New Jersey 1588.9079435379697
60. Iolani A Hawaii 1583.5277228881469
61. Dalton New York 1582.5841895814024
62. Princeton A New Jersey 1578.981555022228
63. Brookwood A Georgia 1575.2079249393578
64. Hinsdale Central Illinois 1574.4629285655883
65. Stevenson B Illinois 1569.568745360733
66. Stuyvesant New York 1567.1931020129027
67. Tenafly A New Jersey 1562.1852093560587
68. Zachary B Louisiana 1562.066138962161
69. Columbia River A Washington 1561.941690567298
70. Dunbar Kentucky 1560.1599631720667
71. Baton Rouge Episcopal Louisiana 1557.2065859678266
72. Mt. Spokane B Washington 1554.80427636814
73. George Washington B West Virginia 1554.5375273692605
74. St. Albans West Virginia 1553.0977706451943
75. Coral Reef A Florida 1549.6390784055538
76. Hewlett A New Jersey 1548.6990636459718
77. Lynbrook California 1546.8369140698205
78. Coral Reef B Georgia 1546.5308375357101
79. Irvington New York 1543.4442007020461
80. Iroquois A New York 1543.1341342446144
81. Thomas Jefferson B Virginia 1541.0120575341216
82. St. Georges Washington 1533.7808926848923
83. St. Anselm's A Maryland 1532.3502089988974
84. Williams Bay A Illinois 1531.444369437456
85. Miami Palmetto C Florida 1524.8031806900317
86. Nitro A West Virginia 1522.3085694917834
87. Berkeley Prep B Florida 1520.5043133688007
88. Greens Farms A Connecticut 1520.312832573219
89. Veterans A Georgia 1516.6214525394857
90. Mountain Lakes A New Jersey 1516.2845225317024
91. Largo B Florida 1511.5123866998051
92. Eriksen A California 1510.5446798955772
93. Thomas Jefferson A Virginia 1508.6515930677933
94. Newark Academy New Jersey 1506.5905204613312
95. Zachary A Louisiana 1506.5639269634346
96. Saratoga B California 1506.4548331890667
97. Billings Senior A Montana 1506.3142437449344
98. Nichols A New York 1503.629246894983
99. Johns Creek Georgia 1502.6988921884442
100. Westminster Christian Florida 1493.5736239422595
101. Princeton B New Jersey 1491.0866781194027
102. Central Kitsap Washington 1489.4445101301721
103. Starr's Mill B Georgia 1488.5443521379182
104. Team Gotham New York 1487.1333967579637
105. Salem B Massachusetts 1484.133503527012
106. Ransom Everglades B Florida 1483.7287980256208
107. Baton Rouge Magnet Louisiana 1478.832188251242
108. Trinity Prep B Florida 1478.1797806318043
109. East Brunswick B New Jersey 1475.3723744722968
110. Mt. Spokane A Washington 1474.3654103567749
111. Russell Kentucky 1471.6702576092712
112. Riverview A Florida 1470.3649833716756
113. Centennial HS A Maryland 1467.5852697877779
114. East Valley A Washington 1466.9715118366169
115. Pigeon Forge Tennessee 1466.0983789487027
116. Riverview C Florida 1465.6378529065273
117. Newnan A Georgia 1464.7236053724068
118. Doral Academy A Florida 1463.536634788217
119. Holy Names Academy Washington 1463.3511719723638
120. Marmion Academy Illinois 1462.854805491763
121. Punahou A Hawaii 1460.6324461021204
122. Tippecanoe A Ohio 1459.0822781110835
123. Foothill California 1449.985903719677
124. Bozeman A Montana 1448.1314224223688
125. Lewis and Clark Washington 1445.53755797878
126. Charleston Catholic B West Virginia 1439.4690724656218
127. Morristown East A Tennessee 1436.468568272497
128. Nitro B West Virginia 1428.131350455624
129. Archimedean B Florida 1426.5500802435618
130. Miami Palmetto E Florida 1425.6796835145396
131. Skyview B Montana 1422.7488050957536
132. Leonia A New Jersey 1417.7459704664805
133. Ardsley New York 1417.713742457196
134. Nichols C New York 1413.0212091822145
135. Gunderson California 1412.7235358237838
136. Lincoln Washington 1412.5234898835383
137. Hewlett B New Jersey 1407.9416996445595
138. Pine View Florida 1406.3256054857115
139. Centennial HS B Maryland 1405.3403430319117
140. BASIS McLean Virginia 1403.7527795720864
141. Poca A West Virginia 1402.9838946018785
142. Paramus New Jersey 1402.8943919740334
143. Riverview B Florida 1398.1662875995103
144. Winnebago A Illinois 1397.1142399540324
145. St. Joseph A New Jersey 1396.8648470405008
146. Amherst B New York 1394.0286072169517
147. East Valley B Washington 1391.4648320110907
148. Woodstock A Georgia 1385.4857486396509
149. Billings West A Montana 1382.2935283156198
150. Starr's Mill D Georgia 1379.7301620535814
151. Classical Prep A Florida 1374.296709786291
152. Jesuit B Washington 1372.4109530872468
153. Commerce Georgia 1371.4683836815107
154. Manatee A Florida 1371.0394549989555
155. White Plains New York 1370.5960555032432
156. Seymour Tennessee 1368.8880078091133
157. Glenelg Country School Maryland 1367.9297199537534
158. Archimedean C Florida 1367.4400556248831
159. Beavercreek B Ohio 1367.1053505261468
160. Berkeley Prep A Florida 1363.4494193376427
161. Punahou B Hawaii 1361.5111407856566
162. Riverview E Florida 1356.5882113094667
163. Moorestown Friends A New Jersey 1356.2372880828284
164. Tantasqua A Massachusetts 1354.1867098084056
165. Northfield Mt. Hermon Massachusetts 1354.0173932723653
166. Starr's Mill C Georgia 1343.342564473818
167. Miami Palmetto G Florida 1332.57656434548
168. Williams Bay B Illinois 1332.5179826434335
169. Piedmont Hills California 1330.3505396305459
170. Billings West B Montana 1318.6499914634933
171. Amherst A New York 1316.5670151404813
172. Tantasqua B Massachusetts 1315.5742856061493
173. Salem A Massachusetts 1314.2663891898965
174. George Walton A Georgia 1312.1981171853329
175. Woodward Academy Georgia 1305.7413457917362
176. Frenchtown A Washington 1303.8845681812877
177. Northwestern Middle Louisiana 1299.4579062224007
178. Miami Palmetto F Florida 1299.2054004738875
179. Saratoga C California 1296.9736459793553
180. Fordham Hall Academy A New Jersey 1294.4040581101597
181. Johnson B Kentucky 1294.3038461838087
182. Fordham Prep A New Jersey 1290.2381304202152
183. Westview B Washington 1289.164964063349
184. Archimedean E Florida 1286.0645105730323
185. Starr's Mill E Georgia 1283.9100948235287
186. John Paul II A Washington 1281.3929860138553
187. Moorestown Friends B New Jersey 1278.4689226982566
188. Archimedean D Florida 1273.7490765204034
189. Team Holmdel A New Jersey 1273.3475834248052
190. Riverview D Florida 1272.1807832591142
191. Horace Greeley A New York 1269.4310481933492
192. Creekside Georgia 1262.6767163786235
193. Williams Bay C Illinois 1261.948490019773
194. Zachary C Louisiana 1261.588289566785
195. Riverside Montana 1257.5327726136456
196. Miami Palmetto J Florida 1251.4060938875123
197. Miami Palmetto D Florida 1247.120747535364
198. Skyview C Montana 1244.0881136115424
199. Les Quiz California 1234.5900063710637
200. Apalachee A Georgia 1234.4776513163083
201. Miami Palmetto I Florida 1229.7190787267675
202. Johnson C Kentucky 1220.328207186005
203. Columbia River B Washington 1217.079595325817
204. Miami Palmetto H Florida 1215.2173467469402
205. Fordham Hall Academy B New Jersey 1213.048394527409
206. Morristown East B Tennessee 1207.964209311768
207. Gatlinburg-Pittman B Tennessee 1196.9359650911294
208. Barrington B Illinois 1196.0787799119114
209. Frenchtown B Washington 1189.2449133905382
210. St. Peter's Prep A New Jersey 1177.3184452662208
211. Tenafly B New Jersey 1155.9432849171362
212. Mount Vernon Virginia 1148.8998136884418
213. St. Peter's Prep B New Jersey 1136.219768938046
214. Donovan Catholic A New Jersey 1128.6201351384434
215. Poca B West Virginia 1125.1813205875774

### Junior Varsity Rankings
1. Hunter College High B New York 2017.6038323558523
2. Churchill A New Jersey 1953.7122795964608
3. Ransom Everglades C Florida 1829.2256761540373
4. Phillips Exeter B Massachusetts 1822.9085926979571
5. Lexington B Massachusetts 1774.4122812544315
6. Montgomery Blair B Maryland 1755.028009693043
7. Horace Greeley B New York 1737.8079544034306
8. Wilton B Connecticut 1712.7838383393414
9. Ridgewood C New Jersey 1706.6827032754634
10. Auburn B Illinois 1696.097860387848
11. Princeton C New Jersey 1683.963432274627
12. Team Holmdel B New Jersey 1678.7668879206574
13. Mission San Jose California 1675.2605103183043
14. Millburn D New Jersey 1671.5875173606596
15. Tesla STEM Washington 1669.9603618367105
16. Saggitarius California 1664.1526496228144
17. Miami Palmetto P Florida 1663.627905218512
18. Yonkers A New York 1633.6160760302278
19. Richard Montgomery B Maryland 1628.352976291266
20. Churchill New Jersey 1627.9830938777293
21. Wilton Connecticut 1620.5971653676422
22. Chattahoochee B Georgia 1620.4352779907051
23. Stevenson E Illinois 1617.9784752509704
24. Hermann Homeschool Georgia 1616.122190514815
25. Riverview H Florida 1610.6698198857828
26. Riverview F Florida 1606.647123126679
27. Morgantown West Virginia 1602.8323945672635
28. Stevenson D Illinois 1597.8604686744804
29. Chamblee Charter Georgia 1591.5418790027525
30. Mountain Lakes New Jersey 1590.2732804394495
31. Libby Middle School Washington 1589.6342011987988
32. Berkeley Prep C Florida 1589.1916543079553
33. Thomas Jefferson D Virginia 1588.3924028488689
34. Homewood-Flossmoor B Illinois 1568.2624668269693
35. California California 1562.2632091748374
36. Belen Jesuit C Florida 1555.6388386215942
37. Ransom Everglades D Florida 1553.3984637134527
38. Team Coldhug B Connecticut 1548.589796243656
39. Miami Palmetto M Florida 1533.2729136049732
40. Fordham Prep B New Jersey 1531.6323948134539
41. Largo C Florida 1528.8541794461607
42. Harker California 1528.643404860965
43. John Adams West Virginia 1526.5622526810155
44. McLean Virginia 1525.1695405637631
45. Kinnelon New Jersey 1523.6821693862225
46. Hewlett C New Jersey 1514.9685327348445
47. Saratoga D California 1510.9387997623292
48. Archimedean F Florida 1506.2090132184126
49. Thomas Jefferson C Virginia 1504.6605766786015
50. Santa Clara California 1503.8273254237404
51. Fulton Science Academy Georgia 1499.2619295995319
52. Tenafly C New Jersey 1498.0470115561427
53. Bozeman C Montana 1495.7256664306392
54. Stanburg B Illinois 1492.9343679688102
55. Ranney B New Jersey 1480.8217671664718
56. Homestead California 1477.8862390564518
57. Miami Palmetto L Florida 1477.1693063710243
58. Millburn Middle School New Jersey 1469.1855694002634
59. Cherokee Bluff Georgia 1461.9309783257215
60. Centennial HS C Maryland 1449.9882080743891
61. Nichols D New York 1445.6224594351272
62. Manatee B Florida 1444.4740961259229
63. Skyview D Montana 1444.4650076871856
64. Odle Middle Washington 1444.1213081801259
65. Newnan C Georgia 1440.1355296125573
66. Newnan B Georgia 1439.9009573631454
67. Brookwood B Georgia 1438.1527554023228
68. High Tech B New Jersey 1437.1472283874978
69. Doral Academy B Florida 1431.8399986274724
70. Classical Prep B Florida 1419.8164501086574
71. Mt. Spokane C Washington 1418.5324751550086
72. Montgomery Blair C Maryland 1409.573226808994
73. Mt. Spokane D Washington 1406.7409086518708
74. Charleston Catholic D West Virginia 1388.0605117298414
75. Berkeley Prep D Florida 1382.29728459325
76. Georgetown Day B DC 1379.9822871774954
77. South Brunswick New Jersey 1375.9732668126378
78. Miami Palmetto O Florida 1370.3838360669438
79. Miami Palmetto R Florida 1365.2230044906291
80. Centennial HS E Maryland 1361.0009909251594
81. Yonkers B New York 1360.0641758008462
82. Churchill B New Jersey 1355.7116273523486
83. Ridgewood D New Jersey 1353.6800298492806
84. St. Anselm's B Maryland 1352.2468329154024
85. Winnebago B Illinois 1352.2073174172915
86. Nichols E New York 1346.555730733644
87. Miami Palmetto K Florida 1344.2111394324572
88. John Paul II B Washington 1341.8225202889112
89. Centennial HS D Maryland 1335.5233924559445
90. St. Joseph B New Jersey 1332.2186794294764
91. East Valley C Washington 1331.0611366479282
92. Princeton D New Jersey 1322.9921839008052
93. Billings Senior B Montana 1318.4943989505819
94. Charleston Catholic C West Virginia 1318.096953599266
95. Phillips Andover Massachusetts 1315.1051181781445
96. St. Peter's Prep C New Jersey 1313.7979080914542
97. Greens Farms B Connecticut 1308.387690471038
98. Miami Palmetto N Florida 1306.986383251305
99. Bromfield Massachusetts 1304.895508607535
100. Beavercreek C Ohio 1295.220230842087
101. Saratoga E California 1294.8373572597175
102. Stevenson F Illinois 1288.6946909801668
103. Leonia A New Jersey 1287.17564422464
104. Riverview G Florida 1285.3045226954266
105. Aptakisic Illinois 1281.9339441773734
106. Mountain View California 1279.414852843293
107. Donovan Catholic B New Jersey 1274.5536751088207
108. Duvall Washington 1268.957718325188
109. Park City B Montana 1268.1595996151786
110. Riverview I Florida 1265.8601905650944
111. Fordham Hall Academy C New Jersey 1264.271155143361
112. Apalachee B Georgia 1261.130507727968
113. Veterans B Georgia 1233.5951774596206
114. Park City A Montana 1233.091935081956
115. BASIS Brooklyn New York 1229.2882399368536
116. Eriksen B California 1227.9533542976937
117. Williams Bay D Illinois 1227.6248289336538
118. Riverview J Florida 1223.4274224228686
119. Iroquois B New York 1219.501156437665
120. George Washington New Jersey 1217.0222544852115
121. George Walton B Georgia 1205.0143742342584
122. Tippecanoe B Ohio 1201.2848628437384
123. Miami Palmetto Q Florida 1161.3171216695027

### Middle School Rankings
1. Trinity Prep C Florida 1825.764242552922
2. Burleigh Manor A Maryland 1764.6841609956323
3. Burleigh Manor B Maryland 1674.6396852368455
4. Nysmith A Virginia 1620.8378036317895
5. Stoller K Washington 1589.1911148650197
6. Tenafly Middle A New Jersey 1583.1116187497985
7. Stoller H Washington 1557.1635264435874
8. Centennial Lane ES A Maryland 1556.0348183571352
9. Compass Virginia 1528.4239609360536
10. Tenafly Middle B New Jersey 1459.4856635310439
11. Challenger-Almaden California 1451.0367832389686
12. Nysmith B Virginia 1439.3957608903795
13. Burleigh Manor D Maryland 1437.7471756147197
14. Burleigh Manor C Maryland 1389.82242390323
15. Harvest Park California 1379.6313952251273
16. Rippon A Virginia 1375.5640520408579
17. Trinity Prep D Florida 1374.800681564573
18. Classical Prep C Florida 1371.3103266755763
19. Centennial Lane ES B Maryland 1353.3131531706345
20. JLS California 1351.5858301705014
21. Centennial Lane ES C Maryland 1320.1425878455734
22. Stoller W Washington 1276.1623501248555
23. Tenafly Middle C New Jersey 1275.0518857112136
24. Rippon B Virginia 1272.9316267832905
25. Indian Fields New Jersey 1270.8842677675204
26. Classical Prep D Florida 1216.9387584827193
27. Stoller T Washington 1210.8544574269733
28. Classical Prep E Florida 1175.2598543721049
29. BRIGHT Homeschool New Jersey 1171.5150215896485
