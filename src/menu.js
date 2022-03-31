import React from 'react'

const menu = (items) => {
    return(
        <div className="section-center">
            {items.filter((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return(
                    <article key={id} className="menuItem">
                        <img src={img} alt={title} className='photo' />
                        <div className="itemInfo">
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className="item-text">
                                {desc}
                            </p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default menu;
