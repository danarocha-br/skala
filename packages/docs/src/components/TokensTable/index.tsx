import './styles.css';

type TokensTableProps = {
  tokens: Record<string, string>;
  isSpacing?: boolean;
  unity?: 'px' | 'rem' | 'none';
};

export function TokensTable({
  tokens,
  unity = 'rem',
  isSpacing,
}: TokensTableProps) {
  return (
    <table className="tokens-table">
      <thead>
        <tr>
          <th>Name</th>
          {isSpacing && <th></th>}
          <th>{unity !== 'none' ? 'Pixel' : 'Value'}</th>
          {unity !== 'none' && <th>Rem</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              {isSpacing && (
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
