//#region Global Variables & Constants
const dataSet = [
    {
        "name": "SAT Preparation",
        "data": {
            "numOfTabs": 3,
            "tabs": [
                {"name": "Official Digital SAT® Prep | Khan Academy", "icon": "directory/icon.ico", "domain": "khanacademy.org", "url": "https://www.khanacademy.org/digital-sat"},
                {"name": "The SAT - SAT Suite | College Board", "icon": "directory/icon.ico", "domain": "collegeboard.org", "url": "https://satsuite.collegeboard.org/sat"},
                {"name": "YouTube", "icon": "directory/icon.ico", "domain": "youtube.com", "url": "youtube.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "English Vocabulary",
        "data": {
            "numOfTabs": 5,
            "tabs": [
                {"name": "Official Digital SAT® Prep | Khan Academy", "icon": "directory/icon.ico", "domain": "khanacademy.org", "url": "https://www.khanacademy.org/digital-sat"},
                {"name": "The SAT - SAT Suite | College Board", "icon": "directory/icon.ico", "domain": "collegeboard.org", "url": "https://satsuite.collegeboard.org/sat"},
                {"name": "YouTube", "icon": "directory/icon.ico", "domain": "youtube.com", "url": "youtube.com"},
                {"name": "S.T.A.L.K.E.R. O.G.S.R. Atmosphere - Bar Campfire - YouTube", "icon": "directory/icon.ico", "domain": "youtube.com", "url": "https://www.youtube.com/watch?v=EpfLp38K2ug"},
                {"name": "IMPOTENCE | English meaning", "icon": "directory/icon.ico", "domain": "dictionary.cambridge.org", "url": "https://dictionary.cambridge.org/dictionary/english/impotence"}
            ],
            "isTab": false  
        }
    },
    {
        "name": "A section with such a long name that it is blowing my balls off",
        "data": {
            "numOfTabs": 1,
            "tabs": [
                {"name": "Official Digital SAT® Prep | Khan Academy", "icon": "directory/icon.ico", "domain": "khanacademy.org", "url": "https://www.khanacademy.org/digital-sat"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Math Practice",
        "data": {
            "numOfTabs": 2,
            "tabs": [
                {"name": "Mathway | Algebra Problem Solver", "icon": "directory/icon.ico", "domain": "mathway.com", "url": "https://www.mathway.com"},
                {"name": "Khan Academy | Math", "icon": "directory/icon.ico", "domain": "khanacademy.org", "url": "https://www.khanacademy.org/math"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Science Resources",
        "data": {
            "numOfTabs": 4,
            "tabs": [
                {"name": "NASA", "icon": "directory/icon.ico", "domain": "nasa.gov", "url": "https://www.nasa.gov"},
                {"name": "ScienceDaily: Your source for the latest research news", "icon": "directory/icon.ico", "domain": "sciencedaily.com", "url": "https://www.sciencedaily.com"},
                {"name": "National Geographic", "icon": "directory/icon.ico", "domain": "nationalgeographic.com", "url": "https://www.nationalgeographic.com"},
                {"name": "Smithsonian Institution", "icon": "directory/icon.ico", "domain": "si.edu", "url": "https://www.si.edu"}
            ],
            "isTab": false
        }
    },
    {
        "name": "History Resources",
        "data": {
            "numOfTabs": 3,
            "tabs": [
                {"name": "History.com", "icon": "directory/icon.ico", "domain": "history.com", "url": "https://www.history.com"},
                {"name": "Smithsonian Institution", "icon": "directory/icon.ico", "domain": "si.edu", "url": "https://www.si.edu"},
                {"name": "BBC History", "icon": "directory/icon.ico", "domain": "bbc.co.uk", "url": "https://www.bbc.co.uk/history"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Programming Tutorials",
        "data": {
            "numOfTabs": 3,
            "tabs": [
                {"name": "W3Schools", "icon": "directory/icon.ico", "domain": "w3schools.com", "url": "https://www.w3schools.com"},
                {"name": "MDN Web Docs", "icon": "directory/icon.ico", "domain": "developer.mozilla.org", "url": "https://developer.mozilla.org"},
                {"name": "Stack Overflow", "icon": "directory/icon.ico", "domain": "stackoverflow.com", "url": "https://stackoverflow.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Health and Fitness",
        "data": {
            "numOfTabs": 2,
            "tabs": [
                {"name": "MyFitnessPal", "icon": "directory/icon.ico", "domain": "myfitnesspal.com", "url": "https://www.myfitnesspal.com"},
                {"name": "WebMD", "icon": "directory/icon.ico", "domain": "webmd.com", "url": "https://www.webmd.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Cooking Recipes",
        "data": {
            "numOfTabs": 2,
            "tabs": [
                {"name": "Allrecipes", "icon": "directory/icon.ico", "domain": "allrecipes.com", "url": "https://www.allrecipes.com"},
                {"name": "Food Network", "icon": "directory/icon.ico", "domain": "foodnetwork.com", "url": "https://www.foodnetwork.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Travel Planning",
        "data": {
            "numOfTabs": 2,
            "tabs": [
                {"name": "TripAdvisor", "icon": "directory/icon.ico", "domain": "tripadvisor.com", "url": "https://www.tripadvisor.com"},
                {"name": "Expedia", "icon": "directory/icon.ico", "domain": "expedia.com", "url": "https://www.expedia.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Gaming News",
        "data": {
            "numOfTabs": 3,
            "tabs": [
                {"name": "IGN", "icon": "directory/icon.ico", "domain": "ign.com", "url": "https://www.ign.com"},
                {"name": "Kotaku", "icon": "directory/icon.ico", "domain": "kotaku.com", "url": "https://www.kotaku.com"},
                {"name": "GameSpot", "icon": "directory/icon.ico", "domain": "gamespot.com", "url": "https://www.gamespot.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Finance and Investing",
        "data": {
            "numOfTabs": 2,
            "tabs": [
                {"name": "Yahoo Finance", "icon": "directory/icon.ico", "domain": "finance.yahoo.com", "url": "https://finance.yahoo.com"},
                {"name": "Investopedia", "icon": "directory/icon.ico", "domain": "investopedia.com", "url": "https://www.investopedia.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Fashion and Beauty",
        "data": {
            "numOfTabs": 3,
            "tabs": [
                {"name": "Vogue", "icon": "directory/icon.ico", "domain": "vogue.com", "url": "https://www.vogue.com"},
                {"name": "Sephora", "icon": "directory/icon.ico", "domain": "sephora.com", "url": "https://www.sephora.com"},
                {"name": "Ulta Beauty", "icon": "directory/icon.ico", "domain": "ulta.com", "url": "https://www.ulta.com"}
            ],
            "isTab": false
        }
    },
    {
        "name": "Social Media",
        "data": {
            "numOfTabs": 4,
            "tabs": [
                {"name": "Facebook", "icon": "directory/icon.ico", "domain": "facebook.com", "url": "https://www.facebook.com"},
                {"name": "Instagram", "icon": "directory/icon.ico", "domain": "instagram.com", "url": "https://www.instagram.com"},
                {"name": "Twitter", "icon": "directory/icon.ico", "domain": "twitter.com", "url": "https://twitter.com"},
                {"name": "LinkedIn", "icon": "directory/icon.ico", "domain": "linkedin.com", "url": "https://www.linkedin.com"}
            ],
            "isTab": false
        }
    }
];

const NAME_LENGTH_LIMIT = 40;
const chevronStates = {
    "true": "90deg",
    "false": "0deg"
};
let sectionID = 0;

//#endregion

//#region GetURLPageTitle Function

async function getURLPageTitle(url) {
    try {
    //#region Fetch HTML
        const response = await fetch(url, "no-cors");
        const html = await response.text();
    //#endregion

    //#region Parse HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const title = doc.querySelector("title").textContent;
    //#endregion

        return title;
    } catch (error) {
    //#region Catch Exceptions
        console.error("Error fetching webpage title:", error);
        return null;
    //#endregion
    }
}

//#endregion

//#region CategorizeTabs Function

function categorizeTabs(dataSet) {
    let domains = [];
    let returnedDataSet = [];

    for (let i = 0; i < dataSet.length; i++) {
        let tabProperties = {};
        let tabData = {};
        let tabs = [];
        const dataObj = dataSet[i];
        const name = dataObj.name;
        const url = dataObj.url;
        let domainName = dataObj.domain
        const tab = {"name": name, "icon": "directory/icon.ico", "url": url, "isTab": true};

        //if (dataObj.hasOwnProperty("isTab")) break;

        if (!dataObj.hasOwnProperty("domain")) {
            //break;
            returnedDataSet.push(tab);
            continue;
        }
        //TODO: Ping domain and get page title
        if (domains.includes(domainName)) {
            for (let j = 0; j < returnedDataSet.length; j++) {
                let domainObj = returnedDataSet[j];
                if (domainObj.name == domainName) {
                    domainObj.data.numOfTabs = domainObj.data.numOfTabs + 1;
                    domainObj.data.tabs.push(tab);
                    break;
                }
            }
            continue;
        }
        else {
            tabProperties.name = domainName;
            tabData.numOfTabs = 1;
            tabs.push(tab);
            domains.push(domainName);
        }

        
        tabData.tabs = tabs;
        tabProperties.data = tabData;
        returnedDataSet.push(tabProperties);
    }

    return returnedDataSet;
}

//#endregion


//#region BuildSections Function

function buildSections(dataSet, isRoot = true, sections = null) {
    if (isRoot) {
        sections = document.getElementById("sections");
    }

    if (dataSet.length === 0 && isRoot) {
        let div = document.createElement("div");
        let text = document.createElement("h3");
        let subtext = document.createElement("h4");
        
        text.innerHTML = "No sections yet!";
        subtext.innerHTML = "It looks quite empty here. You should add a section now!"
        
        div.style.margin = "10px";
        div.appendChild(text);
        div.appendChild(subtext);

        sections.appendChild(div);
        return;
    }
    else {
        let numOfSections = document.createElement("h5");
        numOfSections.style.textAlign = "left";
        if (isRoot) {
            numOfSections.innerHTML = `Number of sections: ${dataSet.length}`;
        }
        
        sections.appendChild(numOfSections);
    }

    for (let i = 0; i < dataSet.length; i++) {
        // Elements
        const card = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardName = document.createElement("p");
        const chevron = document.createElement("div");
        const chevron_i = document.createElement("i");

        const col = document.createElement("div");
        const colCollapse = document.createElement("div");
        const colContent = document.createElement("div");
        const header = document.createElement("h5");

        // Section data
        const sectionObj = dataSet[i];
        let sectionName = sectionObj.name;

        if (!sectionObj.hasOwnProperty("data")) {
            cardName.innerHTML = `${sectionName} - URL: ${sectionObj.url}`;
            cardBody.appendChild(cardName);
            card.appendChild(cardBody);
            sections.appendChild(card);
            continue;
        }
        const sectionData = sectionObj.data;
        const colCollapseID = `collapseSection${sectionID}`;

        
    //#region Section Cards

        //#region Chevron_i
        chevron_i.className = "bi bi-chevron-right";
        //#endregion

        //#region Chevron
        const chevronClassName = "chevron";
        chevron.className = `${chevronClassName} chevron-to-false`;
        chevron.appendChild(chevron_i);
        //#endregion

        //#region CardName
        if (sectionName.length > NAME_LENGTH_LIMIT) {
            sectionName = sectionName.substring(0, NAME_LENGTH_LIMIT) + "...";
        }
        cardName.innerHTML = sectionName + ` (${sectionData.numOfTabs} ${(sectionData.numOfTabs > 1) ? "tabs" : "tab"})`;
        //#endregion

        //#region CardBody
        cardBody.className = "card-body card-body-section";
        cardBody.setAttribute("data-bs-toggle", "collapse");
        cardBody.setAttribute("aria-controls", colCollapseID);
        cardBody.setAttribute("href", `#${colCollapseID}`);
        cardBody.role = "button";
        cardBody.ariaExpanded = "false";

        //#region CardBody.OnClick
        cardBody.addEventListener('click', () => {
            const updatedProperty = cardBody.ariaExpanded;

            if (updatedProperty == "false") {
                let colContent = document.getElementById(colCollapseID).firstElementChild;
                colContent.querySelectorAll(".card-body-section").forEach(cardBody => {
                    let chevron = cardBody.firstElementChild;
                    if (cardBody.ariaExpanded === "true") {
                        cardBody.click();
                    }
                });
            }
            
            chevron.className = `${chevronClassName} chevron-to-${updatedProperty}`;
        });
        //#endregion

        cardBody.appendChild(chevron);
        cardBody.appendChild(cardName);
        //#endregion

        //#region Card 
        card.className = "card card-section";
        card.appendChild(cardBody);
        //#endregion
        
        //#region Sections
        sections.appendChild(card);
        //#endregion

    //#endregion

    //#region Expand-Collapse Content

        //#region ColContent
        colContent.className = "card card-body card-collapse";
        colContent.style.borderColor = "var(--highlighted)";
        //#endregion

        //#region ColCollapse
        colCollapse.className = "collapse multi-collapse";
        colCollapse.id = colCollapseID;
        colCollapse.style.paddingLeft = "3%";
        colCollapse.appendChild(colContent);
        //#endregion

        //#region Col
        col.className = "col";
        col.appendChild(colCollapse);
        sections.appendChild(col);
        //#endregion

        sectionID++;
        buildSections(categorizeTabs(sectionData.tabs), false, colContent);

    //#endregion
    }
};

//#endregion


//#region Function Executions

buildSections(dataSet);

//#endregion