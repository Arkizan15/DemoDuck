// animalData.js - Animal profiles and compatibility data
// 8 Animals: Kucing, Anjing, Lumba-lumba, Harimau, Serigala, Kuda, Kelelawar, Rusa

const animalProfiles = {
    kucing: {
        name: "kucing",
        fullName: "Kucing Sang Misterius Mandiri",
        traits: ["Mandiri", "Santai", "Simpel"],
        description: "Kamu adalah kucing yang mandiri dan santai. Kamu suka menikmati waktu sendiri, menjalani hidup dengan simpel dan apa adanya. Kemampuanmu untuk beradaptasi dan tidak mudah stress membuatmu tetap tenang di berbagai situasi.",
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
        description: "Kamu adalah anjing yang setia dan ramah. Kamu selalu siap membantu orang lain dan memiliki energi yang tinggi untuk melakukan berbagai aktivitas. Kesetiaanmu membuatmu menjadi sahabat yang luar biasa bagi orang-orang di sekitarmu.",
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
        description: "Kamu adalah lumba-lumba yang ceria dan komunikatif. Kamu suka bersosialisasi dan selalu membawa energi positif ke sekitarmu. Kemampuanmu berkomunikasi membuatmu mudah bergaul dengan siapa saja di mana pun kamu berada.",
        compatibility: [
            { animal: "Anjing", percent: 75, level: "high" },
            { animal: "Kuda", percent: 70, level: "high" },
            { animal: "Harimau", percent: 60, level: "medium" },
            { animal: "Rusa", percent: 55, level: "medium" }
        ]
    },
    harimau: {
        name: "harimau",
        fullName: "Harimau Sang Penjelajah Pemberani",
        traits: ["Pemberani", "Tegas", "Pemimpin"],
        description: "Kamu adalah harimau yang pemberani dan tegas. Kamu tidak takut menghadapi tantangan dan secara natural menjadi pemimpin di lingkunganmu. Ketegasanmu membuat orang lain merasa aman dan percaya kepadamu.",
        compatibility: [
            { animal: "Serigala", percent: 85, level: "high" },
            { animal: "Anjing", percent: 75, level: "high" },
            { animal: "Kucing", percent: 65, level: "medium" }
        ]
    },
    serigala: {
        name: "serigala",
        fullName: "Serigala Sang Pemimpin Bijaksana",
        traits: ["Bijaksana", "Strategis", "Cerdik"],
        description: "Kamu adalah serigala yang bijaksana dan cerdik. Kamu memiliki kemampuan analisis yang tajam dan selalu berpikir beberapa langkah ke depan. Kecerdikan dan strategimu membuat orang lain menghormati dan mempercayai keputusanmu.",
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
        description: "Kamu adalah kuda yang energik dan bebas. Kamu suka berpetualang dan memiliki semangat yang tinggi untuk mengejar impian. Energi dan ketekunanmu yang tak kenal lelah membuatmu selalu maju melampaui batas.",
        compatibility: [
            { animal: "Anjing", percent: 75, level: "high" },
            { animal: "Lumba-lumba", percent: 70, level: "high" },
            { animal: "Harimau", percent: 65, level: "medium" },
            { animal: "Serigala", percent: 60, level: "medium" }
        ]
    },
    kelelawar: {
        name: "kelelawar",
        fullName: "Kelelawar Sang Misterius Malam",
        traits: ["Misterius", "Unik", "Mandiri"],
        description: "Kamu adalah kelelawar yang misterius dan aktif di malam hari. Kamu memiliki sudut pandang yang unik dan suka mengeksplorasi hal-hal yang jarang orang ketahui. Keunikan caramu berpikirmu membuatmu berbeda dan selalu punya perspektif segar.",
        compatibility: [
            { animal: "Kucing", percent: 65, level: "medium" },
            { animal: "Serigala", percent: 60, level: "medium" },
            { animal: "Anjing", percent: 55, level: "medium" }
        ]
    },
    rusa: {
        name: "rusa",
        fullName: "Rusa Sang Lembut Harmonis",
        traits: ["Lembut", "Harmonis", "Sensitif"],
        description: "Kamu adalah rusa yang lembut dan harmonis. Kamu suka kedamaian dan selalu menciptakan keselarasan di sekitarmu. Sensitivitas hatimu membuatmu peka terhadap perasaan orang lain — kamu tahu betul kapan seseorang butuh didengar.",
        compatibility: [
            { animal: "Kucing", percent: 70, level: "high" },
            { animal: "Anjing", percent: 65, level: "medium" },
            { animal: "Lumba-lumba", percent: 55, level: "medium" }
        ]
    }
};

// Function to calculate animal result based on answers
function calculateAnimalResult(answers) {
    let animalCounts = {};

    // Initialize counts for all animals
    Object.keys(animalProfiles).forEach(animal => {
        animalCounts[animal] = 0;
    });

    // Count each animal selection
    answers.forEach(answer => {
        if (answer && answer.type) {
            const key = answer.type.toLowerCase();
            if (animalCounts.hasOwnProperty(key)) {
                animalCounts[key]++;
            }
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
