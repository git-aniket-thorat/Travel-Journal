import globe from '../images/globe.png'

export default function Header(){
    return (
        <>
        <header>
            <img src={globe} alt='globe-image'/>
            <h1>Travel Journal</h1>
        </header>
        </>
    )
}