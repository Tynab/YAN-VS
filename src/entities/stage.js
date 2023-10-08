export class Stage {
    constructor() {
        this.background = document.querySelector('img[alt="background"]')
    }

    update() { }

    draw(context) {
        context.drawImage(this.background, 0, 0)
    }
}
