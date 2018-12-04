
    const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    

    let hTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        
         hTMLRepresentation += `<div>${member}</div>`
    })

console.log(hTMLRepresentation);
let finalProduct = document.querySelector(".show-info");
finalProduct.innerHTML = hTMLRepresentation