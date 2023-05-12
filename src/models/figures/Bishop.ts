import { Colors } from "models/Colors"
import { Figure, FigureNames } from "./Figure"
import { Cell } from "models/Cell"
import blackLogo from "assets/black-bishop.png"
import whiteLogo from "assets/white-bishop.png"

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.BISHOP
    }
}
