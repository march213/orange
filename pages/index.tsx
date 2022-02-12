import { Text } from 'components';
import StitchesLogo from 'components/StitchesLogo';
import Head from 'next/head';
import { styled } from 'stitches.config';

import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';

const Box = styled('div', {});

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
        <StitchesLogo />
        <Text as="h1" size="9" variant="bronze" gradient>
          Hello stitches
        </Text>
        <Text as="p" variant="contrast">
          For full documentation, visit{' '}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
        <FaceIcon />
        <SunIcon />
        <ImageIcon />
      </Container>
    </Box>
  );
};

export default Home;
