import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  nextButton: {
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    color: 'white',
    background: '#13B9AC',
    width: '10rem',
    '&:hover': {
      background: '#13B9AC',
      textDecoration: 'underline',
    },
  },
  backButton: {
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    color: '#13B9AC',
    background: 'transparent',
    boxShadow: '0 0 0 0',
    width: '10rem',
    '&:hover': {
      background: 'white',
      boxShadow: '0 0 0 0',
      textDecoration: 'underline',
    },
  },
}));
