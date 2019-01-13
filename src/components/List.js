import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import { addArticle } from '../components/store/actions/AddArticleActions';
import { connect } from 'react-redux'
import uuid from 'uuid'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  input: {
    margin: theme.spacing.unit,
  }
});


class List extends Component  {

    state = {
        title: ""
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }    
    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.title({this.state.title})
    // }
    render(){
        const { classes } = this.props;
        console.log(this.props.title)
        return (
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Input
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInput}
                    placeholder="Placeholder"
                    className={classes.input}
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                <Button variant="outlined" color="primary" className={classes.input} type="submit">
        Submit
      </Button>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                    {this.props.title.map(el => <p key={uuid.v4()}>{el}</p> )}
                </Paper>
              </Grid>
            </Grid>
          </div>
        );
    }

}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return{
        title: state.article.articles
    }
}

// const mapDipatchToProps = dispatch => {
//     return {
//         addArticle: (article) => dispatch(addArticle(article))
//     }
// }

export default connect(mapStateToProps)(withStyles(styles)(List));
