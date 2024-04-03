import './card.css'
import { FC, ReactNode } from "react";

interface CardProps {
    /**
     * 子要素
     */
    children: ReactNode
}

/**
 * カード
 * @param param0 
 * @returns 
 */
export const Card: FC<CardProps> = ({ children }) => {
    return <div className='card-container'>
        <div className="card-header">
            <div className="card-header__inner">
                <img className='card-img' src="https://picsum.photos/400" alt="" />
            </div>
        </div>
        <div className="card-body">{children}</div>
    </div>
}