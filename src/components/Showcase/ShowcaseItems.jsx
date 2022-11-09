import React from 'react';
import Chip from '../Chip';

const ShowcaseItems = (props) => {
    return (
        <div className="scroll-item">
            <div className='showcase__content--mockup'>
                <img className='showcase-item' src={props.image}></img>
                <img className='showcase-mockup' src={require("../../assets/images/showcase-mockup.png")}></img>
                <a target="_blank" href={props.url} className='tooltip'>
                    <div className='tooltip__text'>
                        <img className='' src={require("../../assets/images/go-to-website-arrow.png")}></img>
                        GO TO WEBSITE
                    </div>
                </a>
            </div>
            <div className='showcase__content--text'>
                <h2 className='showcase-text'>{props.item}</h2>
                <div className='chips showcase-chips'>
                    {props.chips.map((newShowcaseChip) => (
                        <Chip
                            key={newShowcaseChip.id}
                            item={newShowcaseChip.item}
                        />
                    ))}
                </div>
                <div className='showcase-description'>
                    <div>
                        <h2>TYPE</h2>
                        {props.type.map((typeTask) => (
                            <li key={typeTask.id}>{typeTask.item}</li>
                        ))}
                    </div>
                    <br></br>
                    <div>
                        <h2>DESCRIPTION</h2>
                        <li>{props.desc}</li>
                    </div>
                    <br></br>
                    <div>
                        <h2>YEAR</h2>
                        <li>{props.year}</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseItems