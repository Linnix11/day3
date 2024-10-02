function fillBus(peopleAtBusStops, busSeats) {
    if (!Array.isArray(peopleAtBusStops) || typeof busSeats !== 'number' || busSeats <= 0) {
        return -1;
    }

    let totalPeople = 0;
    let i = 0;

    while (i < peopleAtBusStops.length) {
        totalPeople += peopleAtBusStops[i];

        if (totalPeople >= busSeats) {
            return i;
        }

        totalPeople += 2;
        i++;
    }

    return -1;
}

///////////
console.log(fillBus([1, 3, 10, 1], 12)); 
