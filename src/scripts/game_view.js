function GameView(context, game) {
    this.context = context;
    this.game = game;
}

window.TICK = 0;

window.THROWING_TICK = 0;

window.HIT_TICK = 0;

GameView.prototype.animate = function animate() {

    this.game.draw(this.context);

    TICK++;
    // console.log(TICK);

    requestAnimationFrame(this.animate.bind(this));
}

module.exports = GameView;