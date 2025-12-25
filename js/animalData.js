// animalData.js - Animal profiles and compatibility data

const animalProfiles = {
    tiger: {
        name: "harimau",
        fullName: "Harimau Sang Penjelajah Pemberani",
        traits: ["Pemberani", "Mandiri", "Cerdik"],
        description: "Kamu adalah harimau yang pemberani dan mandiri. Kamu suka menjelajahi hal-hal baru dan tidak takut menghadapi tantangan. Kepribadianmu yang cerdik membuatmu selalu bisa menemukan solusi dalam situasi sulit.",
        compatibility: [
            { animal: "Serigala", percent: 85, level: "high" },
            { animal: "Anjing", percent: 75, level: "high" },
            { animal: "Kucing", percent: 65, level: "medium" },
            { animal: "Kiki", percent: 55, level: "medium" }
        ]
    },
    wolf: {
        name: "serigala",
        fullName: "Serigala Sang Pemimpin Bijaksana",
        traits: ["Bijaksana", "Loyal", "Kuat"],
        description: "Kamu adalah serigala yang bijaksana dan loyal. Kamu memiliki kemampuan kepemimpinan yang alami dan selalu melindungi kelompokmu. Kekuatan dan kebijaksanaanmu membuat orang lain menghormatimu.",
        compatibility: [
            { animal: "Harimau", percent: 85, level: "high" },
            { animal: "Anjing", percent: 80, level: "high" },
            { animal: "Kucing", percent: 60, level: "medium" },
            { animal: "Kiki", percent: 50, level: "medium" }
        ]
    },
    dog: {
        name: "anjing",
        fullName: "Anjing Sang Sahabat Setia",
        traits: ["Setia", "Ramah", "Energik"],
        description: "Kamu adalah anjing yang setia dan ramah. Kamu selalu siap membantu orang lain dan memiliki energi yang tinggi untuk melakukan berbagai aktivitas. Kesetiaanmu membuatmu menjadi sahabat yang luar biasa.",
        compatibility: [
            { animal: "Serigala", percent: 80, level: "high" },
            { animal: "Harimau", percent: 75, level: "high" },
            { animal: "Kucing", percent: 70, level: "high" },
            { animal: "Kiki", percent: 60, level: "medium" }
        ]
    },
    cat: {
        name: "kucing",
        fullName: "Kucing Sang Misterius Mandiri",
        traits: ["Mandiri", "Misterius", "Anggun"],
        description: "Kamu adalah kucing yang mandiri dan misterius. Kamu suka privasi dan memiliki keanggunan yang alami. Kemampuanmu untuk mandiri membuatmu bisa menjalani hidup dengan tenang dan damai.",
        compatibility: [
            { animal: "Anjing", percent: 70, level: "high" },
            { animal: "Kiki", percent: 65, level: "medium" },
            { animal: "Harimau", percent: 65, level: "medium" },
            { animal: "Serigala", percent: 60, level: "medium" }
        ]
    },
    owl: {
        name: "kiki",
        fullName: "Kiki Sang Bijak Pengamat",
        traits: ["Bijak", "Pengamat", "Tenang"],
        description: "Kamu adalah kiki yang bijak dan pengamat. Kamu suka mengamati situasi sebelum bertindak dan memiliki kedamaian batin yang tinggi. Kebijaksanaanmu membuatmu selalu memberikan nasihat yang tepat.",
        compatibility: [
            { animal: "Kucing", percent: 65, level: "medium" },
            { animal: "Harimau", percent: 55, level: "medium" },
            { animal: "Serigala", percent: 50, level: "medium" },
            { animal: "Anjing", percent: 60, level: "medium" }
        ]
    }
};

// Function to calculate animal result based on answers
function calculateAnimalResult(answers) {
    // Simple scoring system based on MBTI-like personality traits
    let scores = {
        tiger: 0,  // Extroverted, brave
        wolf: 0,   // Leadership, wise
        dog: 0,    // Friendly, loyal
        cat: 0,    // Independent, mysterious
        owl: 0     // Wise, observant
    };

    // Scoring logic based on quiz answers
    answers.forEach((answer, index) => {
        switch(index) {
            case 0: // Activity preference
                if (answer === 'A') scores.tiger += 2; // Outdoor adventure
                else scores.cat += 1; // Indoor relaxation
                break;
            case 1: // Social interaction
                if (answer === 'A') scores.dog += 2; // Group activities
                else scores.cat += 2; // Alone time
                break;
            case 2: // Decision making
                if (answer === 'A') scores.wolf += 2; // Quick decisions
                else scores.owl += 2; // Careful analysis
                break;
            case 3: // Problem solving
                if (answer === 'A') scores.tiger += 2; // Direct action
                else scores.owl += 2; // Strategic thinking
                break;
            case 4: // Leadership
                if (answer === 'A') scores.wolf += 2; // Natural leader
                else scores.dog += 1; // Supportive role
                break;
        }
    });

    // Find the animal with highest score
    let maxScore = 0;
    let resultAnimal = 'tiger';

    Object.keys(scores).forEach(animal => {
        if (scores[animal] > maxScore) {
            maxScore = scores[animal];
            resultAnimal = animal;
        }
    });

    return resultAnimal;
}
