import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import theme from './../../theme';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redeemed: false,
      revealClicked: 0,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({revealClicked: this.state.revealClicked+1});
    if (this.state.revealClicked >= 1) {
      this.setState({redeemed: true});
    }
  }

  generateButtonText() {
    const num = this.state.revealClicked;
    switch (num) {
      case 0:
        return 'Redeem Coupon';
      case 1:
        return 'Press to Confirm';
      default:
        return 'Redeemed';
    }
  }

  _renderButton(classes) {
    if (this.state.redeemed) {
      // render redeemed button
      return (
        <Button
          onClick={this.handleButtonClick}
          className={classes.claimButton}
          variant="contained"
          size="small"
          color="primary"
          disabled={true}>
          {this.generateButtonText()}
        </Button>
      );
    } else {
      return (
        <Button
          onClick={this.handleButtonClick}
          className={classes.claimButton}
          variant="contained"
          size="small"
          color="primary">
          {this.generateButtonText()}
        </Button>
      );
    }
  }

  render() {
    const {
      classes,
      title,
      description,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={title}
          // subheader="Terms and conditions apply"
        />
        <CardContent className={classes.content}>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography> */}
          <Typography component="p">
            {description}
          </Typography>
          {/* <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="550"
            image="static/img/district9.jpg"
            title="Contemplative Reptile"
          /> */}
        </CardContent>
      <CardActions className={classes.actions}>
        {this._renderButton(classes)}
      </CardActions>
    </Card>
    );
  }
}

const styles = theme => ({
  card: {
    marginTop: 24,
    // minWidth: 275,
    // maxWidth: '100%',
    padding: 12,
    // maxHeight: 500,
  },
  content: {
    // minHeight: 500,
  },
  media: {
    padding: 20,
    objectFit: 'cover',
  },
  actions: {
    marginTop: 50,
  },
  claimButton: {
    width: '100%',
    height: 50,
  },
});


export default withStyles(styles)(Coupon);
