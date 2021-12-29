import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import ImageForm from '../../../components/ImageForm';
import { usePost } from '../../../context/PostContext';
import { TagsProps } from '../../../interfaces';
import request from '../../../utils/request';

interface RequestProps {
  tags: TagsProps[];
}

const Form: React.FC = () => {
  const context = usePost();
  const [optionsTags, setOptionsTags] = React.useState<TagsProps[]>([]);

  const getOptionsTags = React.useCallback(async () => {
    const response = await request.get<RequestProps>('/api/tags');
    setOptionsTags(response.data.tags);
  }, [setOptionsTags]);

  React.useEffect(() => {
    getOptionsTags();
  }, [getOptionsTags]);

  return (
    <form>
      <ImageForm
        fullWidth
        size="large"
        variant="outlined"
        image={context.image}
        setImage={context.setImage}
        sx={{ mb: (theme) => theme.spacing(1) }}
      />

      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        required
        type="text"
        margin="normal"
        defaultValue={context.title}
        onChange={(event) => context.setTitle(event.target.value)}
      />

      <Autocomplete
        multiple
        options={optionsTags}
        getOptionLabel={(tag) => tag.title}
        filterSelectedOptions
        value={context.tags}
        onChange={(event, values) => context.setTags(values)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tags"
            id="tags"
            name="tags"
            margin="normal"
          />
        )}
      />

      <TextField
        id="markdown"
        name="markdown"
        label="MarkDown Editor"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={8}
        margin="normal"
        value={context.markdown}
        onChange={(event) => context.setMarkdown(event.target.value)}
      />

      <Grid
        mt={5}
        container
        columnSpacing={2}
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <Button variant="text" color="inherit">
            Save draft
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Publish
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
