import { Box, Button, Text } from 'components';
import Head from 'next/head';
import { styled } from 'stitches.config';

import { ChevronRightIcon } from '@radix-ui/react-icons';

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$blue12',
});

const Container = styled('div', {
  mx: 'auto',
  px: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
        margin: '0 auto',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

const Home: React.FC = () => {
  return (
    <Box css={{ py: '$6' }}>
      <Head key={Math.random()}>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text as="h1" size="9" variant="purple" gradient>
          Curses
        </Text>
        <Box css={{ mt: '$4' }}>
          <Text as="p" variant="contrast">
            For full documentation, visit{' '}
            <Link href="https://stitches.dev">stitches.dev</Link>.
          </Text>
        </Box>
        <Box
          css={{
            display: 'flex',
            gridGap: '24px',
            mt: '$4',
          }}
        >
          <Button type="button" variant="primary" size="2">
            Learn more
          </Button>
          <Button type="button" variant="primary" ghost size="2">
            Read reviews
            <ChevronRightIcon
              color="currentColor"
              style={{ width: '16px', height: '16px', marginLeft: '8px' }}
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
