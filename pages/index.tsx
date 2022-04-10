import { Badge, Box, Button, Text } from 'components';
import Head from 'next/head';
import Link from 'next/Link';
import { styled } from 'stitches.config';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Rating } from 'components/Rating';

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
        <title>Courses List</title>
      </Head>
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text as="h1" size="9" variant="purple" gradient>
          Courses
        </Text>
        <Box css={{ mt: '$4' }}>
          <Text as="p" variant="contrast">
            Студенты освоят не только hard skills, необходимые для работы
            веб-дизайнером, но и soft skills — навыки, которые позволят
            эффективно взаимодействовать в команде с менеджерами, разработчиками
            и маркетологами. Выпускники факультета могут успешно конкурировать с
            веб-дизайнерами уровня middle.
          </Text>
          <Badge>badge</Badge>
          <Badge variant="green" size="2">
            <Link href="/" passHref>
              <a style={{ textDecoration: 'none', color: 'currentColor' }}>
                badge
              </a>
            </Link>
          </Badge>
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
        <Box
          css={{
            mt: '$4',
          }}
        >
          <Rating setRating={() => {}} isEditable={false} rating={2} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
