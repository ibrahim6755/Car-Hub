export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'ce2d36cafcmsh5903cf28c1f2b80p1e7080jsnb180620b3296',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json()
    return result

}

export const CalculteCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const milageFactor = 0.1;
    const ageFactor = 0.05;
    const milageRate = city_mpg * milageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + milageRate + ageRate;
    return rentalRatePerDay.toFixed(0);

}