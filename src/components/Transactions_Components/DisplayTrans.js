import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const DisplayTrans = ({ arr, classes }) =>{

    return(
        <div className="transactions">
            {arr.map(i => {
						const category = i.name;
						return (
                            <Card className={classes.card} key={i.id}>
                            <p className='cardheader'>{`Puchase Authorized on ${i.payment_date} from ${i.name}`}</p>

                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <p>{i.payment_date}</p>
                                    <b>Category</b>
                                </Grid>
                                <Grid item xs={9}>
                                    <p
                                        className={
                                            i.amount < 0
                                                ? 'red bottom-content'
                                                : 'green bottom-content'
                                        }
                                    >
                                        ${(Math.round(10 * i.amount) / 100).toFixed(2)}
                                    </p>
                                    <p className='bottom-content'>{category}</p>
                                </Grid>
                            </Grid>
                        </Card>
						)
					})}
        </div>
    )

}

export default DisplayTrans