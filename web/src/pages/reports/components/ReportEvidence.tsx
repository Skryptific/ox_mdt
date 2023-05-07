import React from 'react';
import { ActionIcon, Badge, Button, Group, rem, Text } from '@mantine/core';
import { IconEdit, IconPaperBag, IconX } from '@tabler/icons-react';
import { useActiveReport, useEvidence } from '../../../state';
import BadgeButton from '../../../components/BadgeButton';

const ReportEvidence: React.FC = () => {
  const evidence = useEvidence();

  return (
    <>
      <Group position="apart" noWrap>
        <Text size="xl">Evidence</Text>
        <IconPaperBag />
      </Group>
      <Group spacing="xs">
        <BadgeButton label="Add evidence" />
        {evidence.map((evidence) => (
          <Badge
            key={evidence.image}
            rightSection={
              <ActionIcon size="xs" radius="xl" variant="transparent">
                <IconX size={rem(10)} />
              </ActionIcon>
            }
          >
            {evidence.label}
          </Badge>
        ))}
      </Group>
    </>
  );
};

export default ReportEvidence;