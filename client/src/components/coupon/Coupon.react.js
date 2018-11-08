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
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';


class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redeemed: props.redeemed,
      loading: false,
      revealClicked: 0,
    };
  }

  handleButtonClick = () => {
    this.setState({revealClicked: this.state.revealClicked+1});
    if (this.state.revealClicked >= 1) {
      this.genRedeemCoupon(this.props.id)
      .then(res => {
        if (res.message === 'ok') {
          this.setState({ redeemed: true, loading: false});
        }
      })
      .catch(err => console.log(err));
    }
  }

  genRedeemCoupon = async(couponId) => {
    this.setState({ loading: true });
    const response = await fetch('/api/coupon/redeem', {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({ couponId: couponId }),
    });
    const body = await response.json();

    if (response.status !== 200) {
      console.log('throwing error');
      throw Error(body.message)
    }
    return body;
  };

  generateButtonText() {
    if (this.state.redeemed) {
      return 'Redeemed';
    }
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

  render() {
    const {
      classes,
      title,
      description,
    } = this.props;

    const { loading } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      <CardActions className={classes.actions}>
        <div className={this.props.classes.wrapper}>
          <Button
            onClick={this.handleButtonClick}
            className={classes.claimButton}
            variant="contained"
            size="small"
            color="primary"
            disabled={this.state.redeemed}>
            {this.generateButtonText()}
          </Button>
          {loading && <CircularProgress size={24} className={this.props.classes.buttonProgress} />}
        </div>
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
  buttonProgress: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -8,
    marginLeft: -12,
  },
  wrapper: {
    width: '100%',
    margin: theme.spacing.unit,
    position: 'relative',
  },
});

export default withStyles(styles)(Coupon);
