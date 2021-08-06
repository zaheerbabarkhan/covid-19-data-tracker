import React from 'react'
import {Card , CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import Countup from 'react-countup'
import cx from 'classnames'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.cards, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <Countup  start={0} end={confirmed ? confirmed.value: "Loading.."} duration={2.5} separator={","} />
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate ? new Date(lastUpdate).toDateString() : "Loading..."}</Typography>
                        <Typography variant="body2">Number Of Active cases of COVID 19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.cards, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                        <Countup  start={0} end={recovered ? recovered.value : "Loading..."} duration={2.5} separator={","} />
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate ? new Date(lastUpdate).toDateString() : "Loading..."}</Typography>
                        <Typography variant="body2">Number Of Recoveries from COVID 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.cards, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                        <Countup  start={0} end={deaths ? deaths.value : "Loading"} duration={2.5} separator={","} />
                        </Typography>
                        <Typography color="textSecondary">{lastUpdate ? new Date(lastUpdate).toDateString() : "Loading..."}</Typography>
                        <Typography variant="body2">Number Of deaths caused by COVID 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards