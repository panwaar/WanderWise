export const SelectTravelList = [
    {
        id:1,
        title: 'Just Me',
        desc: 'A lone traveler sets out to explore',
        icon: '✈️',
        people:'1 person'
    },
    {
        id:2,
        title: 'A Couple',
        desc: 'Exploring together, creating memories',
        icon: '🥂',
        people:'2 people'
    },
    {
        id:3,
        title: 'Family',
        desc: 'A group of fun-loving adventurers',
        icon: '🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '⛵',
        people:'5 to 10 people'
    }
]

export const SelectBudgetOptions = [
    {
        id:1,
        title: 'Cheap',
        desc: 'Travel smart, spend less',
        icon: '💵',
    },
    {
        id:2,
        title: 'Moderate',
        desc: 'Balanced comfort without breaking the bank',
        icon: '💰',
    },
    {
        id:3,
        title: 'Luxury',
        desc: 'Where comfort meets elegance',
        icon: '💸',
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget ,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place Name, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'