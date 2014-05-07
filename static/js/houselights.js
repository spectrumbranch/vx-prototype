var AUTOPLAY = false;


// popcorn -- http://popcornjs.org/popcorn-docs

var doLyrics = function(pop) {
	pop.footnote({
		start: 6,
		end: 13,
		text: "don't you know that time it flows ever outward?",
		target: "lyrics"
	});
	pop.footnote({
		start: 15,
		end: 22,
		text: "still you read stories backwards just to feel hope",
		target: "lyrics"
	});
	pop.footnote({
		start: 22,
		end: 29,
		text: "on roslyn street, there lies a little gypsy house",
		target: "lyrics"
	});
	pop.footnote({
		start: 29,
		end: 34,
		text: "where we breathe, where we think we make sound",
		target: "lyrics"
	});
	pop.footnote({
		start: 34,
		end: 42,
		text: "la la la.. la la la.. la la la.",
		target: "lyrics"
	});
	pop.footnote({
		start: 45,
		end: 52,
		text: "old dead leaves on a boiler plate way downstairs",
		target: "lyrics"
	});
	pop.footnote({
		start: 53,
		end: 62,
		text: "from the gypsy queen and her entourage of children (slaves)",
		target: "lyrics"
	});
	pop.footnote({
		start: 62,
		end: 68,
		text: "that old mold smell from all the mice who've met their fiery hell",
		target: "lyrics"
	});
	pop.footnote({
		start: 68,
		end: 73,
		text: "an early frost, a way for us to survive",
		target: "lyrics"
	});
	pop.footnote({
		start: 73,
		end: 78,
		text: "la la la.. la la la.. la la la.",
		target: "lyrics"
	});
	pop.footnote({
		start: 78,
		end: 88,
		text: "and when we go so far away from this place",
		target: "lyrics"
	});
	pop.footnote({
		start: 88,
		end: 98,
		text: "who will find the glowing paintings along the way?",
		target: "lyrics"
	});
	pop.footnote({
		start: 102,
		end: 110,
		text: "ten dark rooms painted black from all the years of neglect",
		target: "lyrics"
	});
	pop.footnote({
		start: 110,
		end: 118,
		text: "a bandit crew still receiving all those fake checks in the mail",
		target: "lyrics"
	});
	pop.footnote({
		start: 118,
		end: 126,
		text: "one thousand names for one single person out there",
		target: "lyrics"
	});
	pop.footnote({
		start: 126,
		end: 136,
		text: "on brooklyn streets, cheatin', stealin', livin' elsewhere",
		target: "lyrics"
	});
	pop.footnote({
		start: 137,
		end: 145,
		text: "and when we go so far away from this place",
		target: "lyrics"
	});
	pop.footnote({
		start: 145,
		end: 153,
		text: "who will find the glowing paintings along the way?",
		target: "lyrics"
	});
	pop.footnote({
		start: 153,
		end: 157,
		text: "there's writing on the walls",
		target: "lyrics"
	});
	pop.footnote({
		start: 157,
		end: 163,
		text: "in words the children learned themselves",
		target: "lyrics"
	});
	pop.footnote({
		start: 163,
		end: 166,
		text: "there's writing on the walls",
		target: "lyrics"
	});
	pop.footnote({
		start: 167,
		end: 172,
		text: "I wish that I could help you out",
		target: "lyrics"
	});
	pop.footnote({
		start: 172,
		end: 176,
		text: "there's writing on the walls",
		target: "lyrics"
	});
	pop.footnote({
		start: 176,
		end: 180,
		text: "in words the children learned themselves",
		target: "lyrics"
	});
	pop.footnote({
		start: 181,
		end: 184,
		text: "there's writing on the walls",
		target: "lyrics"
	});
	pop.footnote({
		start: 184,
		end: 193,
		text: "I wish that I could help you now",
		target: "lyrics"
	});
}

