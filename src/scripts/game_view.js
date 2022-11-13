function GameView(context, game) {
    this.context = context;
    this.game = game;
}

GameView.prototype.animate = function animate() {

    this.game.draw(this.context);

    requestAnimationFrame(this.animate.bind(this));
}

module.exports = GameView;