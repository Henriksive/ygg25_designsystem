// Kommenter ut linjen ved å fjerne // og bytt ut DITT_TEMA med navnet på temaet ditt
import "../design-tokens-build/theme.css";
import { Button, Heading, Paragraph } from "@digdir/designsystemet-react";
import "./App.css";

function App() {
  return (
    <div data-color="accent" data-color-scheme="light">
      <Heading data-size="lg" level={1}>
        Velkommen til Designsystemet workshop.
      </Heading>
      <div className="minklasse">
        <Paragraph>
          Redigere kildekoden i <code>App.tsx</code> for å endre utseendet på
          denne siden
        </Paragraph>
      </div>
      <Button>Knapp</Button>
    </div>
  );
}

export default App;
