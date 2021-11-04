import React from 'react'
import spiner from '../../../img/Spinner-5.gif'

type PropsType = {

}

let Preloader: React.FC<PropsType> = (props) => {
    return <div>
        <img src={spiner} alt={'Some spiner'}/>
    </div>
}

export default Preloader