var doBeats = function(pop) {
	
	//for repeat csv->this conversion, ^,$ => ^ , "beat": $  THEN ^\r\n$ => ^ },{ "trigger":  $ THEN fix beginning and end 
	//sonic-annotator -s vamp:qm-vamp-plugins:qm-barbeattrackerbeats > beats.n3
	//sonic-annotator -t beats.n3 11_GypsyLoft.wav -w csv zxzxzxzxx
	var beats = [ { "trigger": 0.522448979, "beat": "2" },{ "trigger": 0.940408163, "beat": "3" },{ "trigger": 1.369977324, "beat": "4" },{ "trigger": 1.904036281, "beat": "1" },{ "trigger": 2.461315192, "beat": "2" },{ "trigger": 3.006984126, "beat": "3" },{ "trigger": 3.529433106, "beat": "4" },{ "trigger": 4.075102040, "beat": "1" },{ "trigger": 4.632380952, "beat": "2" },{ "trigger": 5.178049886, "beat": "3" },{ "trigger": 5.723718820, "beat": "4" },{ "trigger": 6.257777777, "beat": "1" },{ "trigger": 6.815056689, "beat": "2" },{ "trigger": 7.360725623, "beat": "3" },{ "trigger": 7.894784580, "beat": "4" },{ "trigger": 8.452063492, "beat": "1" },{ "trigger": 8.997732426, "beat": "2" },{ "trigger": 9.543401360, "beat": "3" },{ "trigger": 10.077460317, "beat": "4" },{ "trigger": 10.623129251, "beat": "1" },{ "trigger": 11.168798185, "beat": "2" },{ "trigger": 11.714467120, "beat": "3" },{ "trigger": 12.271746031, "beat": "4" },{ "trigger": 12.817414965, "beat": "1" },{ "trigger": 13.351473922, "beat": "2" },{ "trigger": 13.897142857, "beat": "3" },{ "trigger": 14.442811791, "beat": "4" },{ "trigger": 14.988480725, "beat": "1" },{ "trigger": 15.534149659, "beat": "2" },{ "trigger": 16.079818594, "beat": "3" },{ "trigger": 16.625487528, "beat": "4" },{ "trigger": 17.171156462, "beat": "1" },{ "trigger": 17.716825396, "beat": "2" },{ "trigger": 18.274104308, "beat": "3" },{ "trigger": 18.819773242, "beat": "4" },{ "trigger": 19.365442176, "beat": "1" },{ "trigger": 19.911111111, "beat": "2" },{ "trigger": 20.456780045, "beat": "3" },{ "trigger": 20.990839002, "beat": "4" },{ "trigger": 21.536507936, "beat": "1" },{ "trigger": 22.082176870, "beat": "2" },{ "trigger": 22.627845804, "beat": "3" },{ "trigger": 23.185124716, "beat": "4" },{ "trigger": 23.719183673, "beat": "1" },{ "trigger": 24.264852607, "beat": "2" },{ "trigger": 24.810521541, "beat": "3" },{ "trigger": 25.367800453, "beat": "4" },{ "trigger": 25.913469387, "beat": "1" },{ "trigger": 26.459138321, "beat": "2" },{ "trigger": 27.004807256, "beat": "3" },{ "trigger": 27.550476190, "beat": "4" },{ "trigger": 28.096145124, "beat": "1" },{ "trigger": 28.641814058, "beat": "2" },{ "trigger": 29.187482993, "beat": "3" },{ "trigger": 29.721541950, "beat": "4" },{ "trigger": 30.267210884, "beat": "1" },{ "trigger": 30.801269841, "beat": "2" },{ "trigger": 31.346938775, "beat": "3" },{ "trigger": 31.892607709, "beat": "4" },{ "trigger": 32.438276643, "beat": "1" },{ "trigger": 32.983945578, "beat": "2" },{ "trigger": 33.541224489, "beat": "3" },{ "trigger": 34.086893424, "beat": "4" },{ "trigger": 34.620952380, "beat": "1" },{ "trigger": 35.178231292, "beat": "2" },{ "trigger": 35.723900226, "beat": "3" },{ "trigger": 36.269569160, "beat": "4" },{ "trigger": 36.815238095, "beat": "1" },{ "trigger": 37.349297052, "beat": "2" },{ "trigger": 37.894965986, "beat": "3" },{ "trigger": 38.440634920, "beat": "4" },{ "trigger": 38.986303854, "beat": "1" },{ "trigger": 39.520362811, "beat": "2" },{ "trigger": 40.066031746, "beat": "3" },{ "trigger": 40.600090702, "beat": "4" },{ "trigger": 41.145759637, "beat": "1" },{ "trigger": 41.679818594, "beat": "2" },{ "trigger": 42.237097505, "beat": "3" },{ "trigger": 42.805986394, "beat": "4" },{ "trigger": 43.351655328, "beat": "1" },{ "trigger": 43.897324263, "beat": "2" },{ "trigger": 44.442993197, "beat": "3" },{ "trigger": 44.988662131, "beat": "4" },{ "trigger": 45.534331065, "beat": "1" },{ "trigger": 46.091609977, "beat": "2" },{ "trigger": 46.637278911, "beat": "3" },{ "trigger": 47.182947845, "beat": "4" },{ "trigger": 47.728616780, "beat": "1" },{ "trigger": 48.274285714, "beat": "2" },{ "trigger": 48.808344671, "beat": "3" },{ "trigger": 49.354013605, "beat": "4" },{ "trigger": 49.899682539, "beat": "1" },{ "trigger": 50.445351473, "beat": "2" },{ "trigger": 50.991020408, "beat": "3" },{ "trigger": 51.536689342, "beat": "4" },{ "trigger": 52.082358276, "beat": "1" },{ "trigger": 52.628027210, "beat": "2" },{ "trigger": 53.162086167, "beat": "3" },{ "trigger": 53.719365079, "beat": "4" },{ "trigger": 54.265034013, "beat": "1" },{ "trigger": 54.810702947, "beat": "2" },{ "trigger": 55.356371882, "beat": "3" },{ "trigger": 55.902040816, "beat": "4" },{ "trigger": 56.447709750, "beat": "1" },{ "trigger": 56.993378684, "beat": "2" },{ "trigger": 57.539047619, "beat": "3" },{ "trigger": 58.084716553, "beat": "4" },{ "trigger": 58.630385487, "beat": "1" },{ "trigger": 59.176054421, "beat": "2" },{ "trigger": 59.721723356, "beat": "3" },{ "trigger": 60.267392290, "beat": "4" },{ "trigger": 60.813061224, "beat": "1" },{ "trigger": 61.358730158, "beat": "2" },{ "trigger": 61.904399092, "beat": "3" },{ "trigger": 62.450068027, "beat": "4" },{ "trigger": 62.995736961, "beat": "1" },{ "trigger": 63.541405895, "beat": "2" },{ "trigger": 64.087074829, "beat": "3" },{ "trigger": 64.632743764, "beat": "4" },{ "trigger": 65.178412698, "beat": "1" },{ "trigger": 65.724081632, "beat": "2" },{ "trigger": 66.281360544, "beat": "3" },{ "trigger": 66.815419501, "beat": "4" },{ "trigger": 67.361088435, "beat": "1" },{ "trigger": 67.918367346, "beat": "2" },{ "trigger": 68.452426303, "beat": "3" },{ "trigger": 68.998095238, "beat": "4" },{ "trigger": 69.532154195, "beat": "1" },{ "trigger": 70.077823129, "beat": "2" },{ "trigger": 70.623492063, "beat": "3" },{ "trigger": 71.180770975, "beat": "4" },{ "trigger": 71.726439909, "beat": "1" },{ "trigger": 72.272108843, "beat": "2" },{ "trigger": 72.817777777, "beat": "3" },{ "trigger": 73.351836734, "beat": "4" },{ "trigger": 73.897505668, "beat": "1" },{ "trigger": 74.454784580, "beat": "2" },{ "trigger": 75.000453514, "beat": "3" },{ "trigger": 75.557732426, "beat": "4" },{ "trigger": 76.091791383, "beat": "1" },{ "trigger": 76.637460317, "beat": "2" },{ "trigger": 77.171519274, "beat": "3" },{ "trigger": 77.717188208, "beat": "4" },{ "trigger": 78.262857142, "beat": "1" },{ "trigger": 78.820136054, "beat": "2" },{ "trigger": 79.354195011, "beat": "3" },{ "trigger": 79.899863945, "beat": "4" },{ "trigger": 80.445532879, "beat": "1" },{ "trigger": 81.002811791, "beat": "2" },{ "trigger": 81.548480725, "beat": "3" },{ "trigger": 82.094149659, "beat": "4" },{ "trigger": 82.639818594, "beat": "1" },{ "trigger": 83.173877551, "beat": "2" },{ "trigger": 83.719546485, "beat": "3" },{ "trigger": 84.265215419, "beat": "4" },{ "trigger": 84.810884353, "beat": "1" },{ "trigger": 85.356553287, "beat": "2" },{ "trigger": 85.902222222, "beat": "3" },{ "trigger": 86.447891156, "beat": "4" },{ "trigger": 86.981950113, "beat": "1" },{ "trigger": 87.527619047, "beat": "2" },{ "trigger": 88.084897959, "beat": "3" },{ "trigger": 88.630566893, "beat": "4" },{ "trigger": 89.176235827, "beat": "1" },{ "trigger": 89.710294784, "beat": "2" },{ "trigger": 90.255963718, "beat": "3" },{ "trigger": 90.801632653, "beat": "4" },{ "trigger": 91.335691609, "beat": "1" },{ "trigger": 91.892970521, "beat": "2" },{ "trigger": 92.438639455, "beat": "3" },{ "trigger": 92.984308390, "beat": "4" },{ "trigger": 93.529977324, "beat": "1" },{ "trigger": 94.075646258, "beat": "2" },{ "trigger": 94.621315192, "beat": "3" },{ "trigger": 95.166984126, "beat": "4" },{ "trigger": 95.712653061, "beat": "1" },{ "trigger": 96.269931972, "beat": "2" },{ "trigger": 96.803990929, "beat": "3" },{ "trigger": 97.349659863, "beat": "4" },{ "trigger": 97.883718820, "beat": "1" },{ "trigger": 98.429387755, "beat": "2" },{ "trigger": 98.986666666, "beat": "3" },{ "trigger": 99.532335600, "beat": "4" },{ "trigger": 100.078004535, "beat": "1" },{ "trigger": 100.623673469, "beat": "2" },{ "trigger": 101.169342403, "beat": "3" },{ "trigger": 101.715011337, "beat": "4" },{ "trigger": 102.260680272, "beat": "1" },{ "trigger": 102.794739229, "beat": "2" },{ "trigger": 103.340408163, "beat": "3" },{ "trigger": 103.897687074, "beat": "4" },{ "trigger": 104.443356009, "beat": "1" },{ "trigger": 104.989024943, "beat": "2" },{ "trigger": 105.534693877, "beat": "3" },{ "trigger": 106.080362811, "beat": "4" },{ "trigger": 106.626031746, "beat": "1" },{ "trigger": 107.171700680, "beat": "2" },{ "trigger": 107.717369614, "beat": "3" },{ "trigger": 108.263038548, "beat": "4" },{ "trigger": 108.808707482, "beat": "1" },{ "trigger": 109.354376417, "beat": "2" },{ "trigger": 109.900045351, "beat": "3" },{ "trigger": 110.457324263, "beat": "4" },{ "trigger": 111.002993197, "beat": "1" },{ "trigger": 111.537052154, "beat": "2" },{ "trigger": 112.082721088, "beat": "3" },{ "trigger": 112.628390022, "beat": "4" },{ "trigger": 113.174058956, "beat": "1" },{ "trigger": 113.719727891, "beat": "2" },{ "trigger": 114.265396825, "beat": "3" },{ "trigger": 114.822675736, "beat": "4" },{ "trigger": 115.379954648, "beat": "1" },{ "trigger": 115.914013605, "beat": "2" },{ "trigger": 116.459682539, "beat": "3" },{ "trigger": 116.993741496, "beat": "4" },{ "trigger": 117.539410430, "beat": "1" },{ "trigger": 118.085079365, "beat": "2" },{ "trigger": 118.630748299, "beat": "3" },{ "trigger": 119.164807256, "beat": "4" },{ "trigger": 119.710476190, "beat": "1" },{ "trigger": 120.256145124, "beat": "2" },{ "trigger": 120.801814058, "beat": "3" },{ "trigger": 121.347482993, "beat": "4" },{ "trigger": 121.904761904, "beat": "1" },{ "trigger": 122.462040816, "beat": "2" },{ "trigger": 122.996099773, "beat": "3" },{ "trigger": 123.530158730, "beat": "4" },{ "trigger": 124.075827664, "beat": "1" },{ "trigger": 124.621496598, "beat": "2" },{ "trigger": 125.167165532, "beat": "3" },{ "trigger": 125.712834467, "beat": "4" },{ "trigger": 126.258503401, "beat": "1" },{ "trigger": 126.804172335, "beat": "2" },{ "trigger": 127.349841269, "beat": "3" },{ "trigger": 127.907120181, "beat": "4" },{ "trigger": 128.452789115, "beat": "1" },{ "trigger": 128.998458049, "beat": "2" },{ "trigger": 129.544126984, "beat": "3" },{ "trigger": 130.089795918, "beat": "4" },{ "trigger": 130.635464852, "beat": "1" },{ "trigger": 131.181133786, "beat": "2" },{ "trigger": 131.715192743, "beat": "3" },{ "trigger": 132.260861678, "beat": "4" },{ "trigger": 132.806530612, "beat": "1" },{ "trigger": 133.352199546, "beat": "2" },{ "trigger": 133.897868480, "beat": "3" },{ "trigger": 134.443537414, "beat": "4" },{ "trigger": 134.989206349, "beat": "1" },{ "trigger": 135.534875283, "beat": "2" },{ "trigger": 136.080544217, "beat": "3" },{ "trigger": 136.649433106, "beat": "4" },{ "trigger": 137.195102040, "beat": "1" },{ "trigger": 137.740770975, "beat": "2" },{ "trigger": 138.286439909, "beat": "3" },{ "trigger": 138.820498866, "beat": "4" },{ "trigger": 139.354557823, "beat": "1" },{ "trigger": 139.900226757, "beat": "2" },{ "trigger": 140.469115646, "beat": "3" },{ "trigger": 141.014784580, "beat": "4" },{ "trigger": 141.548843537, "beat": "1" },{ "trigger": 142.094512471, "beat": "2" },{ "trigger": 142.640181405, "beat": "3" },{ "trigger": 143.197460317, "beat": "4" },{ "trigger": 143.731519274, "beat": "1" },{ "trigger": 144.277188208, "beat": "2" },{ "trigger": 144.822857142, "beat": "3" },{ "trigger": 145.368526077, "beat": "4" },{ "trigger": 145.914195011, "beat": "1" },{ "trigger": 146.459863945, "beat": "2" },{ "trigger": 147.005532879, "beat": "3" },{ "trigger": 147.539591836, "beat": "4" },{ "trigger": 148.096870748, "beat": "1" },{ "trigger": 148.630929705, "beat": "2" },{ "trigger": 149.176598639, "beat": "3" },{ "trigger": 149.722267573, "beat": "4" },{ "trigger": 150.267936507, "beat": "1" },{ "trigger": 150.813605442, "beat": "2" },{ "trigger": 151.359274376, "beat": "3" },{ "trigger": 151.904943310, "beat": "4" },{ "trigger": 152.439002267, "beat": "1" },{ "trigger": 152.984671201, "beat": "2" },{ "trigger": 153.518730158, "beat": "3" },{ "trigger": 154.064399092, "beat": "4" },{ "trigger": 154.610068027, "beat": "1" },{ "trigger": 155.167346938, "beat": "2" },{ "trigger": 155.713015873, "beat": "3" },{ "trigger": 156.258684807, "beat": "4" },{ "trigger": 156.804353741, "beat": "1" },{ "trigger": 157.350022675, "beat": "2" },{ "trigger": 157.895691609, "beat": "3" },{ "trigger": 158.429750566, "beat": "4" },{ "trigger": 158.987029478, "beat": "1" },{ "trigger": 159.532698412, "beat": "2" },{ "trigger": 160.078367346, "beat": "3" },{ "trigger": 160.635646258, "beat": "4" },{ "trigger": 161.181315192, "beat": "1" },{ "trigger": 161.715374149, "beat": "2" },{ "trigger": 162.261043083, "beat": "3" },{ "trigger": 162.806712018, "beat": "4" },{ "trigger": 163.340770975, "beat": "1" },{ "trigger": 163.874829931, "beat": "2" },{ "trigger": 164.420498866, "beat": "3" },{ "trigger": 164.966167800, "beat": "4" },{ "trigger": 165.511836734, "beat": "1" },{ "trigger": 166.069115646, "beat": "2" },{ "trigger": 166.626394557, "beat": "3" },{ "trigger": 167.183673469, "beat": "4" },{ "trigger": 167.717732426, "beat": "1" },{ "trigger": 168.275011337, "beat": "2" },{ "trigger": 168.820680272, "beat": "3" },{ "trigger": 169.366349206, "beat": "4" },{ "trigger": 169.900408163, "beat": "1" },{ "trigger": 170.446077097, "beat": "2" },{ "trigger": 170.991746031, "beat": "3" },{ "trigger": 171.537414965, "beat": "4" },{ "trigger": 172.083083900, "beat": "1" },{ "trigger": 172.628752834, "beat": "2" },{ "trigger": 173.186031746, "beat": "3" },{ "trigger": 173.731700680, "beat": "4" },{ "trigger": 174.277369614, "beat": "1" },{ "trigger": 174.823038548, "beat": "2" },{ "trigger": 175.380317460, "beat": "3" },{ "trigger": 175.937596371, "beat": "4" },{ "trigger": 176.471655328, "beat": "1" },{ "trigger": 177.005714285, "beat": "2" },{ "trigger": 177.551383219, "beat": "3" },{ "trigger": 178.097052154, "beat": "4" },{ "trigger": 178.642721088, "beat": "1" },{ "trigger": 179.188390022, "beat": "2" },{ "trigger": 179.722448979, "beat": "3" },{ "trigger": 180.279727891, "beat": "4" },{ "trigger": 180.825396825, "beat": "1" },{ "trigger": 181.359455782, "beat": "2" },{ "trigger": 181.905124716, "beat": "3" },{ "trigger": 182.450793650, "beat": "4" },{ "trigger": 182.996462585, "beat": "1" },{ "trigger": 183.530521541, "beat": "2" },{ "trigger": 184.076190476, "beat": "3" },{ "trigger": 184.621859410, "beat": "4" },{ "trigger": 185.167528344, "beat": "1" },{ "trigger": 185.724807256, "beat": "2" },{ "trigger": 186.258866213, "beat": "3" },{ "trigger": 186.792925170, "beat": "4" },{ "trigger": 187.338594104, "beat": "1" },{ "trigger": 187.884263038, "beat": "2" },{ "trigger": 188.418321995, "beat": "3" },{ "trigger": 188.963990929, "beat": "4" },{ "trigger": 189.521269841, "beat": "1" },{ "trigger": 190.066938775, "beat": "2" },{ "trigger": 190.612607709, "beat": "3" },{ "trigger": 191.146666666, "beat": "4" },{ "trigger": 191.692335600, "beat": "1" },{ "trigger": 192.191564625, "beat": "2" },{ "trigger": 192.690793650, "beat": "3" },{ "trigger": 193.178412698, "beat": "4" },{ "trigger": 193.712471655, "beat": "1" },{ "trigger": 194.246530612, "beat": "2" },{ "trigger": 194.780589569, "beat": "3" },{ "trigger": 195.314648526, "beat": "4" },{ "trigger": 195.848707482, "beat": "1" },{ "trigger": 196.382766439, "beat": "2" },{ "trigger": 196.928435374, "beat": "3" },{ "trigger": 197.462494331, "beat": "4" },{ "trigger": 197.996553287, "beat": "1" },{ "trigger": 198.530612244, "beat": "2" },{ "trigger": 199.064671201, "beat": "3" },{ "trigger": 199.598730158, "beat": "4" },{ "trigger": 200.132789115, "beat": "1" },{ "trigger": 200.666848072, "beat": "2" },{ "trigger": 201.200907029, "beat": "3" },{ "trigger": 201.734965986, "beat": "4" },{ "trigger": 202.269024943, "beat": "1" },{ "trigger": 202.803083900, "beat": "2" },{ "trigger": 203.337142857, "beat": "3" },{ "trigger": 203.871201814, "beat": "4" },{ "trigger": 204.405260770, "beat": "1" },{ "trigger": 204.939319727, "beat": "2" }];

	var totalbeats = 0;
	for (var i = 0; i < beats.length; i++) {
		totalbeats++;
		
		
		//beats[i].trigger; //seconds
		//beats[i].beat; //1,2,3,4
		if (i < beats.length - 1) {
		
			//1 e and a
			var trigger_beat = beats[i].trigger;
			var trigger_nextbeat = beats[i+1].trigger;
			var trigger_and = trigger_beat + (trigger_nextbeat - trigger_beat) / 2;
			var trigger_e = trigger_beat + (trigger_and - trigger_beat) / 2;
			var trigger_a = trigger_and + (trigger_nextbeat - trigger_and) / 2;
			
			
			pop.footnote({
				start: trigger_beat,
				end: trigger_and,
				text: beats[i].beat+' - ['+totalbeats+']',
				target: "beats"
			});
			/*
			pop.footnote({
				start: trigger_e,
				end: trigger_and,
				text: beats[i].beat+',e - ['+totalbeats+']',
				target: "beats"
			});
			*/
			pop.footnote({
				start: trigger_and,
				end: trigger_nextbeat,
				text: beats[i].beat+',and - ['+totalbeats+']',
				target: "beats"
			});
			/*
			pop.footnote({
				start: trigger_a,
				end: trigger_nextbeat,
				text: beats[i].beat+',e,and,a - ['+totalbeats+']',
				target: "beats"
			});
			*/
			
			//1
			if (i % 4 == 1) {
				pop.code({
					start: trigger_beat,
					end: trigger_nextbeat,
					onStart: function(options) {
						GypsyLoftSuite['1']();
					},
					onEnd: function(options) {
						//nothing yet
					}
				});
			}
			
			//2
			if (i % 4 == 2) {
				pop.code({
					start: trigger_beat,
					end: trigger_nextbeat,
					onStart: function(options) {
						GypsyLoftSuite['2']();
					},
					onEnd: function(options) {
						GypsyLoftSuite['clear']();
					}
				});
			}
			
			//3
			if (i % 4 == 3) {
				pop.code({
					start: trigger_beat,
					end: trigger_nextbeat,
					onStart: function(options) {
						GypsyLoftSuite['3']();
					},
					onEnd: function(options) {
						//nothing yet
					}
				});
			}
			
			//4
			if (i % 4 == 0) {
				pop.code({
					start: trigger_beat,
					end: trigger_nextbeat,
					onStart: function(options) {
						GypsyLoftSuite['4']();
					},
					onEnd: function(options) {
						GypsyLoftSuite['clear']();
					}
				});
			}
			
			//stuff that happens every beat
			pop.code({
				start: trigger_beat,
				end: trigger_nextbeat,
				onStart: function(options) {
					GypsyLoftSuite['zigzag']();
				},
				onEnd: function(options) {
					//GypsyLoftSuite['clear']();
				}
			});
			
		}
		
	}
}

