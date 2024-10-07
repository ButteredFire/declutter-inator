// Load in environmental variables
fetch(chrome.runtime.getURL("../../env.json"))
  .then(response => response.json())
  .then(env => {
    
    const API_KEY = env.API_KEY;
    
  })
  .catch(error => console.error('Error loading environmental variables: ', error));

//console.log(`[DEVELOPER] API KEY: ${process.env.API_KEY}`)

// 758x553 - Ideal Resolution
// 16x16 - Icon Size

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
        "name": "A section with a REEEEEEEEEEEEAAAAAAAAAAAALLLLLLLLLLLLYYYYYYYYYY long name",
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


class sectionGenerator  {
    constructor(dataSet) {
        this.dataSet = dataSet;
    }

    #categorizeTabs(dSet) {
        let domains = [];
        let returnedDataSet = [];
    
        for (let i = 0; i < dSet.length; i++) {
            let tabProperties = {};
            let tabData = {};
            let tabs = [];
            const dataObj = dSet[i];
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

    #constructHeader(sections) {
        let container = document.createElement("div");
        let numOfSections = document.createElement("h5");
        let createButton = document.createElement("button");

        numOfSections.style.textAlign = "left";
        numOfSections.innerHTML = `Number of sections: ${this.dataSet.length}`;

        createButton.className = "btn btn-primary";
        createButton.setAttribute("type", "button");
        createButton.innerHTML = "Add Section";

        container.style.display = "inline-block";
        container.style.margin = "5px";
        container.appendChild(numOfSections);
        container.appendChild(createButton);
        sections.appendChild(container);
    }

    buildSections(dSet = this.dataSet, isRoot = true, sections = null) {
        //#region Set Section Root
        if (isRoot) {
            sections = document.getElementById("sections");
        }
    //#endregion

    //#region Handle Number of Sections
        if (dSet.length === 0 && isRoot) {
            // let div = document.createElement("div");
            // let text = document.createElement("h3");
            // let subtext = document.createElement("h4");
            
            // text.innerHTML = "No sections yet!";
            // subtext.innerHTML = "It looks quite empty here. You should add a section now!"
            
            // div.style.margin = "10px";
            // div.appendChild(text);
            // div.appendChild(subtext);

            // sections.appendChild(div);
            const nonexistent = document.getElementById("nonexistent");
            nonexistent.style.display = "block";
            return;
        }
        else if (isRoot) {
                this.#constructHeader(sections);
        }
    //#endregion

        /*
        Using a DocumentFragment improves performance by batching DOM manipulations.
        Instead of adding elements to the DOM one by one (which triggers reflows and repaints), 
        we accumulate them in a fragment, which exists in memory and isn't part of the live DOM.
        Once all elements are created and appended to the fragment, we add the fragment 
        to the DOM in one operation. This minimizes layout thrashing and reduces the number 
        of times the browser has to re-render, making it more efficient for handling larger datasets.
        */
        let fragment = document.createDocumentFragment();    

        for (let i = 0; i < dSet.length; i++) {
        //#region Elements
            const card = document.createElement("div");
            const cardBody = document.createElement("div");
            const cardName = document.createElement("p");
            const tabCard = document.createElement("div");
            const chevron = document.createElement("div");
            const chevron_i = document.createElement("i");

            const col = document.createElement("div");
            const colCollapse = document.createElement("div");
            const colContent = document.createElement("div");
        //#endregion

        //#region Section data
            
            const sectionTabProperties = dSet[i];
            const sectionName = sectionTabProperties.name;

            tabCard.className = "card-body card-body-section";
            tabCard.role = "button";

            //#region CardBody.OnClick
            tabCard.addEventListener('click', () => {
                window.open(sectionTabProperties.url, "_blank");
            });

            if (!sectionTabProperties.hasOwnProperty("data")) {
                tabCard.innerHTML = sectionName;
                tabCard.style.margin = "5px";
                //tabCard.onclick = window.open(sectionTabProperties.url, "_blank");
                cardBody.appendChild(tabCard);
                card.appendChild(cardBody);
                fragment.appendChild(card);
                continue;
            }
            const sectionData = sectionTabProperties.data;
            const colCollapseID = `collapseSection${sectionID}`;
        //#endregion
            
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
            const displayName = (sectionName.length <= NAME_LENGTH_LIMIT) ? sectionName : (sectionName.substring(0, NAME_LENGTH_LIMIT) + "...");
            cardName.innerHTML = `${displayName} (${sectionData.numOfTabs} ${(sectionData.numOfTabs > 1) ? "tabs" : "tab"})`;
            cardName.setAttribute("data-bs-toggle", "tooltip");
            cardName.setAttribute("data-bs-placement", "top");
            cardName.setAttribute("data-bs-title", sectionName);
            cardName.setAttribute("type", "button");
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

                // Close all opened sub-cards on card collapse
                if (updatedProperty == "false") {
                    let colContent = document.getElementById(colCollapseID).firstElementChild;
                    colContent.querySelectorAll(".card-body-section").forEach(cardBody => {
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
            card.className = `card card-section ${(isRoot) ? "" : "no-root"}`;
            if (!isRoot) {
                card.style.borderColor = "var(--background-main)";
            }
            card.appendChild(cardBody);
            //#endregion
            
            //#region Sections
            fragment.appendChild(card);
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
            fragment.appendChild(col);
            //#endregion

            sectionID++;
            this.buildSections(this.#categorizeTabs(sectionData.tabs), false, colContent);

        //#endregion
        }

        sections.appendChild(fragment);
    }
}

function addSection() {
    console.log("addSection()");
}

function initiateAnalysis(tabList) {
    console.log("initiateAnalysis(tabList)");
}


let tabList = [];
let a = {};
document.addEventListener('DOMContentLoaded', () => {
    /*
    Documentation: https://developer.chrome.com/docs/extensions/reference/api/tabs
    */
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
            let favIconUrl = tab.favIconUrl;
            let title = tab.title;
            let url = tab.url;
            //console.log(`[FavIcon: ${favIconUrl} || URL: ${url}] ${title}`);
            tabList.push(
                {"name": title, "icon": favIconUrl, "url": url}
            );
        });

    });
});

// TODO: Implement logic for AI categorization on/off toggle
let checkboxUseAI = document.getElementById("checkbox-UseAI");

let nonExParagraph = document.getElementById("nonex-p");
let orgTabsBtn = document.getElementById("orgTabsBtn");

// TODO: Imeplement logic for div change depending on AI categorization feature status (on/off)
if (false) {
    nonExParagraph.innerHTML = "Start categorizing your tabs by adding a section below.";

    orgTabsBtn.innerHTML = "Add section";
    orgTabsBtn.addEventListener("click", () => {
        addSection();
    });
}
else {
    nonExParagraph.innerHTML = "Let AI do the heavy work for you and organize your tabs!";

    let btnIcon = document.createElement("i");
    let btnText = document.createElement("span");

    btnIcon.className = "bi bi-bar-chart-steps";
    btnText.style.marginLeft = "5px";
    btnText.innerHTML = "Organize tabs";

    orgTabsBtn.appendChild(btnIcon);
    orgTabsBtn.appendChild(btnText);
    orgTabsBtn.addEventListener("click", () => {
        initiateAnalysis(tabList);
    });
}

//#region Function Executions

const sectGen = new sectionGenerator([]);
sectGen.buildSections();

window.resizeTo(758, 553);
//#endregion