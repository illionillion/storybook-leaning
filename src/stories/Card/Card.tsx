import './card.css'
import { FC, ReactNode } from "react";

interface CardProps {
    /**
     * 子要素
     */
    children: ReactNode
    /**
     * 画像のURL
     */
    imgSrc?: string;
    /**
     * 画像のaltテキスト
     */
    imgAltText?: string;
}

/**
 * カード
 * @param param0 
 * @returns 
 */
export const Card: FC<CardProps> = ({ children, imgSrc, imgAltText }) => {
    return <div className='card-container'>
        {imgSrc ? <div className="card-header">
            <div className="card-header__inner">
                <img className='card-img' src={imgSrc} alt={imgAltText} />
            </div>
        </div> : undefined}
        <div className="card-body">{children}</div>
    </div>
}