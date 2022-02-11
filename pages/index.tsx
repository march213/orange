import StitchesLogo from 'components/StitchesLogo';
import Head from 'next/head';
import { styled } from 'stitches.config';

const Box = styled('div', {});

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
});

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$plum9',
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
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

const Home: React.FC = () => {
  const a = 'llk';
  return (
    <Box css={{ py: '$6' }}>
      <Head key={Math.random()}>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <StitchesLogo />
        <Text as="h1">Hello, from Stitches.</Text>
        <Text>
          For full documentation, visit{a}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
        <Text>some more text here</Text>
      </Container>
    </Box>
  );
};

export default Home;
