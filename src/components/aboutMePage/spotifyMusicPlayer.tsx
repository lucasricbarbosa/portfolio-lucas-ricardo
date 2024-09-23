interface spotifyMusicPlayerProps {
  musicLink: string
}

export function SpotifyMusicPlayer({ musicLink }: spotifyMusicPlayerProps) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${musicLink}`}
      width="100%"
      height="100"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="music"
    />
  )
}
