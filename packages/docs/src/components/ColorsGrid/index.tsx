import { getContrast } from 'polished';

type ColorsGridProps = {
  tokens: Record<string, string>;
};

export function ColorsGrid({ tokens }: ColorsGridProps) {
  return (
    <div style={{ marginTop: '3rem' }}>
      {console.log(tokens)}
      {Object.entries(tokens).map(([key, color]) => {
        return (
          <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color:
                  getContrast(String(color), '#FFF') < 3.5 ? '#000' : '#fff',
              }}
            >
              <strong>${key}</strong>
              <span>{color}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
