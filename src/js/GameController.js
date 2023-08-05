export default class GameController { // Класс отвечающий за контроль игрового процесса
  constructor(gameEvents) {
    this.gameEvents = gameEvents;
  }

  init() { // инициализация игры
    this.gameEvents.drawBoard();
    this.gameEvents.generateCharacter();
    this.characterClick();
  }

  onCellClick(index) { // Событие вызывается при клике на ячейку поля
    const cellEl = this.gameEvents.cells[index];
    const cellElCharacter = cellEl.querySelector('.character');
    const clickerWin = document.querySelector('.clicker_counter-win');
    const clickerLose = document.querySelector('.clicker_counter-lose');

    if (cellElCharacter) {
      cellElCharacter.remove();
      clickerWin.textContent = Number(clickerWin.textContent) + 1;
    } else {
      clickerLose.textContent = Number(clickerLose.textContent) + 1;
    }

    this.gameStatus();
  }
}
