const titleInput = document.querySelector("#title-input");
const textInput = document.querySelector("#text-input");
const button = document.querySelector("#button");
const zoneBlock = document.querySelector("#zone-block");
var compteur = 0;

function AddNote() {
    // creation de la div + ajout de class + afficher dans le DOM, dans la zoneBlock
    var newBlock = document.createElement("div");
    newBlock.className = "block";
    newBlock.setAttribute("draggable", "true");
    newBlock.id = "block-" + compteur;
    zoneBlock.appendChild(newBlock);

    newBlock.addEventListener('click', function () {

    });

    var supp = document.createElement("div");
    supp.className = "block-supp";
    supp.id = "block-supp-" + compteur;
    supp.textContent = "✖";
    newBlock.appendChild(supp);

    supp.addEventListener('click', function () {
        zoneBlock.removeChild(newBlock);
    });

    // creation d'un h3 + ajout id + ajouter du texte de l'input + afficher dans le DOM, dans le newBlock créé juste avant
    var newTitle = document.createElement("h3");
    newTitle.className = "block-title";
    newTitle.textContent = titleInput.value;
    newBlock.appendChild(newTitle);

    // creation d'un p + ajout id + ajouter du texte de l'input + afficher dans le DOM, dans le newBlock créé juste avant
    var newText = document.createElement("p");
    newText.className = "block-text";
    newText.textContent = textInput.value;
    newBlock.appendChild(newText);
};

button.addEventListener('click', function () {
    AddNote();
    compteur += 1;
});




// Drag & drop
function start(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.getAttribute("id"));
};

function over(e) {
    e.currentTarget.className = "section-drop-hover";
    e.preventDefault();
    // return false;
};

function drop(e) {
    ob = e.dataTransfer.getData("text");
    e.currentTarget.appendChild(document.getElementById(ob))
    e.currentTarget.className = "section-drop";
    e.stopPropagation();
    return false;
};

function leave(e) {
    e.currentTarget.className = "section-drop";
}