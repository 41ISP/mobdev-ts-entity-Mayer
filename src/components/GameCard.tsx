import { API_URL } from "../api";
import type { IGame } from "../types";

interface IGameCard extends IGame {

}
export function GameCard({ title, cover, rating, description, price, genre, releaseDate }: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {/* Проверить наличие ключа и вывести */}
                {cover && (
                    <img src={API_URL + cover.url} alt={cover.alternativeText} />
                )}
                <span>{title}</span>
                {rating && (
                    <b className="card__rating">{rating}</b>
                )}
            </div>


            <div className="card__body">
                <h3>{title}</h3>
                {genre && releaseDate && <p className="card__meta">{genre}, {releaseDate}</p>}
                {description && (
                    <p className="card__desc">{description[0].children[0].text}</p>
                )}
                <p className="card__platforms">Платформы</p>

            </div>

            <footer className="card__footer">
                {price && (price ===0  ?
                    (<strong className="free">Бесплатно</strong>
                    ) : (
                        <strong className="free">{price}</strong>
                    ))}
                    
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
