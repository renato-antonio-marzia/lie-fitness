export default function Dashboard() {
  return (
    <main className="lf-dashboard">
      <div className="lf-card">
        <h2>MVP in costruzione</h2>
        <p>Le funzioni in arrivo (backlog su GitHub):</p>
        <ul>
          <li>Inserimento seduta (#4)</li>
          <li>Storico per esercizio (#5)</li>
          <li>Grafici progressione (#6)</li>
          <li>Programma/scheda PPL (#7)</li>
        </ul>
        <p className="lf-note">Dati: import da Motra TrainAI / schede Masini (#3).</p>
      </div>
    </main>
  );
}
