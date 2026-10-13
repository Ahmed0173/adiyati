
const sourceUrl =
    "https://al-islam.org/sahifa-al-kamilah-al-sajjadiyya-imam-ali-zayn-al-abidin/supplications-days-week";

const days = [
    {
        name: "الأحد",
        text: "بِسْمِ اللهِ الَّذِي لَا أَرْجُو إِلَّا فَضْلَهُ، وَلَا أَخْشَى إِلَّا عَدْلَهُ.",
        source: sourceUrl
    },
    {
        name: "الاثنين",
        text: "اللَّهُمَّ اجْعَلْ أَوَّلَ يَوْمِي هَذَا صَلَاحًا، وَأَوْسَطَهُ فَلَاحًا، وَآخِرَهُ نَجَاحًا.",
        source: sourceUrl
    },
    {
        name: "الثلاثاء",
        text: "الْحَمْدُ لِلَّهِ، وَالْحَمْدُ حَقُّهُ كَمَا يَسْتَحِقُّهُ حَمْدًا كَثِيرًا.",
        source: sourceUrl
    },
    {
        name: "الأربعاء",
        text: "الْحَمْدُ لِلَّهِ الَّذِي جَعَلَ اللَّيْلَ لِبَاسًا وَالنَّوْمَ سُبَاتًا وَجَعَلَ النَّهَارَ نُشُورًا.",
        source: sourceUrl
    },
    {
        name: "الخميس",
        text: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ اللَّيْلَ مُظْلِمًا بِقُدْرَتِهِ، وَجَاءَ بِالنَّهَارِ مُبْصِرًا بِرَحْمَتِهِ.",
        source: sourceUrl
    },
    {
        name: "الجمعة",
        text: "الْحَمْدُ لِلَّهِ الْأَوَّلِ قَبْلَ الْإِنْشَاءِ وَالْإِحْيَاءِ، وَالْآخِرِ بَعْدَ فَنَاءِ الْأَشْيَاءِ.",
        source: sourceUrl
    },
    {
        name: "السبت",
        text: "بِسْمِ اللهِ، كَلِمَةُ الْمُعْتَصِمِينَ، وَمَقَالَةُ الْمُتَحَرِّزِينَ.",
        source: sourceUrl
    }
];

const daysContainer = document.getElementById("days");
const duaTitle = document.getElementById("dua-title");
const duaText = document.getElementById("dua-text");
const duaSource = document.getElementById("dua-source");
const todayElement = document.getElementById("today");

const today = new Date();
const todayIndex = today.getDay();

todayElement.textContent = today.toLocaleDateString("ar-BH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

function showDua(index) {
    const day = days[index];

    duaTitle.textContent = `دعاء يوم ${day.name}`;
    duaText.textContent = day.text;
    duaSource.href = day.source;

    document.querySelectorAll(".day-button").forEach((button, i) => {
        button.classList.toggle("active", i === index);
        button.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
}

days.forEach((day, index) => {
    const button = document.createElement("button");

    button.className = "day-button";
    button.textContent = day.name;
    button.type = "button";
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => showDua(index));

    daysContainer.appendChild(button);
});

showDua(todayIndex);
