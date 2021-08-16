"""Python script for converting candle spading data to a format that we can use
"""

import re

# Copy-paste columns 'Seed #' up to 'Candle 4' from the candle spading sheet
data = """
20		1	2	1	4
23		4	5	2	1
24		5	2	5	1
25		1	3	5	1
26		1	5	3	2
32		1	2	1	4
33		3	1	5	3
33		3	1	5	3
34		5	5	2	5
34		5	5	2	5
35		2	3	5	2
35		2	3	5	2
36		2	1	2	3
36		2	1	2	3
37		2	3	5	1
38		5	5	2	4
40		5	5	2	3
42		5	4	4	1
43		5	3	2	1
44		2	1	5	1
45		1	3	2	1
46		5	5	1	5
47		2	3	5	2
48		5	1	2	5
49		4	1	2	4
57		2	2	5	4
59		1	2	2	5
66		3	5	5	4
79		3	3	1	3
82		5	4	2	4
82		5	4	2	4
95		2	2	4	2
97		5	4	2	5
105		2	3	3	5
106		4	4	3	1
108		3	3	2	3
108		3	3	2	3
109		5	3	1	5
110		5	1	4	5
111		1	4	5	1
114		5	2	5	1
116		2	2	5	2
117		2	5	1	4
119		3	4	1	5
119		3	4	1	5
120		3	1	1	3
121		4	4	4	5
121		4	4	4	5
122		2	3	2	4
123		2	4	4	5
133		2	3	4	5
134		4	3	4	2
136		1	1	3	4
137		1	1	5	4
137		1	1	5	4
138		3	5	3	4
139		3	2	4	1
140		5	1	1	3
141		4	5	5	1
142		4	4	3	5
143		2	5	4	1
143		2	5	4	1
144		4	4	3	1
146		3	2	5	2
146		3	2	5	2
146		3	2	5	2
147		5	2	4	3
147		5	2	4	3
147		5	2	4	3
147		5	2	4	3
148		4	2	2	3
148		4	2	2	3
148		4	2	2	3
148		4	2	2	3
149		1	3	3	4
149		1	3	3	4
152		4	1	2	4
153		5	3	2	1
162		3	4	5	3
163		3	1	1	4
165		4	3	1	2
166		1	4	3	4
167		1	2	3	4
168		4	3	5	2
169		4	5	3	2
171		4	4	3	4
178		5	1	1	4
179		3	1	3	4
180		3	4	4	2
184		2	3	1	3
184		2	3	1	3
185		3	1	4	2
185		3	1	4	2
186		5	3	3	5
186		5	3	3	5
186		5	3	3	5
187		1	3	2	3
188		5	4	5	3
188		5	4	5	3
190		3	4	2	5
203		5	2	1	5
203		5	2	1	5
203		5	2	1	5
203		5	2	1	5
203		5	2	1	5
204		5	4	3	4
204		5	4	3	4
204		5	4	3	4
204		5	4	3	4
204		5	4	3	4
204		5	4	3	4
204		5	4	3	4
205		2	5	2	3
205		2	5	2	3
205		2	5	2	3
205		2	5	2	3
205		2	5	2	3
205		2	5	2	3
206		1	3	1	4
207		1	1	4	1
225		5	4	1	3
226		2	3	4	3
241		1	3	4	5
241		1	3	4	5
242		3	5	1	2
242		3	5	1	2
243		5	5	2	5
244		5	5	4	1
459		2	1	2	4
525		2	5	1	3
526		3	1	4	1
527		5	1	1	3
562		4	2	1	2
563		1	4	1	3
""".strip()

EQUIPMENT = {
    1: "EQUIP_EXTRA_WIDE_HEAD_CANDLE",
    2: "EQUIP_ABRACANDALABRA",
    3: "EQUIP_NOVELTY_SPARKLING_CANDLE",
    4: "EQUIP_EXTRA_LARGE_UTILITY_CANDLE",
    5: "EQUIP_RUNED_TAPER_CANDLE",
}

PREMIUM = {
    1: "PREMIUM_SALSA_CALIENTE",
    2: "PREMIUM_NAPALM_IN_THE_MORNING",
    3: "PREMIUM_SCENT_OF_A_HUMAN",
    4: "PREMIUM_SMOLDERING_CLOVER",
    5: "PREMIUM_THE_BEAST_WITHIN",
}

BASIC = {
    1: "BASIC_RAINBOW_GLITTER_CANDLE",
    2: "BASIC_EAR_CANDLE",
    3: "BASIC_BANANA_CANDLE",
    4: "BASIC_NATURAL_MAGICK_CANDLE",
    5: "BASIC_VOTIVE_OF_CONFIDENCE",
}

seen = {}  # Use dict to preserve order

for line_num, line in enumerate(data.splitlines()):
    match = re.match(r"(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)", line)
    assert match, f"Failed to match pattern at line {line_num}: {line!r}"

    seed = int(match[1])
    equip = EQUIPMENT[int(match[2])]
    premium = PREMIUM[int(match[3])]
    basic1 = BASIC[int(match[4])]
    basic2 = BASIC[int(match[5])]

    # Deduplicate
    seen[seed, equip, premium, basic1, basic2] = True

print("{")
for seed, equip, premium, basic1, basic2 in sorted(seen.keys()):
    print(
        f"  {seed}: {{ equipment: {equip}, premium: {premium}, basic1: {basic1}, basic2: {basic2} }},"
    )
print("}")
