import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import * as emailjs from 'emailjs-com';

const useStyles = makeStyles(theme => ({
  button: {
    width: '25%',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '2em',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%',
  },
  dense: {
    marginTop: 19,
  },
  resize: {
    fontSize: 20,
  },
  resizeLabel: {
    fontSize: 15,
  },
}));

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

const TextMain = styled.h1`
  font-size: 2em;
`;

const TextSecondary = styled.h2`
  font-size: 1.5em;
  color: salmon;
`;

const OuterContainer = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 75%;
  padding: 2em;
`;

export default function Form() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = React.useState({
    isLoading: false,
    isError: false,
    isSent: false,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoading({ ...loading, isLoading: true });
    emailjs
      .send('dcorkrangmail', 'individual', values, 'user_IN56cExs8nKfIruLAsVPT')
      .then(() => {
        setLoading({ ...loading, isSent: true });
      })
      .catch(err => {
        setLoading({ ...loading, isError: true });
      });
  };

  const renderFormFields = () => {
    if (loading.isError) {
      return <h1>Whoops... Email not sent. Try refreshing the page and trying again.</h1>;
    }
    if (loading.isLoading) {
      return <h1>Loading...</h1>;
    }
    if (loading.isSent) {
      return <h1>Thanks! We will be in touch with you soon!</h1>;
    }
    return (
      <StyledFormContainer onSubmit={handleSubmit} className={classes.container}>
        <TextField
          id='standard-name'
          label='Name'
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin='normal'
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.resizeLabel,
            },
          }}
        />
        <TextField
          id='standard-email'
          label='Email'
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin='normal'
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.resizeLabel,
            },
          }}
        />
        <TextField
          id='standard-phone'
          label='Phone Number'
          className={classes.textField}
          value={values.phone}
          onChange={handleChange('phone')}
          margin='normal'
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.resizeLabel,
            },
          }}
        />
        <TextField
          id='standard-message'
          label='Message'
          className={classes.textField}
          value={values.message}
          onChange={handleChange('message')}
          margin='normal'
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.resizeLabel,
            },
          }}
        />
        <Button type='submit' variant='contained' color='primary' size='large' className={classes.button}>
          Send
        </Button>
      </StyledFormContainer>
    );
  };

  return (
    <OuterContainer>
      <TextMain>Ready?</TextMain>
      <TextSecondary>Fill out this form and join us on this adventure!</TextSecondary>
      {renderFormFields()}
    </OuterContainer>
  );
}
