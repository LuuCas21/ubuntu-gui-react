import './YouTube.css';

const YouTubeEmbed = ({ embedId }) => {

    return (
        <div className='youtubeVideo'>
            <iframe width='853' height='480' src={`https://www.youtube.com/embed/${embedId}`} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' title="Embedded youtube"></iframe>
        </div>
    )
};

export default YouTubeEmbed;