import React from 'react';
import { Box, createStyles } from '@mantine/core';
import { useAnnouncements } from '../../../state';
import { useCharacter } from '../../../state';
import AnnouncementCard from './AnnouncementCard';
import NotFound from '../../../components/NotFound';
import { IconBellOff } from '@tabler/icons-react';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflowY: 'auto',
  },
}));

const AnnouncementList: React.FC = () => {
  const character = useCharacter();
  const [announcements, dispatch] = useAnnouncements();
  const { classes } = useStyles();
  const { ref } = useInfiniteScroll(() => dispatch({ type: 'fetchNextPage' }));

  const pages = React.useMemo(() => announcements.pages.flatMap((page) => page.announcements), [announcements]);

  return (
    <Box className={classes.container}>
      {pages.length > 0 ? (
        <>
          {pages.map((announcement) => (
            <AnnouncementCard
              key={`${announcement.id}-${announcement.contents}`}
              announcement={announcement}
              character={character}
            />
          ))}
        </>
      ) : (
        <NotFound icon={IconBellOff} label="No announcements" />
      )}
      {pages.length > 0 && <span ref={ref} />}
    </Box>
  );
};

export default AnnouncementList;
