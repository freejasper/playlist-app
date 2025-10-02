export default function Song({ item, searchResult, handleAdd, handleRemove }) {
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
                <div className='songArt'>
                    <img className='albumArt' src={item.artwork} alt={item.songname + ' album art'} />
                </div>
                <div className='songInfo'>
                    <h1>{item.songname}</h1>
                    <h3>{item.artist} | {item.album}</h3>
                </div>
                <button onClick={addToPlaylist} className='addsong'>+</button>
            </div>
        </>
        );
    }
    return (
        <>
            <div className='song'>
                <div className='songArt'>
                    <img className='albumArt' src={item.artwork} alt={item.songname + ' album art'} />
                </div>
                <div className='songInfo'>
                    <h1>{item.songname}</h1>
                    <h3>{item.artist} | {item.album}</h3>
                </div>
                <button onClick={removeFromPlaylist} className='removesong'>-</button>
            </div>
        </>
    );
    
}