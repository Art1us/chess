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
}