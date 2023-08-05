export default class GameEvents {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
  }

  drawBoard() { // Создание поля
    this.container = document.querySelector('.game-container');
    this.container.innerHTML = `
            <div class ='board-container'>
                <div data-id='board' class='board'></div>
            </div>
        `;
    this.boardEl = this.container.querySelector('[data-id=board]');
    for (let i = 0; i < 16; i++) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  generateCharacter() { // Генерация персонажа - гоблина
    setInterval(() => {
      const randomCellIndex = Math.floor(Math.random() * this.cells.length);
      const randomCell = this.cells[randomCellIndex];
      const lastCharacter = document.querySelector('.character-goblin');

      if (lastCharacter) {
        lastCharacter.remove();
      }

      const character = document.createElement('div');
      character.classList.add('character', 'character-goblin');
      randomCell.appendChild(character);
    }, 1000);
  }
}
