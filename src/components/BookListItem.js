import React, { Component } from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';

const styles = { // 하이오더 컴포넌트로 지정
    image : {
        width : 128,
        height : 164,
    },
    textArea : {
        width : 390
    },

}

class BookListItem extends Component {

    render(){
        // 하이오더 컴포넌트로 지정해서 class 지정
        const { book, classes } = this.props;

        return(
            <Paper>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.image} src={ book.imgUrl } />
                    </Grid>
                    <Grid item className={classes.textArea} >
                        <Typography component="h5" variant="h5">
                            { book.title }
                        </Typography>
                        <Typography gutterBottom>
                            { book.author }
                        </Typography>
                        <Typography color='textSecondary'>
                            { book.introduce }
                        </Typography>
                    </Grid>                    
                </Grid>
            </Paper>
        );
    }

}
// 하이오더 컴포넌트로 지정
export default withStyles(styles)(BookListItem);