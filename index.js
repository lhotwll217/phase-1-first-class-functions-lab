// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2);

}

const returnLastTwoDrivers = function () {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = x => {
    return function (fare) {
        return fare * x;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, returnLastTwoDrivers) => {
    return returnLastTwoDrivers(arrayOfDrivers);
}