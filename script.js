const siteConfig = {
    title: "BC Social Studies Explorer",

    subtitle:
        "Investigate. Discover. Think Like a Historian.",

    background:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
};

const units = [

{
    id: 1,
    emoji: "🌎",
    title: "Where We Live Matters",
    question: "How does geography influence where people live?"
},

{
    id: 2,
    emoji: "🪶",
    title: "Living on the Land",
    question: "How do environments shape communities?"
},

{
    id: 3,
    emoji: "🛶",
    title: "Encounters and Exchange",
    question: "What happens when cultures meet?"
},

{
    id: 4,
    emoji: "🏛",
    title: "Government & Leadership",
    question: "How are decisions made?"
},

{
    id: 5,
    emoji: "🌍",
    title: "Migration & Identity",
    question: "Why do people move?"
},

{
    id: 6,
    emoji: "⏳",
    title: "Then, Now & Next",
    question: "How do societies change?"
}

];

const app = document.getElementById("app");

showHome();

function showHome() {

    app.innerHTML = `
    
    <div class="home-screen"
         style="background-image:url('${siteConfig.background}')">

        <div class="home-overlay">

            <h1>${siteConfig.title}</h1>

            <p>${siteConfig.subtitle}</p>

            <div class="unit-grid">

                ${units.map(unit => `

                    <div class="unit-card"
                         onclick="loadUnit(${unit.id})">

                        <h3>${unit.emoji} ${unit.title}</h3>

                        <p>${unit.question}</p>

                    </div>

                `).join("")}

            </div>

        </div>

    </div>
    `;
}

function loadUnit(id) {

    const selectedUnit =
        units.find(u => u.id === id);

    app.innerHTML = `

    <div class="container">

        <header>

            <h1>${selectedUnit.title}</h1>

            <p>${selectedUnit.question}</p>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:10%">
                </div>

            </div>

            <p>Progress: 10%</p>

        </header>

        <div class="card">

            <h2>Mission Briefing</h2>

            <p>

                Welcome, Explorer!

                Your mission is to investigate evidence,
                think critically, and solve a challenge.

            </p>

            <div class="feedback">

                Record your ideas in your Explorer Journal.

            </div>

        </div>

        <div class="navigation">

            <button
                class="back-btn"
                onclick="showHome()">
                Home
            </button>

            <button
                class="next-btn">
                Begin Mission
            </button>

        </div>

    </div>
    `;
}
