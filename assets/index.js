// array of current jailbreaks (if you would like to add one, make a feature request!)
const jailbreaks = [
    {
        "name": "Taurine",
        "link": "https://taurine.app",
        "versions": [
            "14.3",
            "14.2.1",
            "14.2",
            "14.1",
            "14.0"
        ]
    },
    {
        "name": "Odyssey",
        "link": "https://theodyssey.dev/",
        "versions": [
            "13.7",
            "13.6.1",
            "13.6",
            "13.5.1",
            "13.5",
            "13.4.1",
            "13.4",
            "13.3.1",
            "13.3",
            "13.2.3",
            "13.2.2",
            "13.2.1",
            "13.2",
            "13.1.3",
            "13.1.2",
            "13.1.1",
            "13.1",
            "13.0"
        ]
    },
    {
        "name": "Chimera",
        "link": "https://chimera.coolstar.org/",
        "versions": [
            "12.5.5",
            "12.5.4",
            "12.5.3",
            "12.5.2",
            "12.5.1",
            "12.5",
            "12.4.9",
            "12.4.8",
            "12.4.7",
            "12.4.6",
            "12.4.5",
            "12.4.4",
            "12.4.3",
            "12.4.2",
            "12.4.1",
            "12.4",
            "12.3.2",
            "12.3.1",
            "12.3",
            "12.2",
            "12.1.4",
            "12.1.3",
            "12.1.2",
            "12.1.1",
            "12.1",
            "12.0.1",
            "12.0"
        ]
    },
    {
        "name": "Electra",
        "link": "https://coolstar.org/electra/",
        "versions": [
            "11.4.1",
            "11.4",
            "11.3.1",
            "11.3",
            "11.2.6",
            "11.2.5",
            "11.2.2",
            "11.2.1",
            "11.2",
            "11.1.2",
            "11.1.1",
            "11.1",
            "11.0.3",
            "11.0.2",
            "11.0.1",
            "11.0"
        ]
    },
    {
        "name": "unc0ver",
        "link": "https://unc0ver.dev",
        "versions": [
            "14.5.1",
            "14.5",
            "14.4.2",
            "14.4.1",
            "14.4",
            "14.3",
            "14.2.1",
            "14.2",
            "14.1",
            "14.0",

            "13.7",
            "13.6.1",
            "13.6",
            "13.5.1",
            "13.5",
            "13.4.1",
            "13.4",
            "13.3.1",
            "13.3",
            "13.2.3",
            "13.2.2",
            "13.2.1",
            "13.2",
            "13.1.3",
            "13.1.2",
            "13.1.1",
            "13.1",
            "13.0",

            "12.5.5",
            "12.5.4",
            "12.5.3",
            "12.5.2",
            "12.5.1",
            "12.5",
            "12.4.9",
            "12.4.8",
            "12.4.7",
            "12.4.6",
            "12.4.5",
            "12.4.4",
            "12.4.3",
            "12.4.2",
            "12.4.1",
            "12.4",
            "12.3.2",
            "12.3.1",
            "12.3",
            "12.2",
            "12.1.4",
            "12.1.3",
            "12.1.2",
            "12.1.1",
            "12.1",
            "12.0.1",
            "12.0",

            "11.4.1",
            "11.4",
            "11.3.1",
            "11.3",
            "11.2.6",
            "11.2.5",
            "11.2.2",
            "11.2.1",
            "11.2",
            "11.1.2",
            "11.1.1",
            "11.1",
            "11.0.3",
            "11.0.2",
            "11.0.1",
            "11.0"
        ]
    },
    {
        "name": "checkra1n",
        "link": "https://checkra.in",
        "versions": [
            "14.8.1",
            "14.8",
            "14.7.1",
            "14.7",
            "14.6",
            "14.5.1",
            "14.5",
            "14.4.2",
            "14.4.1",
            "14.4",
            "14.3",
            "14.2.1",
            "14.2",
            "14.1",
            "14.0",

            "13.7",
            "13.6.1",
            "13.6",
            "13.5.1",
            "13.5",
            "13.4.1",
            "13.4",
            "13.3.1",
            "13.3",
            "13.2.3",
            "13.2.2",
            "13.2.1",
            "13.2",
            "13.1.3",
            "13.1.2",
            "13.1.1",
            "13.1",
            "13.0",

            "12.5.5",
            "12.5.4",
            "12.5.3",
            "12.5.2",
            "12.5.1",
            "12.5",
            "12.4.9",
            "12.4.8",
            "12.4.7",
            "12.4.6",
            "12.4.5",
            "12.4.4",
            "12.4.3",
            "12.4.2",
            "12.4.1",
            "12.4",
            "12.3.2",
            "12.3.1",
            "12.3",
            "12.2",
            "12.1.4",
            "12.1.3",
            "12.1.2",
            "12.1.1",
            "12.1",
            "12.0.1",
            "12.0",
        ],
        "processors": [
            "A11",
            "A10",
            "A9",
            "A8",
            "A7"
        ]
    }
]

// array of vulnerabilities (if you would like to add one, make a feature request!)
const vulnerabilities = [
    {
        "name": "CVE-2021-30955",
        "versions": [
            "15.1.1",
            "15.1",
            "15.0.2",
            "15.0.1",
            "15.0",

            "14.8.1",
            "14.8",
            "14.7.1",
            "14.7",
            "14.6",
            "14.5.1",
            "14.5",
            "14.4.2",
            "14.4.1",
            "14.4"
        ],
        "releaseDate": "~ 14. February 2022",
        "link": "https://twitter.com/realBrightiup/status/1470535136047513609",
        "appleSecurity": "https://support.apple.com/en-us/HT212976",
        "processors": [
            "All"
        ]
    }
]

