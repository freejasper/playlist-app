import '../css/Song.css';

export default function Song({ key, item, searchResult, handleAdd, handleRemove }) {
    function addToPlaylist() {
        handleAdd(item);
    }

    function removeFromPlaylist() {
        handleRemove(item);
    }
    
    if(searchResult) {
        return (
        <>
            <div className='song'>
                <h1>{item.songname}</h1>
                <h3>{item.artist} | {item.album}</h3>
                <button onClick={addToPlaylist} className='addsong'>+</button>
            </div>
        </>
    );
    }
    return (
        <>
            <div className='song'>
                <h1>{item.songname}</h1>
                <h3>{item.artist} | {item.album}</h3>
                <button onClick={removeFromPlaylist} className='removesong'>-</button>
            </div>
        </>
    );
    
}