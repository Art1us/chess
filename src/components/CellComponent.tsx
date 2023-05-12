import { Cell } from "models/Cell"

interface ICellProps {
    cell: Cell
    selected: boolean
    click: (cell: Cell) => void
}

export function CellComponent({ cell, selected, click }: ICellProps) {
    return (
        <div
            className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
            onClick={() => click(cell)}
            style={{ background: cell.available && cell.figure ? "green" : "" }}
        >
            {cell.available && !cell.figure && <div className="available" />}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    )
}