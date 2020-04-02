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
Deleware|1/11/2020|C|Complete
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
script.js:3725 1. Millburn A New Jersey 2044.11
script.js:3725 2. Stevenson A Illinois 1933.64
script.js:3725 3. Hunter College High A New York 1879.89
script.js:3725 4. Team Coldhug A Connecticut 1874.65
script.js:3725 5. Stevenson C Illinois 1873
script.js:3725 6. Cambridge A Georgia 1834.8
script.js:3725 7. Auburn A Illinois 1826.07
script.js:3725 8. Great Valley A Pennsylvania 1820.34
script.js:3725 9. Trinity Prep A Florida 1819.35
script.js:3725 10. High Tech A New Jersey 1796.55
script.js:3725 11. Ransom Everglades A Florida 1781.55
script.js:3725 12. Lambert A Georgia 1774.34
script.js:3725 13. Beavercreek A Ohio 1772.52
script.js:3725 14. Starr's Mill A Georgia 1759.73
script.js:3725 15. George Washington A West Virginia 1758.57
script.js:3725 16. Boston Latin A Massachusetts 1742.76
script.js:3725 17. Glenbard West A Illinois 1741.79
script.js:3725 18. Millburn C New Jersey 1733.12
script.js:3725 19. Team Pi-oneers A California 1732.55
script.js:3725 20. Jesuit A Washington 1729.51
script.js:3725 21. Millburn B New Jersey 1727.02
script.js:3725 22. Skyview A Montana 1725.81
script.js:3725 23. Gonzaga Prep A Washington 1722.47
script.js:3725 24. Darien A Connecticut 1716.15
script.js:3725 25. Largo A Florida 1715.97
script.js:3725 26. Belen Jesuit B Florida 1712.63
script.js:3725 27. Ridgewood A New Jersey 1706.52
script.js:3725 28. East Brunswick A New Jersey 1701.75
script.js:3725 29. Richard Montgomery A Maryland 1701.12
script.js:3725 30. Charleston Catholic A West Virginia 1699.08
script.js:3725 31. Saratoga A California 1695.47
script.js:3725 32. Blazer A Kentucky 1694.77
script.js:3725 33. Chattahoochee A Georgia 1692.5
script.js:3725 34. Scarsdale A New York 1684.55
script.js:3725 35. Miami Palmetto B Florida 1681.4
script.js:3725 36. Phillips Exeter A Massachusetts 1681.31
script.js:3725 37. Oratory Prep A New Jersey 1676.34
script.js:3725 38. Nichols B New York 1675.34
script.js:3725 39. Methacton A Pennsylvania 1672.94
script.js:3725 40. Johnson A Kentucky 1670.86
script.js:3725 41. Georgetown Day School A DC 1661.47
script.js:3725 42. Barrington A Illinois 1661.37
script.js:3725 43. Westview A Washington 1661.32
script.js:3725 44. Archimedean A Florida 1660.04
script.js:3725 45. Iolani B Hawaii 1651.4
script.js:3725 46. Elgin Academy A Illinois 1647.24
script.js:3725 47. Wilton A Connecticut 1645.4
script.js:3725 48. Ranney A New Jersey 1642.55
script.js:3725 49. Belen Jesuit A Florida 1640.31
script.js:3725 50. Oak Mountain A Georgia 1639.39
script.js:3725 51. Bozeman B Montana 1629.87
script.js:3725 52. Lexington A Massachusetts 1618.17
script.js:3725 53. King A Florida 1616.66
script.js:3725 54. Montgomery Blair A Maryland 1615.6
script.js:3725 55. Maryville Jr. High A Tennessee 1615.41
script.js:3725 56. Stanburg A Illinois 1612.25
script.js:3725 57. Homewood-Flossmoor A Illinois 1609.58
script.js:3725 58. King B Florida 1606.18
script.js:3725 59. Gatlinburg-Pittman A Tennessee 1600.26
script.js:3725 60. Miami Palmetto A Florida 1598.18
script.js:3725 61. Moravian Academy A New Jersey 1588.91
script.js:3725 62. Tower Hill A Delaware 1588.05
script.js:3725 63. Iolani A Hawaii 1583.53
script.js:3725 64. Dalton A New York 1582.58
script.js:3725 65. Princeton A New Jersey 1578.98
script.js:3725 66. Brookwood A Georgia 1575.21
script.js:3725 67. Hinsdale Central A Illinois 1574.46
script.js:3725 68. Stevenson B Illinois 1569.57
script.js:3725 69. Stuyvesant A New York 1567.19
script.js:3725 70. Tenafly A New Jersey 1562.19
script.js:3725 71. Zachary B Louisiana 1562.07
script.js:3725 72. Columbia River A Washington 1561.94
script.js:3725 73. Dunbar A Kentucky 1560.16
script.js:3725 74. Baton Rouge Episcopal A Louisiana 1557.21
script.js:3725 75. Mt. Spokane B Washington 1554.8
script.js:3725 76. George Washington B West Virginia 1554.54
script.js:3725 77. St. Albans A West Virginia 1553.1
script.js:3725 78. Coral Reef A Florida 1549.64
script.js:3725 79. Hewlett A New Jersey 1548.7
script.js:3725 80. Lynbrook A California 1546.84
script.js:3725 81. Coral Reef B Georgia 1546.53
script.js:3725 82. Newark Charter A Deleware 1543.84
script.js:3725 83. Irvington A New York 1543.44
script.js:3725 84. Iroquois A New York 1543.13
script.js:3725 85. Thomas Jefferson B Virginia 1541.01
script.js:3725 86. St. George's A Washington 1533.78
script.js:3725 87. St. Anselm's A Maryland 1532.35
script.js:3725 88. Williams Bay A Illinois 1531.44
script.js:3725 89. Miami Palmetto C Florida 1524.8
script.js:3725 90. Nitro A West Virginia 1522.31
script.js:3725 91. Berkeley Prep B Florida 1520.5
script.js:3725 92. Greens Farms A Connecticut 1520.31
script.js:3725 93. Veterans A Georgia 1516.62
script.js:3725 94. Mountain Lakes A New Jersey 1516.28
script.js:3725 95. Largo B Florida 1511.51
script.js:3725 96. Eriksen A California 1510.54
script.js:3725 97. Thomas Jefferson A Virginia 1508.65
script.js:3725 98. Newark Academy A New Jersey 1506.59
script.js:3725 99. Zachary A Louisiana 1506.56
script.js:3725 100. Saratoga B California 1506.45
script.js:3725 101. Billings Senior A Montana 1506.31
script.js:3725 102. Nichols A New York 1503.63
script.js:3725 103. Johns Creek A Georgia 1502.7
script.js:3725 104. Newark Charter C Deleware 1495.49
script.js:3725 105. Westminster Christian A Florida 1493.57
script.js:3725 106. Princeton B New Jersey 1491.09
script.js:3725 107. Central Kitsap A Washington 1489.44
script.js:3725 108. Starr's Mill B Georgia 1488.54
script.js:3725 109. Team Gotham A New York 1487.13
script.js:3725 110. Methacton B Pennsylvania 1485.27
script.js:3725 111. Salem B Massachusetts 1484.13
script.js:3725 112. Ransom Everglades B Florida 1483.73
script.js:3725 113. Baton Rouge Magnet A Louisiana 1478.83
script.js:3725 114. Trinity Prep B Florida 1478.18
script.js:3725 115. East Brunswick B New Jersey 1475.37
script.js:3725 116. Mt. Spokane A Washington 1474.37
script.js:3725 117. Russell A Kentucky 1471.67
script.js:3725 118. Riverview A Florida 1470.36
script.js:3725 119. Centennial HS A Maryland 1467.59
script.js:3725 120. East Valley A Washington 1466.97
script.js:3725 121. Pigeon Forge A Tennessee 1466.1
script.js:3725 122. Riverview C Florida 1465.64
script.js:3725 123. Newnan A Georgia 1464.72
script.js:3725 124. Doral Academy A Florida 1463.54
script.js:3725 125. Holy Names Academy A Washington 1463.35
script.js:3725 126. Marmion Academy A Illinois 1462.85
script.js:3725 127. Punahou A Hawaii 1460.63
script.js:3725 128. Tippecanoe A Ohio 1459.08
script.js:3725 129. Foothill A California 1449.99
script.js:3725 130. Bozeman A Montana 1448.13
script.js:3725 131. Friends Central A Pennsylvania 1445.65
script.js:3725 132. Lewis and Clark A Washington 1445.54
script.js:3725 133. Charleston Catholic B West Virginia 1439.47
script.js:3725 134. Morristown East A Tennessee 1436.47
script.js:3725 135. Nitro B West Virginia 1428.13
script.js:3725 136. Archimedean B Florida 1426.55
script.js:3725 137. Miami Palmetto E Florida 1425.68
script.js:3725 138. Wilmington Friends A Deleware 1423.49
script.js:3725 139. Skyview B Montana 1422.75
script.js:3725 140. Wilmington Friends B Deleware 1418.72
script.js:3725 141. Leonia A New Jersey 1417.75
script.js:3725 142. Ardsley A New York 1417.71
script.js:3725 143. Nichols C New York 1413.02
script.js:3725 144. Gunderson A California 1412.72
script.js:3725 145. Lincoln A Washington 1412.52
script.js:3725 146. Hewlett B New Jersey 1407.94
script.js:3725 147. Pine View A Florida 1406.33
script.js:3725 148. Centennial HS B Maryland 1405.34
script.js:3725 149. BASIS McLean A Virginia 1403.75
script.js:3725 150. Poca A West Virginia 1402.98
script.js:3725 151. Paramus A New Jersey 1402.89
script.js:3725 152. Riverview B Florida 1398.17
script.js:3725 153. Winnebago A Illinois 1397.11
script.js:3725 154. St. Joseph A New Jersey 1396.86
script.js:3725 155. Caravel A Deleware 1396.57
script.js:3725 156. Amherst B New York 1394.03
script.js:3725 157. East Valley B Washington 1391.46
script.js:3725 158. Dickinson A Deleware 1387.88
script.js:3725 159. Woodstock A Georgia 1385.49
script.js:3725 160. Billings West A Montana 1382.29
script.js:3725 161. Starr's Mill D Georgia 1379.73
script.js:3725 162. Newark Charter B Deleware 1375.57
script.js:3725 163. Classical Prep A Florida 1374.3
script.js:3725 164. Jesuit B Washington 1372.41
script.js:3725 165. Commerce A Georgia 1371.47
script.js:3725 166. Manatee A Florida 1371.04
script.js:3725 167. White Plains A New York 1370.6
script.js:3725 168. Seymour A Tennessee 1368.89
script.js:3725 169. Glenelg Country School A Maryland 1367.93
script.js:3725 170. Archimedean C Florida 1367.44
script.js:3725 171. Beavercreek B Ohio 1367.11
script.js:3725 172. Berkeley Prep A Florida 1363.45
script.js:3725 173. Punahou B Hawaii 1361.51
script.js:3725 174. Riverview E Florida 1356.59
script.js:3725 175. Moorestown Friends A New Jersey 1356.24
script.js:3725 176. Tantasqua A Massachusetts 1354.19
script.js:3725 177. Northfield Mt. Hermon A Massachusetts 1354.02
script.js:3725 178. Wilmington Friends E Deleware 1343.47
script.js:3725 179. Starr's Mill C Georgia 1343.34
script.js:3725 180. Wilmington Friends D Deleware 1336.81
script.js:3725 181. Miami Palmetto G Florida 1332.58
script.js:3725 182. Williams Bay B Illinois 1332.52
script.js:3725 183. Piedmont Hills A California 1330.35
script.js:3725 184. Tower Hill B Delaware 1328.08
script.js:3725 185. Billings West B Montana 1318.65
script.js:3725 186. Amherst A New York 1316.57
script.js:3725 187. Tantasqua B Massachusetts 1315.57
script.js:3725 188. Salem A Massachusetts 1314.27
script.js:3725 189. George Walton A Georgia 1312.2
script.js:3725 190. Woodward Academy A Georgia 1305.74
script.js:3725 191. Frenchtown A Washington 1303.88
script.js:3725 192. Northwestern Middle A Louisiana 1299.46
script.js:3725 193. Miami Palmetto F Florida 1299.21
script.js:3725 194. Saratoga C California 1296.97
script.js:3725 195. Fordham Hall Academy A New Jersey 1294.4
script.js:3725 196. Johnson B Kentucky 1294.3
script.js:3725 197. Fordham Prep A New Jersey 1290.24
script.js:3725 198. Westview B Washington 1289.16
script.js:3725 199. Archimedean E Florida 1286.06
script.js:3725 200. Starr's Mill E Georgia 1283.91
script.js:3725 201. John Paul II A Washington 1281.39
script.js:3725 202. Moorestown Friends B New Jersey 1278.47
script.js:3725 203. Archimedean D Florida 1273.75
script.js:3725 204. Team Holmdel A New Jersey 1273.35
script.js:3725 205. Riverview D Florida 1272.18
script.js:3725 206. Horace Greeley A New York 1269.43
script.js:3725 207. Creekside A Georgia 1262.68
script.js:3725 208. Williams Bay C Illinois 1261.95
script.js:3725 209. Zachary C Louisiana 1261.59
script.js:3725 210. Riverside A Montana 1257.53
script.js:3725 211. Miami Palmetto J Florida 1251.41
script.js:3725 212. Wilmington Friends C Deleware 1250.33
script.js:3725 213. Miami Palmetto D Florida 1247.12
script.js:3725 214. Wilmington Friends G Deleware 1244.49
script.js:3725 215. Skyview C Montana 1244.09
script.js:3725 216. Wilmington Friends F Deleware 1237.12
script.js:3725 217. Caravel B Deleware 1236.48
script.js:3725 218. Les Quiz A California 1234.59
script.js:3725 219. Apalachee A Georgia 1234.48
script.js:3725 220. Miami Palmetto I Florida 1229.72
script.js:3725 221. Johnson C Kentucky 1220.33
script.js:3725 222. Columbia River B Washington 1217.08
script.js:3725 223. Miami Palmetto H Florida 1215.22
script.js:3725 224. Fordham Hall Academy B New Jersey 1213.05
script.js:3725 225. Morristown East B Tennessee 1207.96
script.js:3725 226. Gatlinburg-Pittman B Tennessee 1196.94
script.js:3725 227. Barrington B Illinois 1196.08
script.js:3725 228. Frenchtown B Washington 1189.24
script.js:3725 229. St. Peter's Prep A New Jersey 1177.32
script.js:3725 230. Tenafly B New Jersey 1155.94
script.js:3725 231. Mount Vernon A Virginia 1148.9
script.js:3725 232. St. Peter's Prep B New Jersey 1145.89
script.js:3725 233. Donovan Catholic A New Jersey 1128.62
script.js:3725 234. Poca B West Virginia 1125.18
### Junior Varsity Rankings
script.js:3736 1. Hunter College High B New York 1998.16
script.js:3736 2. Churchill I A New Jersey 1953.71
script.js:3736 3. Methacton C Pennsylvania 1904.93
script.js:3736 4. Ransom Everglades C Florida 1829.23
script.js:3736 5. Phillips Exeter B Massachusetts 1822.91
script.js:3736 6. Lexington B Massachusetts 1774.41
script.js:3736 7. Montgomery Blair B Maryland 1755.03
script.js:3736 8. Wilmington Friends H Deleware 1744.28
script.js:3736 9. Horace Greeley B New York 1737.81
script.js:3736 10. Wilton B Connecticut 1712.78
script.js:3736 11. Ridgewood C New Jersey 1706.68
script.js:3736 12. Auburn B Illinois 1696.1
script.js:3736 13. Princeton C New Jersey 1683.96
script.js:3736 14. Team Holmdel B New Jersey 1678.77
script.js:3736 15. Mission San Jose California 1675.26
script.js:3736 16. Millburn D New Jersey 1671.59
script.js:3736 17. Tesla STEM A Washington 1669.96
script.js:3736 18. Saggitarius A California 1664.15
script.js:3736 19. Miami Palmetto P Florida 1663.63
script.js:3736 20. Yonkers A New York 1633.62
script.js:3736 21. Richard Montgomery B Maryland 1628.35
script.js:3736 22. Churchill II A New Jersey 1627.98
script.js:3736 23. Wilton A Connecticut 1620.6
script.js:3736 24. Chattahoochee B Georgia 1620.44
script.js:3736 25. Stevenson E Illinois 1617.98
script.js:3736 26. Hermann Homeschool A Georgia 1616.12
script.js:3736 27. Riverview H Florida 1610.67
script.js:3736 28. Riverview F Florida 1606.65
script.js:3736 29. Morgantown A West Virginia 1602.83
script.js:3736 30. Stevenson D Illinois 1597.86
script.js:3736 31. Chamblee Charter A Georgia 1591.54
script.js:3736 32. Mountain Lakes New Jersey 1590.27
script.js:3736 33. Libby Middle School A Washington 1589.63
script.js:3736 34. Berkeley Prep C Florida 1589.19
script.js:3736 35. Thomas Jefferson D Virginia 1588.39
script.js:3736 36. Homewood-Flossmoor B Illinois 1568.26
script.js:3736 37. California A California 1562.26
script.js:3736 38. Belen Jesuit C Florida 1555.64
script.js:3736 39. Ransom Everglades D Florida 1553.4
script.js:3736 40. Team Coldhug B Connecticut 1548.59
script.js:3736 41. Miami Palmetto M Florida 1533.27
script.js:3736 42. Fordham Prep B New Jersey 1531.63
script.js:3736 43. Largo C Florida 1528.85
script.js:3736 44. Harker A California 1528.64
script.js:3736 45. John Adams A West Virginia 1526.56
script.js:3736 46. McLean A Virginia 1525.17
script.js:3736 47. Kinnelon A New Jersey 1523.68
script.js:3736 48. Hewlett C New Jersey 1514.97
script.js:3736 49. Saratoga D California 1510.94
script.js:3736 50. Archimedean F Florida 1506.21
script.js:3736 51. Thomas Jefferson C Virginia 1504.66
script.js:3736 52. Santa Clara A California 1503.83
script.js:3736 53. Fulton Science Academy A Georgia 1499.26
script.js:3736 54. Tenafly C New Jersey 1498.05
script.js:3736 55. Bozeman C Montana 1495.73
script.js:3736 56. Stanburg B Illinois 1492.93
script.js:3736 57. Ranney B New Jersey 1480.82
script.js:3736 58. Homestead A California 1477.89
script.js:3736 59. Miami Palmetto L Florida 1477.17
script.js:3736 60. Millburn Middle School A New Jersey 1469.19
script.js:3736 61. Cherokee Bluff Georgia 1461.93
script.js:3736 62. Centennial HS C Maryland 1449.99
script.js:3736 63. Nichols D New York 1445.62
script.js:3736 64. Manatee B Florida 1444.47
script.js:3736 65. Skyview D Montana 1444.47
script.js:3736 66. Odle Middle A Washington 1444.12
script.js:3736 67. Newnan C Georgia 1440.14
script.js:3736 68. Newnan B Georgia 1439.9
script.js:3736 69. Brookwood B Georgia 1438.15
script.js:3736 70. High Tech B New Jersey 1437.15
script.js:3736 71. Doral Academy B Florida 1431.84
script.js:3736 72. Classical Prep B Florida 1419.82
script.js:3736 73. Mt. Spokane C Washington 1418.53
script.js:3736 74. Tower Hill C Delaware 1412.49
script.js:3736 75. Montgomery Blair C Maryland 1409.57
script.js:3736 76. Mt. Spokane D Washington 1406.74
script.js:3736 77. Charleston Catholic D West Virginia 1388.06
script.js:3736 78. Berkeley Prep D Florida 1382.3
script.js:3736 79. Georgetown Day B DC 1379.98
script.js:3736 80. South Brunswick A New Jersey 1375.97
script.js:3736 81. Wilmington Friends I Deleware 1370.56
script.js:3736 82. Miami Palmetto O Florida 1370.38
script.js:3736 83. Miami Palmetto R Florida 1365.22
script.js:3736 84. Centennial HS E Maryland 1361
script.js:3736 85. Yonkers B New York 1360.06
script.js:3736 86. Churchill I B New Jersey 1355.71
script.js:3736 87. Ridgewood D New Jersey 1353.68
script.js:3736 88. St. Anselm's B Maryland 1352.25
script.js:3736 89. Winnebago B Illinois 1352.21
script.js:3736 90. Nichols E New York 1346.56
script.js:3736 91. Miami Palmetto K Florida 1344.21
script.js:3736 92. John Paul II B Washington 1341.82
script.js:3736 93. Centennial HS D Maryland 1335.52
script.js:3736 94. St. Joseph B New Jersey 1332.22
script.js:3736 95. East Valley C Washington 1331.06
script.js:3736 96. Wilmington Friends M Deleware 1324.41
script.js:3736 97. St. Peter's Prep C New Jersey 1323.41
script.js:3736 98. Princeton D New Jersey 1322.99
script.js:3736 99. Billings Senior B Montana 1318.49
script.js:3736 100. Charleston Catholic C West Virginia 1318.1
script.js:3736 101. Phillips Andover A Massachusetts 1315.11
script.js:3736 102. Greens Farms B Connecticut 1308.39
script.js:3736 103. Miami Palmetto N Florida 1306.99
script.js:3736 104. Bromfield A Massachusetts 1304.9
script.js:3736 105. Wilmington Friends L Deleware 1300.14
script.js:3736 106. Beavercreek C Ohio 1295.22
script.js:3736 107. Saratoga E California 1294.84
script.js:3736 108. Stevenson F Illinois 1288.69
script.js:3736 109. Leonia A New Jersey 1287.18
script.js:3736 110. Wilmington Friends J Deleware 1286.1
script.js:3736 111. Riverview G Florida 1285.3
script.js:3736 112. Aptakisic A Illinois 1281.93
script.js:3736 113. Mountain View A California 1279.41
script.js:3736 114. Donovan Catholic B New Jersey 1274.55
script.js:3736 115. Duvall Washington 1268.96
script.js:3736 116. Park City B Montana 1268.16
script.js:3736 117. Riverview I Florida 1265.86
script.js:3736 118. Fordham Hall Academy C New Jersey 1264.27
script.js:3736 119. Apalachee B Georgia 1261.13
script.js:3736 120. BASIS Brooklyn A New York 1239.12
script.js:3736 121. Veterans B Georgia 1233.6
script.js:3736 122. Park City A Montana 1233.09
script.js:3736 123. Eriksen B California 1227.95
script.js:3736 124. Williams Bay D Illinois 1227.62
script.js:3736 125. Riverview J Florida 1223.43
script.js:3736 126. Iroquois B New York 1219.5
script.js:3736 127. George Washington A New Jersey 1217.02
script.js:3736 128. Wilmington Friends K Deleware 1207.37
script.js:3736 129. George Walton B Georgia 1205.01
script.js:3736 130. Tippecanoe B Ohio 1201.28
script.js:3736 131. Miami Palmetto Q Florida 1161.32
### Middle School Rankings
script.js:3747 1. Trinity Prep C Florida 1825.76
script.js:3747 2. Burleigh Manor A Maryland 1764.68
script.js:3747 3. Burleigh Manor B Maryland 1674.64
script.js:3747 4. Nysmith A Virginia 1620.84
script.js:3747 5. Stoller K Washington 1589.19
script.js:3747 6. Tenafly Middle A New Jersey 1583.11
script.js:3747 7. Stoller H Washington 1557.16
script.js:3747 8. Centennial Lane ES A Maryland 1556.03
script.js:3747 9. Compass A Virginia 1528.42
script.js:3747 10. Tenafly Middle B New Jersey 1459.49
script.js:3747 11. Challenger-Almaden A California 1451.04
script.js:3747 12. Nysmith B Virginia 1439.4
script.js:3747 13. Burleigh Manor D Maryland 1437.75
script.js:3747 14. Burleigh Manor C Maryland 1389.82
script.js:3747 15. Harvest Park A California 1379.63
script.js:3747 16. Rippon A Virginia 1375.56
script.js:3747 17. Trinity Prep D Florida 1374.8
script.js:3747 18. Classical Prep C Florida 1371.31
script.js:3747 19. Centennial Lane ES B Maryland 1353.31
script.js:3747 20. JLS A California 1351.59
script.js:3747 21. Centennial Lane ES C Maryland 1320.14
script.js:3747 22. Stoller W Washington 1276.16
script.js:3747 23. Tenafly Middle C New Jersey 1275.05
script.js:3747 24. Rippon B Virginia 1272.93
script.js:3747 25. Indian Fields A New Jersey 1270.88
script.js:3747 26. Classical Prep D Florida 1216.94
script.js:3747 27. Stoller T Washington 1210.85
script.js:3747 28. Classical Prep E Florida 1175.26
script.js:3747 29. BRIGHT Homeschool A New Jersey 1171.52
