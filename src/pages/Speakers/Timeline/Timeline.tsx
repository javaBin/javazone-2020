import React from 'react';
import './Timeline.scss';

const data = [
    {
        month: 'Jan',
        events: []
    },
    {
        month: 'Feb',
        events: [{
            title: 'Call for speakers',
            date: 'February 2nd',
            location: '0px',
            align: 'right'
        }]
    },
    {
        month: 'Mar',
        events: [{
            title: 'Workshop for Potential Speakers',
            date: 'March 17th',
            location: '-40px',
            align: 'left'
        },]
    },
    {
        month: 'Apr',
        events: []
    },
    {
        month: 'May',
        events: []
    },
    {
        month: 'Jun',
        events: []
    },
    {
        month: 'Jul',
        events: []
    },
    {
        month: 'Aug',
        events: [{
            title: 'Call for speakers closes',
            date: 'August 31st',
            location: '25px',
            align: 'right'
        }]
    },
    {
        month: 'Sep',
        events: [{
            title: 'JavaZone VR',
            date: 'September 9th',
            location: '60px',
            align: 'left'
        }]
    },
    {
        month: 'Oct',
        events: [{
            title: 'Accepted speakers notified',
            date: 'By The End of October',
            location: '15px',
            align: 'right'
        }]
    },
    {
        month: 'Nov',
        events: [{
            title: 'Deadline for Reimbursement Applications',
            date: 'November 13th',
            location: '60px',
            align: 'left'
        }]
    },
    {
        month: 'Dec',
        events: []
    },
    {
        month: 'Jan',
        events: [
            {
                title: 'JavaZone 2020!',
                date: 'January 20th-21st',
                location: '-10px',
                align: 'right'
            }, {
                title: 'Speakers dinner',
                date: 'January 19th',
                location: '-20px',
                align: 'left'
            }
        ]
    }
];

export default () => (
    <div className='timeline'>
        <ul className='timeline__timeline'>
            {
                data.map((month, key) => (
                    <li key={key} className='timeline__month'>
                        <div className='timeline__month-name'>
                            {month.month.split('').map((letter, lk) => <div key={lk} className='timeline__month-letter'>{letter}</div>)}
                        </div>
                        {
                            month.events.map((event, ek) => (
                                <div className={`timeline__event timeline__event--${event.align}`} key={ek} style={{top: event.location}}>
                                    <div className='timeline__event-title'>
                                        {event.title}
                                    </div>
                                    <div className='timeline__event-date'>
                                        {event.date}
                                    </div>
                                </div>
                            ))
                        }
                    </li>
                ))
            }
        </ul>
    </div>
);