window.jailbreakable = false
window.vulnCompatible = false

// check what the device is
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
var device = navigator.userAgent.slice(navigator.userAgent.indexOf('(') + 1, navigator.userAgent.indexOf('; CPU'))

if (device == "iPhone") {
    window.version = navigator.userAgent.slice(navigator.userAgent.indexOf('iPhone OS') + 10, navigator.userAgent.indexOf(' like Mac OS X')).replace("_", ".").replace("_", ".");
} else if (device == "iPad") {
    window.version = navigator.userAgent.slice(navigator.userAgent.indexOf('CPU OS') + 7, navigator.userAgent.indexOf(' like Mac OS X')).replace("_", ".").replace("_", ".");
}

if (device == "iPad") window.os = "iPadOS"; else window.os = "iOS"

if (!isIOS) {
    console.log("This device is not on iOS!")
    document.querySelector(".notios").style.display = "block"
    document.querySelector(".device").style.display = "none"
    document.querySelector(".suggestions").style.display = "none"
} else listJailbreaks(), listVulnerabilities(), document.querySelector(".suggestions").style.display = "none"

// random background from selection of wallpapers (from stackoverflow, slightly edited by me so i don't need jquery)
var classCycle = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11', 'bg12', 'bg13', 'bg14', 'bg15',];
var randomNumber = Math.floor(Math.random() * classCycle.length);
var classToAdd = classCycle[randomNumber];
document.body.classList.add(classToAdd)

// display device and version on webpage
document.querySelector(".device-version").innerText = `${window.os} ${window.version}`

// old function for displaying jailbreaks
function oldJailbreak() {
    var notice15 = document.getElementById("notice15")
    var ios14 = document.getElementById("ios14")
    var ios13 = document.getElementById("ios13")
    var status = document.getElementById("status")
    var vulns = document.getElementById("vulns")
    var jailbreaks = document.getElementById("jailbreaks")
    var suggestions = document.getElementById("suggestions")
    var versionnumber = window.version

    if (versionnumber <= Number("14.51")) {
        status.innerHTML = "Good news, you can jailbreak! Here are some tools you can use:"
        if (versionnumber >= Number("14")) {
            ios14.style.display = "block";
        } else if (versionnumber >= Number("13")) {
            ios13.style.display = "block";
        } else if (versionnumber >= Number("12")) {
            status.innerHTML = "Not currently supported! Make a feature request on GitHub if you want support, and i'll consider it."
            second.style.display = "none";
        }
        jailbreaks.style.display = "block";
    } else if (versionnumber <= Number("15.01")) {
        status.innerHTML = "A jailbreak is not available for your device, BUT there is an exploitable bug compatible:"
        if (versionnumber >= Number("15")) {
            notice15.style.display = "block";
        }
        vulns.style.display = "block";
    } else {
        status.innerHTML = "Sorry, you cannot jailbreak your device at this time. Check again later!"
        suggestions.style.display = "block";
    }
}

// List compatible jailbreaks
function listJailbreaks() {
    jailbreaks.forEach(element => {
        var version = window.version
        if (element.versions.includes(version)) {
            console.log(`${element.name} is compatible with your device!`);
            window.jailbreakable = true
            // add to page
            if (element.processors) var processors = `${element.processors.pop()} - ${element.processors.shift()}`; else var processors = "All"

            var div = document.createElement("div")
            div.innerHTML = `<div><h2>${element.name}</h2><h3>Supported versions:</h3><p>${element.versions.pop()} - ${element.versions.shift()}</p><h3>Supported processors:</h3><p>${processors}</p><a href="${element.link}" target="_blank">Download</a><br><br><hr></div>`
            document.querySelector(".jailbreaks").append(div)

        }
    });
}

function listVulnerabilities() {
    vulnerabilities.forEach(element => {
        var version = window.version
        if (element.versions.includes(version)) {
            console.log(`${element.name} is compatible with your device!`);
            window.vulnCompatible = true
            // add to page
            var div = document.createElement("div")
            div.innerHTML = `<div><h2>${element.name}</h2><h3>Supported versions:</h3><p>${element.versions.pop()} - ${element.versions.shift()}</p><h3>Supported processors:</h3><p>${element.processors}</p><h3>Expected release date:</h3><p>${element.releaseDate}</p><a href="${element.link}" target="_blank">Link to Post</a><br><br><a href="${element.appleSecurity}" target="_blank">Link to Security Content</a><br><br><hr></div>`
            document.querySelector(".jailbreaks").append(div)
        }
    });
}

if (!window.jailbreakable && !window.vulnCompatible) {
    document.querySelector(".jailbreaks").style.display = "none"
    if (isIOS) {
        document.querySelector(".suggestions").style.display = "block"
    }
    document.querySelector(".status").innerText = "Sorry, but your device does not currently have any supported jailbreaks or vulnerabilities. See suggestions below:"
} else if (window.jailbreakable && !window.vulnCompatible) {
    document.querySelector(".status").innerText = "Good news, you can jailbreak your device! Check out these tools:"
} else if (window.jailbreakable && window.vulnCompatible) {
    document.querySelector(".status").innerText = "Good news, you can jailbreak your device! There are also some vulnerabilities for your version. Check out these tools and vulnerabilities:"
} else if (!window.jailbreakable && window.vulnCompatible) {
    document.querySelector(".status").innerText = "There are no jailbreaks available, but one or more vulnerabilities have been found:"
}

if (Number(window.version) >= 15) {
    document.querySelector(".notice15").style.display = "block"
}