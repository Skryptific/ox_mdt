import React from 'react';
import { Box, Button, createStyles, Grid, SegmentedControl, Stack } from '@mantine/core';
import CardTitle from '../../components/CardTitle';
import { IconCar, IconEdit, IconPhoneCall, IconPlus, IconTrash } from '@tabler/icons-react';
import UnitCard from './components/UnitCard';
import CallCard from './components/CallCard';
import MapWrapper from './components/MapWrapper';
import CallsContainer from './components/CallsContainer';

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    backgroundColor: theme.colors.durple[6],
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
    padding: theme.spacing.md,
  },
  unitContainer: {
    background: theme.colors.durple[4],
    boxShadow: theme.shadows.md,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
  },
}));

const Dispatch: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Grid grow h="100%" mt={0} mb={0}>
      <Grid.Col span={4} pb={0} pt={0}>
        <Box className={classes.container} p={0}>
          <MapWrapper />
        </Box>
      </Grid.Col>
      <Grid.Col span={2} pb={0} pt={0}>
        <Stack className={classes.container}>
          <CallsContainer />
        </Stack>
      </Grid.Col>
      <Grid.Col span={2} pb={0} pt={0}>
        <Stack className={classes.container}>
          <CardTitle title="Units" icon={<IconCar />} />
          <Button variant="light" leftIcon={<IconPlus />}>
            Create unit
          </Button>
          <UnitCard />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Dispatch;
