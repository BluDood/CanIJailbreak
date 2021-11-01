// ugly code ahead, bring a bag to throw up in

console.warn("Only supports iPhone for now!")

var agent = navigator.userAgent

var removed = agent.split(/(\s+)/).splice(0, 15);
var version = String(removed.splice(10, 1)).replace("_", ".").replace("_", "")
var versionnumber = Number(version)
var versiondisplay = String(agent.split(/(\s+)/).splice(0, 15).splice(10, 1)).replace("_", ".").replace("_", ".")

$(document).ready(function () {
    var classCycle = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11', 'bg12', 'bg13', 'bg14', 'bg15',];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);

});

function isIOS() {
    if (removed.includes('iPhone')) {
        console.debug("iPhone found!")
    } else {
        var first = document.getElementById("first")
        var second = document.getElementById("second")
        var notios = document.getElementById("notios")
        console.debug("Not iPhone")
        first.style.display = "none";
        second.style.display = "none";
        notios.style.display = "block";
    }
}


function iOSVersion() {
    console.debug(removed)
    document.getElementById("version").innerHTML = versiondisplay
}

function Jailbreak() {
    var notice15 = document.getElementById("notice15")
    var ios14 = document.getElementById("ios14")
    var ios13 = document.getElementById("ios13")
    var status = document.getElementById("status")
    var vulns = document.getElementById("vulns")
    var jailbreaks = document.getElementById("jailbreaks")
    var suggestions = document.getElementById("suggestions")

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

function getUserAgent() {
    document.getElementById("useragent").innerHTML = agent
}