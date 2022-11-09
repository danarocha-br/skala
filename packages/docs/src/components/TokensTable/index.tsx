import { Box } from '@skala/react';
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
    <Box as="table" className="tokens-table" css={{ my: '$spacing-6' }}>
      <thead>
        <Box
          as="tr"
          css={{
            '& th': {
              color: '$color-neutral-400',
              opacity: 0.8,
              fontSize: '$font-size-xs',
              letterSpacing: '1.3px',
              textTransform: 'uppercase',
              borderBottom: '3px solid $color-neutral-200',
            },
          }}
        >
          <th>Name</th>
          {type === 'spacing' && <th />}
          {type === 'radii' && <th />}
          <th>{unity !== 'none' ? 'Pixel' : 'Value'}</th>
          {unity !== 'none' && <th>Rem</th>}
        </Box>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <Box
              as="tr"
              key={key}
              css={{
                color: '$color-neutral-600',
                '&:nth-child(even) td': {
                  backgroundColor: '$color-neutral-100',
                },
              }}
            >
              <Box as="td" css={{ color: '$color-froly-500' }}>
                ${key}
              </Box>

              {type === 'spacing' && (
                <td>
                  <Box
                    css={{
                      bg: '$color-neutral-200',
                      height: '$spacing-5',
                      width: value,
                    }}
                  />
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
                  <Box
                    css={{
                      bg: '$color-neutral-200',
                      height: '$spacing-5',
                      width: key !== 'circle' ? 64 : 32,
                      borderRadius: value,
                    }}
                  />
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
            </Box>
          );
        })}
      </tbody>
    </Box>
  );
}
