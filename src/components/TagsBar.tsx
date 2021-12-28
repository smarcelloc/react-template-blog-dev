import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { TagsProps } from '../interfaces';
import ButtonMore from './ButtonMore';

const tags: TagsProps[] = [
  {
    id: 1,
    title: 'React JS',
  },
  {
    id: 2,
    title: 'JS',
  },
  {
    id: 3,
    title: 'CSS',
  },
];

const TagsBar: React.FC = () => {
  return (
    <Paper>
      <Box p={1}>
        <Button fullWidth color="secondary" variant="outlined">
          Create new account
        </Button>
      </Box>
      <List>
        <ListSubheader>Tags Top</ListSubheader>
        {tags.map(({ id, title }) => (
          <ListItemButton key={id}>
            <Typography noWrap>{title}</Typography>
          </ListItemButton>
        ))}
      </List>
      <ButtonMore>View more tags</ButtonMore>
    </Paper>
  );
};

export default TagsBar;
