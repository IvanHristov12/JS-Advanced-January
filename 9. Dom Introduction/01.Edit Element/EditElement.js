function editElement(el, match, replacer) {

    if (el.innerHTML.includes(match)){
        el.innerHTML = el.innerHTML.split(match).join(replacer);
    }
}