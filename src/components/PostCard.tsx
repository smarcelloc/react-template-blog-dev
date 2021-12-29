import * as React from 'react';
import ClampLines from 'react-clamp-lines';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

import moment from 'moment';

import { PostProps } from '../interfaces';
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

interface Props extends PostProps {}

const PostCard: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();

  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const handleClick = () => {
    navigate(`/post/${props.id}`);
  };

  return (
    <MyCard>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={`picture of ${props.title}`}
        />
        <CardProfile
          avatar={
            <AvatarProfile
              size="small"
              aria-label="recipe"
              user={{
                name: props.author.name || '',
                avatar: props.author.avatar,
              }}
            />
          }
          title={props.author.name}
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" component="h3">
            <ClampLines
              id="postTitle"
              lines={2}
              buttons={false}
              text={props.title}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {moment(props.time).fromNow()}
            </Typography>
          </Grid>
          <Grid item>
            {isAuthenticated && (
              <Checkbox
                inputProps={{ 'aria-label': 'add to favorites' }}
                icon={<BookmarkAddIcon />}
                checkedIcon={<BookmarkIcon />}
                color="default"
                defaultChecked={props.isFavorite}
              />
            )}
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
