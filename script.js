// ==========================================
// BC SOCIAL STUDIES EXPLORER ENGINE
// Version 1
// ==========================================

const unit = {

    title: "Where We Live Matters",

    essentialQuestion:
        "How does geography influence where people live?",

    mission:
        "A new community wants to settle in British Columbia. Your mission is to investigate the evidence and recommend the best location.",

    activation: {
        question:
            "Which geographic feature is most important for a settlement?",

        options: [
            "Mountain",
            "River",
            "Forest",
            "Road"
        ],

        answer: "River"
    },

    learnCards: [
        {
            title: "BC's Geographic Regions",

            content:
                "British Columbia contains mountains, forests, plateaus, valleys, rivers, and coastlines. These physical features influence where people live and work."
        },

        {
            title: "Natural Resources",

            content:
                "Resources such as forests, fisheries, farmland, and minerals support communities and economies throughout British Columbia."
        },

        {
            title: "Communities and Place",

            content:
                "Many communities develop near transportation routes, rivers, ports, and places where resources are available."
        }
    ],

    evidenceCards: [
        {
            title: "Regional Map",

            content:
                "Examine a map showing water sources, transportation routes, and physical geography."
        },

        {
            title: "Community Photograph",

            content:
                "Look carefully at the photo and identify clues about how geography influences daily life."
        },

        {
            title: "Historical Account",

            content:
                "Read how early settlers chose locations for their communities."
        },

        {
            title: "Resource Profile",

            content:
                "Investigate the resources available in different regions of BC."
        }
    ],

    challenge: {
        title: "Community Planning Challenge",

        content:
            "Recommend the best location for a new community. Use evidence from your investigation to support your decision."
    },

    badge:
        "Geography Explorer"
};

// ==========================================
// SCREENS
// ==========================================

const screens = [
    "mission",
    "activate",
    "learn1",
    "learn2",
    "learn3",
    "evidence",
    "challenge",
    "reflection",
    "badge"
];

let currentScreen = 0;

let evidenceViewed = [
    false,
    false,
    false,
    false
];

// ==========================================
// PAGE ELEMENTS
// ==========================================

const content =
    document.getElementById("content");

const nextBtn =
    document.getElementById("next-btn");

const backBtn =
    document.getElementById("back-btn");

document.getElementById("unit-title").textContent =
    unit.title;

document.getElementById("essential-question").textContent =
    unit.essentialQuestion;

// ==========================================
// PROGRESS BAR
// ==========================================

function updateProgress() {

    const progress =
        Math.round(
            ((currentScreen + 1) / screens.length) * 100
        );

    document.getElementById("progress-fill").style.width =
        progress + "%";

    document.getElementById("progress-text").textContent =
        "Progress: " + progress + "%";
}

// ==========================================
// RENDER SCREEN
// ==========================================

