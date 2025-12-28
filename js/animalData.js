// animalData.js - Animal profiles and compatibility data

const animalProfiles = {
    kucing: {
        name: "kucing",
        fullName: "Kucing Sang Misterius Mandiri",
        traits: ["Mandiri", "Misterius", "Anggun"],
        description: "Kamu adalah kucing yang mandiri dan misterius. Kamu suka privasi dan memiliki keanggunan yang alami. Kemampuanmu untuk mandiri membuatmu bisa menjalani hidup dengan tenang dan damai.",
        compatibility: [
            { animal: "Anjing", percent: 70, level: "high" },
            { animal: "Kelelawar", percent: 65, level: "medium" },
            { animal: "Harimau", percent: 65, level: "medium" },
            { animal: "Serigala", percent: 60, level: "medium" }
        ]
    },
    anjing: {
        name: "anjing",
        fullName: "Anjing Sang Sahabat Setia",
        traits: ["Setia", "Ramah", "Energik"],
        description: "Kamu adalah anjing yang setia dan ramah. Kamu selalu siap membantu orang lain dan memiliki energi yang tinggi untuk melakukan berbagai aktivitas. Kesetiaanmu membuatmu menjadi sahabat yang luar biasa.",
        compatibility: [
            { animal: "Serigala", percent: 80, level: "high" },
            { animal: "Harimau", percent: 75, level: "high" },
            { animal: "Kucing", percent: 70, level: "high" },
            { animal: "Kelelawar", percent: 60, level: "medium" }
        ]
    },
    "lumba-lumba": {
        name: "lumba-lumba",
        fullName: "Lumba-lumba Sang Komunikatif Ceria",
        traits: ["Ceria", "Komunikatif", "Sosial"],
        description: "Kamu adalah lumba-lumba yang ceria dan komunikatif. Kamu suka bersosialisasi dan selalu membawa energi positif ke sekitarmu. Kemampuanmu berkomunikasi membuatmu mudah bergaul dengan siapa saja.",
        compatibility: [
            { animal: "Anjing", percent: 75, level: "high" },
            { animal: "Kuda", percent: 70, level: "high" },
            { animal: "Bebek", percent: 65, level: "medium" },
            { animal: "Harimau", percent: 60, level: "medium" }
        ]
    },
    harimau: {
        name: "harimau",
        fullName: "Harimau Sang Penjelajah Pemberani",
        traits: ["Pemberani", "Mandiri", "Cerdik"],
        description: "Kamu adalah harimau yang pemberani dan mandiri. Kamu suka menjelajahi hal-hal baru dan tidak takut menghadapi tantangan. Kepribadianmu yang cerdik membuatmu selalu bisa menemukan solusi dalam situasi sulit.",
        compatibility: [
            { animal: "Serigala", percent: 85, level: "high" },
            { animal: "Anjing", percent: 75, level: "high" },
            { animal: "Kucing", percent: 65, level: "medium" }
        ]
    },
    kelinci: {
        name: "kelinci",
        fullName: "Kelinci Sang Lembut Sensitif",
        traits: ["Lembut", "Sensitif", "Imut"],
        description: "Kamu adalah kelinci yang lembut dan sensitif. Kamu memiliki hati yang halus dan suka hal-hal yang manis serta imut. Sensitivitasmu membuatmu peka terhadap perasaan orang lain.",
        compatibility: [
            { animal: "Rusa", percent: 75, level: "high" },
            { animal: "Bebek", percent: 70, level: "high" },
            { animal: "Kucing", percent: 65, level: "medium" },
            { animal: "Anjing", percent: 60, level: "medium" }
        ]
    },
    serigala: {
        name: "serigala",
        fullName: "Serigala Sang Pemimpin Bijaksana",
        traits: ["Bijaksana", "Loyal", "Kuat"],
        description: "Kamu adalah serigala yang bijaksana dan loyal. Kamu memiliki kemampuan kepemimpinan yang alami dan selalu melindungi kelompokmu. Kekuatan dan kebijaksanaanmu membuat orang lain menghormatimu.",
        compatibility: [
            { animal: "Harimau", percent: 85, level: "high" },
            { animal: "Anjing", percent: 80, level: "high" },
            { animal: "Kucing", percent: 60, level: "medium" }
        ]
    },
    kuda: {
        name: "kuda",
        fullName: "Kuda Sang Petualang Energik",
        traits: ["Energik", "Bebas", "Pekerja Keras"],
        description: "Kamu adalah kuda yang energik dan bebas. Kamu suka berpetualang dan memiliki semangat yang tinggi untuk mengejar impian. Energi dan ketekunanmu membuatmu selalu maju terus.",
        compatibility: [
            { animal: "Lumba-lumba", percent: 70, level: "high" },
            { animal: "Anjing", percent: 75, level: "high" },
            { animal: "Harimau", percent: 65, level: "medium" },
            { animal: "Serigala", percent: 60, level: "medium" }
        ]
    },
    rubah: {
        name: "rubah",
        fullName: "Rubah Sang Cerdik Strategis",
        traits: ["Cerdik", "Strategis", "Fleksibel"],
        description: "Kamu adalah rubah yang cerdik dan strategis. Kamu selalu berpikir beberapa langkah ke depan dan suka mencari cara paling efisien. Kecerdikanmu membuatmu selalu satu langkah di depan orang lain.",
        compatibility: [
            { animal: "Kelelawar", percent: 70, level: "high" },
            { animal: "Serigala", percent: 60, level: "medium" },
            { animal: "Harimau", percent: 55, level: "medium" }
        ]
    },
    kelelawar: {
        name: "kelelawar",
        fullName: "Kelelawar Sang Misterius Malam",
        traits: ["Misterius", "Malam", "Unik"],
        description: "Kamu adalah kelelawar yang misterius dan aktif di malam hari. Kamu memiliki sudut pandang yang unik dan suka mengeksplorasi hal-hal yang jarang orang ketahui. Keunikanmu membuatmu berbeda dari yang lain.",
        compatibility: [
            { animal: "Rubah", percent: 70, level: "high" },
            { animal: "Kucing", percent: 65, level: "medium" },
            { animal: "Anjing", percent: 55, level: "medium" }
        ]
    },
    bebek: {
        name: "bebek",
        fullName: "Bebek Sang Santai Simpel",
        traits: ["Santai", "Simpel", "Fleksibel"],
        description: "Kamu adalah bebek yang santai dan simpel. Kamu suka hidup yang tidak ribet dan selalu mengalir apa adanya. Kesederhanaanmu membuatmu bahagia dengan hal-hal kecil.",
        compatibility: [
            { animal: "Kelinci", percent: 70, level: "high" },
            { animal: "Rusa", percent: 75, level: "high" },
            { animal: "Lumba-lumba", percent: 65, level: "medium" },
            { animal: "Anjing", percent: 60, level: "medium" }
        ]
    },
    rusa: {
        name: "rusa",
        fullName: "Rusa Sang Lembut Harmonis",
        traits: ["Lembut", "Harmonis", "Damai"],
        description: "Kamu adalah rusa yang lembut dan harmonis. Kamu suka kedamaian dan selalu menciptakan harmoni di sekitarmu. Kelembutan hatimu membuat orang lain merasa nyaman bersamamu.",
        compatibility: [
            { animal: "Bebek", percent: 75, level: "high" },
            { animal: "Kelinci", percent: 70, level: "high" },
            { animal: "Kucing", percent: 65, level: "medium" },
            { animal: "Anjing", percent: 60, level: "medium" }
        ]
    }
};

// Function to calculate animal result based on answers
function calculateAnimalResult(answers) {
    // Count the most selected animal from quiz answers
    let animalCounts = {};

    // Initialize counts for all animals
    Object.keys(animalProfiles).forEach(animal => {
        animalCounts[animal] = 0;
    });

    // Count each animal selection
    answers.forEach(answer => {
        if (answer && answer.type) {
            animalCounts[answer.type.toLowerCase()]++;
        }
    });

    // Find the animal with highest count
    let maxCount = 0;
    let resultAnimal = 'kucing'; // default

    Object.keys(animalCounts).forEach(animal => {
        if (animalCounts[animal] > maxCount) {
            maxCount = animalCounts[animal];
            resultAnimal = animal;
        }
    });

    return resultAnimal;
}
