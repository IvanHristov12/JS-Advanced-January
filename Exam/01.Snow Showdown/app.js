window.addEventListener("load", solve);

function solve() {
  
  let snowmanName = document.getElementById("snowman-name");
  let height = document.getElementById("snowman-height");
  let location = document.getElementById("location");
  let creator = document.getElementById("creator-name");
  let specialAttribute = document.getElementById("special-attribute");
  let submitBtn = document.querySelector(`.add-btn`);
  let main = document.getElementById('hero');
  let infoListElement = document.querySelector(`.snowman-preview`);
  let confirmListElement = document.querySelector(`.snow-list`);
  let backImg = document.getElementById(`back-img`);
  let body = document.querySelector(`.body`)

  submitBtn.addEventListener(`click`, onNext);
  function onNext(e){
    e.preventDefault();
    if(snowmanName.value == ``
    || height.value == ``
    || location.value == ``
    || creator.value == ``
    || specialAttribute.value == ``){
      return;
    }

    let liElementInfo = document.createElement('li');
    liElementInfo.setAttribute(`class`, `info`);


    let articleElementInfo = document.createElement(`article`);

    let namePreview = document.createElement('p');
    namePreview.textContent = `Name: ${snowmanName.value}`;

    let heightPreview = document.createElement(`p`);
    heightPreview.textContent = `Height: ${height.value}`;

    let locationPreview = document.createElement(`p`);
    locationPreview.textContent = `Location: ${location.value}`

    let creatorPreview = document.createElement(`p`);
    creatorPreview.textContent = `Creator: ${creator.value}`;

    let attributePreview = document.createElement(`p`);
    attributePreview.textContent = `Attribute: ${specialAttribute.value}`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute(`class`, `edit-btn`);
    editBtn.textContent = `Edit`;

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute(`class`, `next-btn`);
    nextBtn.textContent = `Next`;

    articleElementInfo.appendChild(namePreview);
    articleElementInfo.appendChild(heightPreview);
    articleElementInfo.appendChild(locationPreview);
    articleElementInfo.appendChild(creatorPreview);
    articleElementInfo.appendChild(attributePreview);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(editBtn);
    liElementInfo.appendChild(nextBtn);

    infoListElement.appendChild(liElementInfo);

    let editName = snowmanName.value;
    let editHeight = height.value;
    let editLocation = location.value;
    let editCreator = creator.value;
    let editAttribute = specialAttribute.value;

    snowmanName.value = ``;
    height.value = ``;
    location.value = ``;
    creator.value = ``;
    specialAttribute.value = ``;
    submitBtn.disabled = true;

    editBtn.addEventListener(`click`, onEdit);
    function onEdit(){
      snowmanName.value = editName;
      height.value = editHeight;
      location.value = editLocation;
      creator.value = editCreator;
      specialAttribute.value = editAttribute;

      liElementInfo.remove();

      submitBtn.disabled = false;
    }
    nextBtn.addEventListener(`click`, onContinue);
    function onContinue() {
      let liElementConfirm = document.createElement(`li`);
      liElementConfirm.setAttribute(`class`, `snowman-content`);

      let articleElementContinue = document.createElement("article");
      articleElementContinue = articleElementInfo;

      let confirmBtn = document.createElement("button");
      confirmBtn.setAttribute(`class`, `confirm-btn`);
      confirmBtn.textContent = `Send`;

      liElementConfirm.appendChild(articleElementContinue);
      liElementConfirm.appendChild(confirmBtn);
      liElementInfo.remove();

      confirmListElement.appendChild(liElementConfirm);

      confirmBtn.addEventListener(`click`, onConfirm);
      function onConfirm(){
        main.remove();
        backImg.style.display = `block`;
        
        let backBtn = document.createElement(`button`);
        backBtn.textContent = `Back`;
        backBtn.setAttribute(`id`, `back-btn`);
        body.appendChild(backImg);
        body.appendChild(backBtn);
        backBtn.addEventListener(`click`, onBack);
        function onBack(){
          window.location.reload();
        }
      }
    }
  }
}