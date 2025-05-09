import ellipsisSvg from '../../../assets/ellipsis.svg';
import IconButton from '../../buttons/IconButton/IconButton';
import './BookmarkFileItem.css';

function BookmarkFileItem(props: any) {
    return (
        <>
            <div className="bookmarkFileItem">
                <span><img src={props.browserIcon} alt="Browser logo" />{props.name}</span>
                <div>
                    <p>{props.lastUpdate}</p>
                    <IconButton onClick={() => alert('Clicked!')} src={ellipsisSvg} alt="Ellipsis logo" />
                </div>
            </div>
        </>
    )
}

export default BookmarkFileItem;