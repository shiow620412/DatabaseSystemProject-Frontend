export default {
    simulationMenu
}

function simulationMenu(num) {
    this.buttonArray.map( btn => {btn.click = 0; return btn;});
    this.buttonArray[num].click = 1;
}