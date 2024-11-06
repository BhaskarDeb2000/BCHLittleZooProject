const zooAnimals = [
  {
    name: "Luna",
    age: 5,
    gender: "Female",
    species: "Tiger",
    type: "Mammal",
    description:
      "A majestic Bengal tiger known for her striking orange coat with black stripes. Luna loves to nap in the shade.",
  },
  {
    name: "Rocky",
    age: 3,
    gender: "Male",
    species: "Penguin",
    type: "Bird",
    description:
      "A playful Emperor penguin who enjoys swimming and sliding on the ice. He's very social with his group.",
  },
  {
    name: "Sally",
    age: 2,
    gender: "Female",
    species: "Iguana",
    type: "Reptile",
    description:
      "A calm green iguana who loves basking under the sun. Sally is often seen lounging on rocks.",
  },
  {
    name: "Charlie",
    age: 4,
    gender: "Male",
    species: "Elephant",
    type: "Mammal",
    description:
      "A young and curious elephant with large ears. Charlie enjoys splashing in the water and playing with his herd.",
  },
  {
    name: "Zara",
    age: 1,
    gender: "Female",
    species: "Zebra",
    type: "Mammal",
    description:
      "A young zebra foal with bold black-and-white stripes. Zara loves to run around the grasslands with her family.",
  },
  {
    name: "Oscar",
    age: 7,
    gender: "Male",
    species: "Parrot",
    type: "Bird",
    description:
      "A colorful macaw parrot with vibrant blue and yellow feathers. Oscar is known for mimicking sounds and words.",
  },
  {
    name: "Bella",
    age: 6,
    gender: "Female",
    species: "Red Panda",
    type: "Mammal",
    description:
      "A small, reddish-brown red panda with a bushy tail. Bella is shy and loves eating bamboo leaves.",
  },
  {
    name: "Spike",
    age: 4,
    gender: "Male",
    species: "Tortoise",
    type: "Reptile",
    description:
      "A slow-moving tortoise with a hard, dome-shaped shell. Spike enjoys munching on leafy greens and sunbathing.",
  },
  {
    name: "Milo",
    age: 2,
    gender: "Male",
    species: "Meerkat",
    type: "Mammal",
    description:
      "A mischievous meerkat who is always on the lookout. Milo loves digging burrows and foraging for insects.",
  },
];

displayAnimals(zooAnimals);

function displayAnimals(animals) {
  const animalDisplay = document.querySelector("#animalDisplay");
  animalDisplay.innerHTML = "";

  animals.forEach((animal) => {
    const animalCard = document.createElement("div");
    animalCard.classList.add("animal-card");

    animalCard.innerHTML = `
            <h3>${animal.name}</h3>
            <p><strong>Species:</strong> ${animal.species}</p>
            <p><strong>Type:</strong> ${animal.type}</p>
            <p><strong>Gender:</strong> ${animal.gender}</p>
            <p><strong>Age:</strong> ${animal.age} years</p>
            <p>${animal.description}</p>
        `;

    animalDisplay.appendChild(animalCard);
  });
}

function addAnimal(name, age, gender, species, type, description) {
  const newAnimal = { name, age, gender, species, type, description };
  zooAnimals.push(newAnimal);
  displayAnimals(zooAnimals);
}

document
  .querySelector("#toggleFormButton")
  .addEventListener("click", function () {
    const animalForm = document.querySelector("#animalForm");
    animalForm.classList.toggle("hidden");
  });

document.querySelector("#filterType").addEventListener("change", function () {
  const type = document.querySelector("#filterType").value;
  const filteredAnimals = type
    ? zooAnimals.filter((animal) => animal.type === type)
    : zooAnimals;
  displayAnimals(filteredAnimals);
});

document.querySelector("#filterGender").addEventListener("change", function () {
  const gender = document.querySelector("#filterGender").value;
  const filteredAnimals = gender
    ? zooAnimals.filter((animal) => animal.gender === gender)
    : zooAnimals;
  displayAnimals(filteredAnimals);
});

document.querySelector("#animalSearch").addEventListener("input", function () {
  const searchTerm = document
    .querySelector("#animalSearch")
    .value.toLowerCase();
  const searchedAnimals = zooAnimals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchTerm) ||
      animal.species.toLowerCase().includes(searchTerm)
  );
  displayAnimals(searchedAnimals);
});

document
  .querySelector("#addAnimalButton")
  .addEventListener("click", function (ev) {
    ev.preventDefault();

    const name = document.querySelector("#name").value;
    const age = parseInt(document.querySelector("#age").value);
    const gender = document.querySelector("#gender").value;
    const species = document.querySelector("#species").value;
    const type = document.querySelector("#type").value;
    const description = document.querySelector("#description").value;

    addAnimal(name, age, gender, species, type, description);
    document.querySelector("#animalForm").reset();
  });
