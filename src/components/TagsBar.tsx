import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  return (
    <Paper>
      {!isAuthenticated && (
        <Box p={1}>
          <Link to="/login">
            <Button fullWidth color="secondary" variant="outlined">
              Create new account
            </Button>
          </Link>
        </Box>
      )}
      <List>
        <ListSubheader>Tags Top</ListSubheader>
        {tags.map(({ id, title }) => (
          <ListItemButton key={id}>
            <Typography noWrap>#{title}</Typography>
          </ListItemButton>
        ))}
      </List>
      <ButtonMore>View more tags</ButtonMore>
    </Paper>
  );
};

export default TagsBar;
