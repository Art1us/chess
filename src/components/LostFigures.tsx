import { Figure } from "models/figures/Figure"

interface ILostFigures {
    title: string
    figures: Figure[]
}

export function LostFigures({ title, figures }: ILostFigures) {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure => (
                <div key={figure.id}>
                    {figure.name}{" "}
                    {figure.logo && <img width={20} height={20} src={figure.logo} alt="" />}
                </div>
            ))}
        </div>
    )
}
