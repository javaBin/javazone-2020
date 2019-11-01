import React from 'react';

interface ListProps {
    children: React.ReactNode;
}

export function List(props: ListProps) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}