document.addEventListener("DOMContentLoaded", function() {
	var pop = Popcorn("#gypsyloftaudio");
	
	doLyrics(pop);
	doBeats(pop);
	
	if (AUTOPLAY) {
		pop.play();
	}
}, false);

/* beats
0.522448979,"2"
0.940408163,"3"
1.369977324,"4"
1.904036281,"1"
2.461315192,"2"
3.006984126,"3"
3.529433106,"4"
4.075102040,"1"
4.632380952,"2"
5.178049886,"3"
5.723718820,"4"
6.257777777,"1"
6.815056689,"2"
7.360725623,"3"
7.894784580,"4"
8.452063492,"1"
8.997732426,"2"
9.543401360,"3"
10.077460317,"4"
10.623129251,"1"
11.168798185,"2"
11.714467120,"3"
12.271746031,"4"
12.817414965,"1"
13.351473922,"2"
13.897142857,"3"
14.442811791,"4"
14.988480725,"1"
15.534149659,"2"
16.079818594,"3"
16.625487528,"4"
17.171156462,"1"
17.716825396,"2"
18.274104308,"3"
18.819773242,"4"
19.365442176,"1"
19.911111111,"2"
20.456780045,"3"
20.990839002,"4"
21.536507936,"1"
22.082176870,"2"
22.627845804,"3"
23.185124716,"4"
23.719183673,"1"
24.264852607,"2"
24.810521541,"3"
25.367800453,"4"
25.913469387,"1"
26.459138321,"2"
27.004807256,"3"
27.550476190,"4"
28.096145124,"1"
28.641814058,"2"
29.187482993,"3"
29.721541950,"4"
30.267210884,"1"
30.801269841,"2"
31.346938775,"3"
31.892607709,"4"
32.438276643,"1"
32.983945578,"2"
33.541224489,"3"
34.086893424,"4"
34.620952380,"1"
35.178231292,"2"
35.723900226,"3"
36.269569160,"4"
36.815238095,"1"
37.349297052,"2"
37.894965986,"3"
38.440634920,"4"
38.986303854,"1"
39.520362811,"2"
40.066031746,"3"
40.600090702,"4"
41.145759637,"1"
41.679818594,"2"
42.237097505,"3"
42.805986394,"4"
43.351655328,"1"
43.897324263,"2"
44.442993197,"3"
44.988662131,"4"
45.534331065,"1"
46.091609977,"2"
46.637278911,"3"
47.182947845,"4"
47.728616780,"1"
48.274285714,"2"
48.808344671,"3"
49.354013605,"4"
49.899682539,"1"
50.445351473,"2"
50.991020408,"3"
51.536689342,"4"
52.082358276,"1"
52.628027210,"2"
53.162086167,"3"
53.719365079,"4"
54.265034013,"1"
54.810702947,"2"
55.356371882,"3"
55.902040816,"4"
56.447709750,"1"
56.993378684,"2"
57.539047619,"3"
58.084716553,"4"
58.630385487,"1"
59.176054421,"2"
59.721723356,"3"
60.267392290,"4"
60.813061224,"1"
61.358730158,"2"
61.904399092,"3"
62.450068027,"4"
62.995736961,"1"
63.541405895,"2"
64.087074829,"3"
64.632743764,"4"
65.178412698,"1"
65.724081632,"2"
66.281360544,"3"
66.815419501,"4"
67.361088435,"1"
67.918367346,"2"
68.452426303,"3"
68.998095238,"4"
69.532154195,"1"
70.077823129,"2"
70.623492063,"3"
71.180770975,"4"
71.726439909,"1"
72.272108843,"2"
72.817777777,"3"
73.351836734,"4"
73.897505668,"1"
74.454784580,"2"
75.000453514,"3"
75.557732426,"4"
76.091791383,"1"
76.637460317,"2"
77.171519274,"3"
77.717188208,"4"
78.262857142,"1"
78.820136054,"2"
79.354195011,"3"
79.899863945,"4"
80.445532879,"1"
81.002811791,"2"
81.548480725,"3"
82.094149659,"4"
82.639818594,"1"
83.173877551,"2"
83.719546485,"3"
84.265215419,"4"
84.810884353,"1"
85.356553287,"2"
85.902222222,"3"
86.447891156,"4"
86.981950113,"1"
87.527619047,"2"
88.084897959,"3"
88.630566893,"4"
89.176235827,"1"
89.710294784,"2"
90.255963718,"3"
90.801632653,"4"
91.335691609,"1"
91.892970521,"2"
92.438639455,"3"
92.984308390,"4"
93.529977324,"1"
94.075646258,"2"
94.621315192,"3"
95.166984126,"4"
95.712653061,"1"
96.269931972,"2"
96.803990929,"3"
97.349659863,"4"
97.883718820,"1"
98.429387755,"2"
98.986666666,"3"
99.532335600,"4"
100.078004535,"1"
100.623673469,"2"
101.169342403,"3"
101.715011337,"4"
102.260680272,"1"
102.794739229,"2"
103.340408163,"3"
103.897687074,"4"
104.443356009,"1"
104.989024943,"2"
105.534693877,"3"
106.080362811,"4"
106.626031746,"1"
107.171700680,"2"
107.717369614,"3"
108.263038548,"4"
108.808707482,"1"
109.354376417,"2"
109.900045351,"3"
110.457324263,"4"
111.002993197,"1"
111.537052154,"2"
112.082721088,"3"
112.628390022,"4"
113.174058956,"1"
113.719727891,"2"
114.265396825,"3"
114.822675736,"4"
115.379954648,"1"
115.914013605,"2"
116.459682539,"3"
116.993741496,"4"
117.539410430,"1"
118.085079365,"2"
118.630748299,"3"
119.164807256,"4"
119.710476190,"1"
120.256145124,"2"
120.801814058,"3"
121.347482993,"4"
121.904761904,"1"
122.462040816,"2"
122.996099773,"3"
123.530158730,"4"
124.075827664,"1"
124.621496598,"2"
125.167165532,"3"
125.712834467,"4"
126.258503401,"1"
126.804172335,"2"
127.349841269,"3"
127.907120181,"4"
128.452789115,"1"
128.998458049,"2"
129.544126984,"3"
130.089795918,"4"
130.635464852,"1"
131.181133786,"2"
131.715192743,"3"
132.260861678,"4"
132.806530612,"1"
133.352199546,"2"
133.897868480,"3"
134.443537414,"4"
134.989206349,"1"
135.534875283,"2"
136.080544217,"3"
136.649433106,"4"
137.195102040,"1"
137.740770975,"2"
138.286439909,"3"
138.820498866,"4"
139.354557823,"1"
139.900226757,"2"
140.469115646,"3"
141.014784580,"4"
141.548843537,"1"
142.094512471,"2"
142.640181405,"3"
143.197460317,"4"
143.731519274,"1"
144.277188208,"2"
144.822857142,"3"
145.368526077,"4"
145.914195011,"1"
146.459863945,"2"
147.005532879,"3"
147.539591836,"4"
148.096870748,"1"
148.630929705,"2"
149.176598639,"3"
149.722267573,"4"
150.267936507,"1"
150.813605442,"2"
151.359274376,"3"
151.904943310,"4"
152.439002267,"1"
152.984671201,"2"
153.518730158,"3"
154.064399092,"4"
154.610068027,"1"
155.167346938,"2"
155.713015873,"3"
156.258684807,"4"
156.804353741,"1"
157.350022675,"2"
157.895691609,"3"
158.429750566,"4"
158.987029478,"1"
159.532698412,"2"
160.078367346,"3"
160.635646258,"4"
161.181315192,"1"
161.715374149,"2"
162.261043083,"3"
162.806712018,"4"
163.340770975,"1"
163.874829931,"2"
164.420498866,"3"
164.966167800,"4"
165.511836734,"1"
166.069115646,"2"
166.626394557,"3"
167.183673469,"4"
167.717732426,"1"
168.275011337,"2"
168.820680272,"3"
169.366349206,"4"
169.900408163,"1"
170.446077097,"2"
170.991746031,"3"
171.537414965,"4"
172.083083900,"1"
172.628752834,"2"
173.186031746,"3"
173.731700680,"4"
174.277369614,"1"
174.823038548,"2"
175.380317460,"3"
175.937596371,"4"
176.471655328,"1"
177.005714285,"2"
177.551383219,"3"
178.097052154,"4"
178.642721088,"1"
179.188390022,"2"
179.722448979,"3"
180.279727891,"4"
180.825396825,"1"
181.359455782,"2"
181.905124716,"3"
182.450793650,"4"
182.996462585,"1"
183.530521541,"2"
184.076190476,"3"
184.621859410,"4"
185.167528344,"1"
185.724807256,"2"
186.258866213,"3"
186.792925170,"4"
187.338594104,"1"
187.884263038,"2"
188.418321995,"3"
188.963990929,"4"
189.521269841,"1"
190.066938775,"2"
190.612607709,"3"
191.146666666,"4"
191.692335600,"1"
192.191564625,"2"
192.690793650,"3"
193.178412698,"4"
193.712471655,"1"
194.246530612,"2"
194.780589569,"3"
195.314648526,"4"
195.848707482,"1"
196.382766439,"2"
196.928435374,"3"
197.462494331,"4"
197.996553287,"1"
198.530612244,"2"
199.064671201,"3"
199.598730158,"4"
200.132789115,"1"
200.666848072,"2"
201.200907029,"3"
201.734965986,"4"
202.269024943,"1"
202.803083900,"2"
203.337142857,"3"
203.871201814,"4"
204.405260770,"1"
204.939319727,"2"


*/


