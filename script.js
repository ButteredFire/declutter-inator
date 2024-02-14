
const dataSet = [
    {
        "name": "SAT Preparation",
        "data": {
            "numOfTabs": 3,
            "tabs": [
                {"name": "Khan Academy | SAT Course", "icon": "directory/icon.ico", "domain": "khanacademy.org"},
                {"name": "SAT | CollegeBoard", "icon": "directory/icon.ico", "domain": "collegeboard.org"},
                {"name": "YouTube", "icon": "directory/icon.ico", "domain": "youtube.com"}
            ]
        }
    },
    {
        "name": "English Vocabulary",
        "data": {
            "numOfTabs": 5,
            "tabs": [
                {"name": "Khan Academy | SAT Course", "icon": "directory/icon.ico", "domain": "khanacademy.org"},
                {"name": "SAT | CollegeBoard", "icon": "directory/icon.ico", "domain": "collegeboard.org"},
                {"name": "YouTube", "icon": "directory/icon.ico", "domain": "youtube.com"},
                {"name": "YouTube | STALKER Ambience", "icon": "directory/icon.ico", "domain": "youtube.com"},
                {"name": "IMPOTENCE | English meaning", "icon": "directory/icon.ico", "domain": "dictionary.cambridge.org"}
            ]
        }
    },
    {
        "name": "A section with such a long name that it is blowing my balls off",
        "data": {
            "numOfTabs": 1,
            "tabs": [
                {"name": "Khan Academy | SAT Course", "icon": "directory/icon.ico", "domain": "khanacademy.org"}
            ]
        }
    }
];

const NAME_LENGTH_LIMIT = 40;
let sectionID = 0;

function categorizeTabs(dataSet) {
    let domains = [];
    let returnedDataSet = [];

    for (let i = 0; i < dataSet.length; i++) {
        let tabProperties = {};
        let tabData = {};
        let tabs = [];
        const dataObj = dataSet[i];
        const name = dataObj.name;

        if (!dataObj.hasOwnProperty("domain")) {
            break;
        }
        const domainName = dataObj.domain;

        const tab = {"name": name, "icon": "directory/icon.ico"};
        //TODO: Ping domain and get page title
        if (domains.includes(domainName)) {
            console.warn("Alert! Same domain " + `"${domainName}".`)
            for (let j = 0; j < returnedDataSet.length; j++) {
                let domainObj = returnedDataSet[j];
                if (domainObj.name == domainName) {
                    // TODO
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
        // Section data
        const sectionObj = dataSet[i];
        let sectionName = sectionObj.name;
        const sectionData = sectionObj.data;
        const colCollapseID = `collapseSection${sectionID}`;

        // Elements
        let card = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardName = document.createElement("p");
        let chevron = document.createElement("div");
        let chevron_i = document.createElement("i");

        let col = document.createElement("div");
        let colCollapse = document.createElement("div");
        let colContent = document.createElement("div");
        let header = document.createElement("h5");
        

        // card::cardBody::Chevron::Chevron_i
        chevron_i.className = "bi bi-chevron-right";
        // card::cardBody::Chevron
        chevron.className = "chevron";
        chevron.appendChild(chevron_i);
        // card::cardBody::cardName
        if (sectionName.length > NAME_LENGTH_LIMIT) {
            sectionName = sectionName.substring(0, NAME_LENGTH_LIMIT) + "...";
        }
        cardName.innerHTML = sectionName + ` (${sectionData.numOfTabs} ${(sectionData.numOfTabs > 1) ? "tabs" : "tab"})`;
        // card::cardBody
        cardBody.className = "card-body card-body-section";
        cardBody.setAttribute("data-bs-toggle", "collapse");
        cardBody.setAttribute("aria-controls", colCollapseID);
        cardBody.setAttribute("href", `#${colCollapseID}`);
        cardBody.role = "button";
        cardBody.ariaExpanded = "false";
        cardBody.appendChild(chevron);
        cardBody.appendChild(cardName);
        // card
        card.className = "card card-section";
        card.appendChild(cardBody);
        // root::sections
        sections.appendChild(card);

        //if (isRoot || (!isRoot && sectionData.numOfTabs > 1)) {

            // col::colCollapse::colContent::header
            header.style.fontWeight = "bold";
            header.innerHTML = `Details: ${sectionName}`;
            // col::colCollapse::colContent
            colContent.className = "card card-body card-collapse";
            colContent.appendChild(header);
            // col::colCollapse
            colCollapse.className = "collapse multi-collapse";
            colCollapse.id = colCollapseID;
            colCollapse.appendChild(colContent);
            // col
            col.className = "col";
            col.appendChild(colCollapse);
            sections.appendChild(col);
        //}
        sectionID++;
        buildSections(categorizeTabs(sectionData.tabs), false, colContent);
        console.log("LOOP COMPLETE: LOOP #" + i + " - isRoot: " + isRoot)
    }
};

function showSectionInfo() {

}

function testFunc() {
    console.log("I am an MIT student.");
};

buildSections(dataSet);