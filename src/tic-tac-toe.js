class TicTacToe {
    constructor() {
        this.first_player = 'x';
        this.second_player = 'o';
        this.is_first_player = true;
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        if (this.is_first_player) {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.is_first_player = !this.is_first_player;
        }
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) {
            return true;
        }

        return false;
    }

    getWinner() {
        let player_symbol = '';

        for (let iter_winner = 0; iter_winner < 2; iter_winner++) {

            if (iter_winner === 0) {
                player_symbol = 'x';
            } else {
                player_symbol = 'o';
            }

            if (this.field[0][0] === player_symbol && this.field[0][1] === player_symbol && this.field[0][2] === player_symbol) {
                return player_symbol;
            }

            if (this.field[1][0] === player_symbol && this.field[1][1] === player_symbol && this.field[1][2] === player_symbol) {
                return player_symbol;
            }

            if (this.field[2][0] === player_symbol && this.field[2][1] === player_symbol && this.field[2][2] === player_symbol) {
                return player_symbol;
            }

            if (this.field[0][0] === player_symbol && this.field[1][0] === player_symbol && this.field[2][0] === player_symbol) {
                return player_symbol;
            }

            if (this.field[0][1] === player_symbol && this.field[1][1] === player_symbol && this.field[2][1] === player_symbol) {
                return player_symbol;
            }

            if (this.field[0][2] === player_symbol && this.field[1][2] === player_symbol && this.field[2][2] === player_symbol) {
                return player_symbol;
            }

            if (this.field[0][0] === player_symbol && this.field[1][1] === player_symbol && this.field[2][2] === player_symbol) {
                return player_symbol;
            }

            if (this.field[0][2] === player_symbol && this.field[1][1] === player_symbol && this.field[2][0] === player_symbol) {
                return player_symbol;
            }
        }

        return null;
    }

    noMoreTurns() {
        for (let iter_field_row = 0; iter_field_row < this.field.length; iter_field_row++) {
            for (let iter_field_column = 0; iter_field_column < this.field[iter_field_row].length; iter_field_column++) {
                if (this.field[iter_field_row][iter_field_column] === null) {
                    return false;
                }
            }
        }
        
        return true;
    }

    isDraw() {
        if (!this.noMoreTurns() || this.getWinner()) {
            return false;
        }

        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}


module.exports = TicTacToe;
