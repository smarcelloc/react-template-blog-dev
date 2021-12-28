import * as React from 'react';

import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';

import AvatarProfile from './AvatarProfile';

const MyCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  '& .MuiCardActionArea-root': {
    height: '100%',
  },
  '& .MuiCardContent-root': {
    height: '100%',
  },
});

const CardProfile = styled(CardHeader)({
  paddingBottom: 0,
});

const PostCard: React.FC = () => {
  return (
    <MyCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="picture of title"
        />
        <CardProfile
          avatar={
            <AvatarProfile
              size="small"
              aria-label="recipe"
              user={{ name: 'Joe John' }}
            />
          }
          title="Joe Jonh"
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" component="h3">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Ago 30 days
            </Typography>
          </Grid>
          <Grid item>
            <Checkbox
              inputProps={{ 'aria-label': 'add to favorites' }}
              icon={<BookmarkAddIcon />}
              checkedIcon={<BookmarkIcon />}
              color="default"
            />
            <IconButton aria-label="share the post">
              <ShareIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </MyCard>
  );
};

export default PostCard;
