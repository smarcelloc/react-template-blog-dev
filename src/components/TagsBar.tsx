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
import request from '../utils/request';
import ButtonMore from './ButtonMore';

interface RequestProps {
  tags: TagsProps[];
}

const TagsBar: React.FC = () => {
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const [tags, setTags] = React.useState<TagsProps[]>([]);

  const getTags = React.useCallback(async () => {
    const response = await request.get<RequestProps>('/api/tags/top');
    setTags(response.data.tags);
  }, [setTags]);

  React.useEffect(() => {
    getTags();
  }, [getTags]);

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
