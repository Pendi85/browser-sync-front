import './IconButton.css';

function IconButton(props : any) {
    return (
        <>
            <button className="icon-button" onClick={props.onClick}>
                <img src={props.src} alt={props.alt} />
            </button>
        </>
    )
}

export default IconButton;