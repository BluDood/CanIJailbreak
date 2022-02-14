// Function to get relative time
function timeFormatter(option, date) {
    if (!option || !date) return
    if (option == "relative") {
        return Math.ceil((new Date(date).getTime() - new Date().getTime()) / (1000*60*60*24))
    } else if (option == "format") {
        var date = new Date(date)
        var month = date.toLocaleString('en-us', {month:'long'})
        var formatted = `${date.getDate()} ${month}, ${date.getFullYear()}`
        return formatted
    } else  {
        return
    }
}

// Array of current jailbreaks (if you would like to add one, make a feature request!)
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

// Array of vulnerabilities (if you would like to add one, make a feature request!)
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
        "releaseDate": "02/14/2022",
        "approximate": true,
        "link": "https://twitter.com/realBrightiup/status/1470535136047513609",
        "appleSecurity": "https://support.apple.com/en-us/HT212976",
        "processors": [
            "All"
        ]
    }
]

window.jailbreakable = false
window.vulnCompatible = false

/*
    Device information
*/

// Get device type and version
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
var device = navigator.userAgent.slice(navigator.userAgent.indexOf('(') + 1, navigator.userAgent.indexOf('; CPU'))
window.version = navigator.userAgent.slice(navigator.userAgent.indexOf('OS') + 3, navigator.userAgent.indexOf(' like Mac OS X')).replace("_", ".").replace("_", ".");

// If the device is an iPad, then the OS is iPadOS
if (device == "iPad") window.os = "iPadOS"; else window.os = "iOS"

// Check if the device is on iOS
if (!isIOS) {
    console.log("This device is not on iOS!")
    document.querySelector(".notios").style.display = "block"
    document.querySelector(".device").style.display = "none"
    document.querySelector(".suggestions").style.display = "none"
} else listJailbreaks(), listVulnerabilities(), document.querySelector(".suggestions").style.display = "none"

// Random background from selection of wallpapers
document.body.style.backgroundImage = `url(/assets/img/random/${Math.floor(Math.random() * 15)}.jpg)`

// Display OS and version on webpage
document.querySelector(".device-version").innerText = `${window.os} ${window.version}`


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

// List compatible vulnerabilities
function listVulnerabilities() {
    vulnerabilities.forEach(element => {
        var version = window.version
        if (element.versions.includes(version)) {
            console.log(`${element.name} is compatible with your device!`);
            window.vulnCompatible = true
            var readableDate = (element.approximate ? '~ ' : '') + timeFormatter("format", element.releaseDate)
            var relativeDate = timeFormatter("relative", element.releaseDate) <= 0 ? 'eta s0n' : `In${element.approximate ? ' approximately' : ''} ${timeFormatter("relative", element.releaseDate)} day${timeFormatter("relative", element.releaseDate) === 1 ? '' : 's'}`
            // add to page
            var div = document.createElement("div")
            div.innerHTML = `<div><h2>${element.name}</h2><h3>Supported versions:</h3><p>${element.versions.pop()} - ${element.versions.shift()}</p><h3>Supported processors:</h3><p>${element.processors || "All"}</p><h3>Expected release date:</h3><p>${readableDate || "Not specified"}</p><p>${relativeDate}</p><a href="${element.link}" target="_blank">Link to Post</a><br><br><a href="${element.appleSecurity}" target="_blank">Link to Security Content</a><br><br><hr></div>`
            document.querySelector(".jailbreaks").append(div)
        }
    });
}

/*
    Check if the device is:
*/
// Not jailbreakable nor vulnerable
if (!window.jailbreakable && !window.vulnCompatible) {
    document.querySelector(".jailbreaks").style.display = "none"
    if (isIOS) {
        document.querySelector(".suggestions").style.display = "block"
    }
    document.querySelector(".status").innerText = "Sorry, but your device does not currently have any supported jailbreaks or vulnerabilities. See suggestions below:"

// Jailbreakable but not vulenrable
} else if (window.jailbreakable && !window.vulnCompatible) {
    document.querySelector(".status").innerText = "Good news, you can jailbreak your device! Check out these tools:"

// Jailbreakable and vulnerable
} else if (window.jailbreakable && window.vulnCompatible) {
    document.querySelector(".status").innerText = "Good news, you can jailbreak your device! There are also some vulnerabilities for your version. Check out these tools and vulnerabilities:"

// Not jailbreakable but vulnerable
} else if (!window.jailbreakable && window.vulnCompatible) {
    document.querySelector(".status").innerText = "There are no jailbreaks available, but one or more vulnerabilities have been found:"
}

// Display rootless jailbreak notice for iOS 15+
if (Number(window.version) >= 15) {
    document.querySelector(".notice15").style.display = "block"
}