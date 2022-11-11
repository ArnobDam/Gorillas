class Example {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>"

        this.ele.addEventListener("click", this.handleClick.bind(this));
        //document.addEventListener("click", ...) to add event Listener to entire page
    }

    handleClick() {
        this.ele.children[0].innerText = "Ouch!";
    }
}

export default Example;
