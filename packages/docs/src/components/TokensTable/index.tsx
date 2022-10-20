import './styles.css';

type TokensTableProps = {
  tokens: Record<string, string>;
  isSpacing?: boolean;
};

export function TokensTable({ tokens, isSpacing }: TokensTableProps) {
  return (
    <table className="tokens-table">
      <thead>
        <tr>
          <th>Name</th>
          {isSpacing && <th></th>}
          <th>Pixel</th>
          <th>Rem</th>
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
              <td>{Number(value.replace('px', '')) / 16} rem</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
