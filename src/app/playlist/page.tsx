import { getTranslations } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/i18n.server';

const playlistTracks = [
  {
    tracks: [
      {
        artist: 'Hans Zimmer',
        song: 'Time',
        url: 'https://open.spotify.com/track/6ZFbXIJkuI1dVNWvzJzown',
      },
      {
        artist: 'Nils Frahm',
        song: 'Says',
        url: 'https://open.spotify.com/track/0U4Fj5QbBw4j0lP5P36f3w',
      },
      {
        artist: 'Ólafur Arnalds',
        song: 'Near Light',
        url: 'https://open.spotify.com/track/7vYp3cp2TAs0F9FfA83kSM',
      },
    ],
  },
  {
    tracks: [
      {
        artist: 'Daft Punk',
        song: 'Harder, Better, Faster, Stronger',
        url: 'https://open.spotify.com/track/07CwWCJetytT1cSnQOgRMU',
      },
      {
        artist: 'The Chemical Brothers',
        song: 'Go',
        url: 'https://open.spotify.com/track/1YhM0fG4fAqz9wY5Y4R7R9',
      },
      {
        artist: 'Kavinsky',
        song: 'Nightcall',
        url: 'https://open.spotify.com/track/0U0ldCRmgCqhVvD6ksG63j',
      },
    ],
  },
  {
    tracks: [
      {
        artist: 'Bonobo',
        song: 'Cirrus',
        url: 'https://open.spotify.com/track/2lJ4d8MCT6ZlDRHKJ1br14',
      },
      {
        artist: 'Tycho',
        song: 'Awake',
        url: 'https://open.spotify.com/track/6Zf9Qv5N9vQv8M8rjF0fTq',
      },
      {
        artist: 'ODESZA',
        song: 'A Moment Apart',
        url: 'https://open.spotify.com/track/6I2tqFhk8tq69iursYxuxd',
      },
    ],
  },
];

export default async function PlaylistPage() {
  const locale = await getLocaleFromCookies();
  const t = getTranslations(locale);
  const playlistItems = t.playlist.sets.map((set, index) => ({
    ...set,
    tracks: playlistTracks[index].tracks,
  }));

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">{t.simplePages.playlistTitle}</h1>
        <p className="page-lead max-w-3xl">
          {t.simplePages.playlistLead}
        </p>
      </header>

      <section className="section-stack">
        <div className="section-subtitle">
          <h2 className="section-title">{t.playlist.sectionTitle}</h2>
          <div className="section-accent"></div>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {playlistItems.map((set) => (
            <article key={set.title} className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{set.title}</h3>
              <p className="text-gray-600 mt-2 mb-5 dark:text-gray-300">{set.context}</p>
              <ol className="space-y-3">
                {set.tracks.map((track) => (
                  <li key={`${track.artist}-${track.song}`}>
                    <a
                      href={track.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg border border-gray-100 px-4 py-3 hover:border-blue-200 hover:bg-blue-50/40 transition-colors dark:border-gray-700 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
                    >
                      <span className="text-gray-800 dark:text-gray-200">
                        <span className="font-semibold">{track.song}</span>{' '}
                        <span className="text-gray-600 dark:text-gray-400">— {track.artist}</span>
                      </span>
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                        {t.common.listen}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
