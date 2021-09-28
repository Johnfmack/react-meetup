import React from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm2() {
    return ( 
    <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Title</label>
                    <input type='url' required id='image' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <input type='text' required id='description' />
                </div>
                <div className={classes.actions}>
                    <button>add meetup</button>
                </div>

            </form>
        </Card>
    )
}

export default NewMeetupForm2