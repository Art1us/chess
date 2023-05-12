import { Colors } from "models/Colors"
import { Figure, FigureNames } from "./Figure"
import { Cell } from "models/Cell"
import blackLogo from "assets/black-king.png"
import whiteLogo from "assets/white-king.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        if (
            (target.y === this.cell.y + 1 && target.x === this.cell.x) ||
            (target.y === this.cell.y - 1 && target.x === this.cell.x) ||
            (target.x === this.cell.x + 1 && target.y === this.cell.y) ||
            (target.x === this.cell.x - 1 && target.y === this.cell.y)
        ) {
            return true
        }

        const absX = Math.abs(target.x - this.cell.x)
        const absY = Math.abs(target.y - this.cell.y)

        if (this.cell.isEmptyDiagonal(target) && absX === 1 && absY === 1) {
            return true
        }

        return false
    }
}
