import { useState, useEffect } from "react"
import { Fragment } from "react"
import { Board } from "models/Board"
import { CellComponent } from "./CellComponent"
import { Cell } from "models/Cell"
import { Player } from "models/Player"

interface IBoardProps {
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

export function BoardComponent(props: IBoardProps) {
    const { board, setBoard, currentPlayer, swapPlayer } = props

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h3>Current Player: {currentPlayer?.color}</h3>
            <div className="board">
                {board.cells.map((row, index) => (
                    <Fragment key={index}>
                        {row.map(cell => (
                            <CellComponent
                                click={click}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