function renderScreen() {

    updateProgress();

    const screen =
        screens[currentScreen];

    // ============================
    // MISSION
    // ============================

    if (screen === "mission") {

        content.innerHTML = `
            <div class="card">
                <h2>Mission Briefing</h2>

                <p>${unit.mission}</p>

                <div class="feedback">
                    📘 Record your predictions in your Explorer Journal.
                </div>
            </div>
        `;
    }

    // ============================
    // ACTIVATE
    // ============================

    else if (screen === "activate") {

        let optionButtons =
            unit.activation.options.map(option =>

                `<button class="option-btn"
                    onclick="checkAnswer('${option}')">
                    ${option}
                </button>`

            ).join("");

        content.innerHTML = `
            <div class="card">

                <h2>Activate Prior Knowledge</h2>

                <p>${unit.activation.question}</p>

                ${optionButtons}

                <div id="feedback"></div>

            </div>
        `;
    }

    // ============================
    // LEARN CARDS
    // ============================

    else if (screen.startsWith("learn")) {

        const cardNumber =
            parseInt(
                screen.replace("learn", "")
            );

        const card =
            unit.learnCards[cardNumber - 1];

        content.innerHTML = `
            <div class="card">

                <h2>${card.title}</h2>

                <p>${card.content}</p>

                <div class="feedback">
                    📘 Record important ideas in your Explorer Journal.
                </div>

            </div>
        `;
    }

    // ============================
    // EVIDENCE BOARD
    // ============================

    else if (screen === "evidence") {

        let cards =
            unit.evidenceCards.map((card, index) => {

                return `
                    <div
                        class="evidence-card ${evidenceViewed[index] ? "viewed" : ""}"
                        onclick="openEvidence(${index})">

                        <h3>${card.title}</h3>

                        <p>${card.content}</p>

                        <strong>
                            ${evidenceViewed[index]
                                ? "✓ Evidence Examined"
                                : "Click to Investigate"}
                        </strong>

                    </div>
                `;
            }).join("");

        content.innerHTML = `
            <div class="card">

                <h2>Investigation Board</h2>

                <p>
                Open all evidence cards before unlocking the Challenge.
                </p>

                <div class="evidence-grid">

                    ${cards}

                </div>

                <div class="feedback">

                    Evidence Viewed:
                    ${evidenceViewed.filter(Boolean).length}
                    /
                    ${unit.evidenceCards.length}

                </div>

            </div>
        `;
    }

    // ============================
    // CHALLENGE
    // ============================

    else if (screen === "challenge") {

        content.innerHTML = `
            <div class="card">

                <h2>${unit.challenge.title}</h2>

                <p>${unit.challenge.content}</p>

                <div class="feedback">

                    📘 Complete your response in your Explorer Journal.

                </div>

            </div>
        `;
    }

    // ============================
    // REFLECTION
    // ============================

    else if (screen === "reflection") {

        content.innerHTML = `
            <div class="card">

                <h2>Reflection</h2>

                <ul>

                    <li>What surprised you?</li>

                    <li>Which evidence was most useful?</li>

                    <li>What questions remain?</li>

                </ul>

                <div class="feedback">

                    📘 Record your reflection in your journal.

                </div>

            </div>
        `;
    }

    // ============================
    // BADGE
    // ============================

    else if (screen === "badge") {

        content.innerHTML = `
            <div class="card badge">

                <h2>🏆 Mission Complete!</h2>

                <h3>${unit.badge}</h3>

                <p>
                    Congratulations! You have completed this mission.
                </p>

            </div>
        `;
    }
}

// ==========================================
// ACTIVATION QUESTION
// ==========================================

function checkAnswer(answer) {

    const feedback =
        document.getElementById("feedback");

    if (answer === unit.activation.answer) {

        feedback.innerHTML = `
            <div class="feedback">
                ✅ Great thinking! Water is often an important factor when choosing where people settle.
            </div>
        `;
    }

    else {

        feedback.innerHTML = `
            <div class="feedback">
                ✅ Interesting thinking! Continue investigating to learn more about settlement choices.
            </div>
        `;
    }
}

// ==========================================
// EVIDENCE CARDS
// ==========================================

function openEvidence(index) {

    evidenceViewed[index] = true;

    const evidence =
        unit.evidenceCards[index];

    alert(
        evidence.title +
        "\\n\\n" +
        evidence.content
    );

    renderScreen();
}

// ==========================================
// NEXT BUTTON
// ==========================================

nextBtn.addEventListener("click", function () {

    if (
        screens[currentScreen] === "evidence" &&
        !evidenceViewed.every(Boolean)
    ) {

        alert(
            "Please investigate all evidence cards before continuing."
        );

        return;
    }

    if (currentScreen < screens.length - 1) {

        currentScreen++;

        renderScreen();
    }
});

// ==========================================
// BACK BUTTON
// ==========================================

backBtn.addEventListener("click", function () {

    if (currentScreen > 0) {

        currentScreen--;

        renderScreen();
    }
});

// ==========================================
// INITIAL LOAD
// ==========================================

renderScreen();