/* lyrics tracking (not updated since the fixes in live code above, this is only a rough take)

0:06-0:12 don't you know that time it flows ever outward? 
0:15-0:22 still you read stories backwards just to feel hope 

0:22-0:28 on roslyn street, there lies a little gypsy house 
0:28-0:33 where we breath, where we think we make sound 
0:33-0:41 la la la.. la la la.. la la la. 

0:44-0:50 old dead leaves on a boiler plate way downstairs 
0:53-1:01 from the gypsy queen and her entourage of children (slaves) 
1:02-1:06 that old mold smell from all the mice who've met their fiery hell 
1:07-1:10 an early frost, a way for us to survive 
1:10-1:18 la la la.. la la la.. la la la. 

1:18-1:26 and when we go so far away from this place 
1:26-1:35 who will find the glowing paintings along the way? 

1:39-1:47 ten dark rooms painted black from years of neglect 
1:48-1:56 a bandit crew still receiving all those fake checks in the mail 
1:57-2:03 one thousand names for one single person out there 
2:06-2:14 on brooklyn streets, cheatin', stealin', livin' elsewhere 

2:15-2:23 and when we go so far away from this place 
2:24-2:30 who will find the glowing paintings along the way? 

2:32-2:36 there's writing on the walls 
2:37-2:42 in words the children learned themselves 
2:43-2:46 there's writing on the walls 
2:48-2:53 I wish that I could help you out 

2:53-2:56 there's writing on the walls 
2:56-2:58 in words the children learned themselves 
3:01-3:04 there's writing on the walls 
3:09-3:13 I wish that I could help you now

*/