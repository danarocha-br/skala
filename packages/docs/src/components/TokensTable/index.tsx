import './styles.css';

type TokensTableProps = {
  tokens: Record<string, string>;
  type?: 'spacing' | 'shadow' | 'general' | 'radii';
  unity?: 'px' | 'rem' | 'none';
};

export function TokensTable({
  tokens,
  unity = 'rem',
  type = 'general',
}: TokensTableProps) {
  return (
    <table className="tokens-table">
      <thead>
        <tr>
          <th>Name</th>
          {type === 'spacing' && <th></th>}
          {type === 'radii' && <th></th>}
          <th>{unity !== 'none' ? 'Pixel' : 'Value'}</th>
          {unity !== 'none' && <th>Rem</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>

              {type === 'spacing' && (
                <td>
                  <div
                    style={{
                      backgroundColor: 'white',
                      height: 24,
                      width: value,
                    }}
                  ></div>
                </td>
              )}

              {/* {type === 'shadow' && (
                <td>
                  <div
                    style={{
                      backgroundColor: 'white',
                      height: 24,
                      width: value,
                      boxShadow: value,
                    }}
                  ></div>
                </td>
              )} */}

              {type === 'radii' && (
                <td>
                  <div
                    style={{
                      backgroundColor: 'white',
                      height: 32,
                      width: key !== 'circle' ? 64 : 32,
                      borderRadius: value,
                    }}
                  ></div>
                </td>
              )}

              <td>{value}</td>

              {unity !== 'none' && (
                <td>
                  {unity !== 'rem'
                    ? Number(value.replace('px', '')) / 16 + 'rem'
                    : Number(value.replace('rem', '')) * 16 + 'px'}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
