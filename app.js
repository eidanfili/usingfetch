var catData;
var mainContainer = document.querySelector(".main");

async function getCats() {
  const catsFetch = await fetch("https://catfact.ninja/breeds");
  // console.log(catsFetch);
  catData = await catsFetch.json();
  console.log(catData.data);
  catData.data.forEach((element) => {
    var catBreed = document.createElement("div");
    catBreed.classList.add("breed");
    catBreed.textContent = `this cat is the: ${element.breed}, and it is from ${element.country}`;
    mainContainer.appendChild(catBreed);
  });
}
getCats();
function showMoreInfo() {}
