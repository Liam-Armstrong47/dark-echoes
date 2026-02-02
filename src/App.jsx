import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Click on an episode to learn more</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <h3>{selectedEpisode.id}</h3>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function Catalog() {
    return (
      <section className="catalog">
        <h2>Catalog</h2>
        <ul className="catalog">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Catalog />
        <EpisodeDetails />
      </main>
    </>
  );
}
