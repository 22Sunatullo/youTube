
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

console.log(randomEmail)



const div = {
    "image":  faker.random.arrayElement([
      faker.image.nature(), 
      faker.image.city(), 
      faker.image.food() 
    ]),
    "price": faker.random.number({ min: 20, max: 300 }),
    "beds": faker.random.number({ min: 1, max: 15 }),
    "type": faker.random.arrayElement([ 
      "Entire home", 
      "Private room", 
      "Shared room" 
    ])
  }

let img = document.querySelector('img');

img.src = div;


