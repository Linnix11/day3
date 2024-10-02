// Your code here...
function houseEnergyScore(housingList) {
   // liste // 
   const grades = [
        { limit: 51, grade: 'A' },
        { limit: 90, grade: 'B' },
        { limit: 150, grade: 'C' },
        { limit: 230, grade: 'D' },
        { limit: 330, grade: 'E' },
        { limit: 450, grade: 'F' },
        { limit: 590, grade: 'G' }
    ];

    return housingList
        .map(([name, consumption]) => [
            name, 
            Number(consumption), 
            grades.find(g => Number(consumption) < g.limit)?.grade || 'G'
        ])
        .sort((a, b) => a[1] - b[1]);
}

/////////////////////:

// This lines will display the result for you
if (typeof houseEnergyScore === "function") {
	const scores = [["Hutch", 30], ["Loft", 345], ["Castle", 560], ["Igloo", 12], ["Villa", 232], ["Flat", 212]];
	const result = houseEnergyScore(scores);
	displayResult(result);
}
