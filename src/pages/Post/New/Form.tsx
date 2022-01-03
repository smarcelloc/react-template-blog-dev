import * as React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { useFormikContext } from 'formik';

import { FormValue } from '.';
import ImageForm from '../../../components/ImageForm';
import { TagsProps } from '../../../entities';
import request from '../../../utils/request';

interface RequestProps {
  tags: TagsProps[];
}

const Form: React.FC = () => {
  const formik = useFormikContext<FormValue>();
  const [optionsTags, setOptionsTags] = React.useState<TagsProps[]>([]);

  const getOptionsTags = React.useCallback(async () => {
    const response = await request.get<RequestProps>('/api/tags');
    setOptionsTags(response.data.tags);
  }, [setOptionsTags]);

  React.useEffect(() => {
    getOptionsTags();
  }, [getOptionsTags]);

  return (
    <>
      <ImageForm
        id="image"
        name="image"
        buttonProps={{
          fullWidth: true,
          size: 'large',
          variant: 'outlined',
          color: 'info',
        }}
        image={formik.values.image}
        setFieldValue={formik.setFieldValue}
        error={!!formik.errors.image}
        helperText={formik.errors.image}
        boxProps={{ mb: 1 }}
        imageAlt="cover of post"
        optionsImage={{
          accept: 'image/*',
          multiple: false,
          maxSize: 54525952,
        }}
      />

      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        type="text"
        margin="normal"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={!!formik.errors.title}
        helperText={formik.errors.title}
      />

      <Autocomplete
        multiple
        options={optionsTags}
        getOptionLabel={(tag) => tag.title}
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={formik.values.tags}
        onChange={(e, value) => formik.setFieldValue('tags', value)}
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
        id="content"
        name="content"
        label="MarkDown Editor"
        variant="outlined"
        fullWidth
        multiline
        rows={8}
        margin="normal"
        value={formik.values.content}
        onChange={formik.handleChange}
        error={!!formik.errors.content}
        helperText={formik.errors.content}
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
          <Button type="submit" variant="contained" color="secondary">
            Publish
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
