import React, {useEffect, useState} from 'react';
import styles from './Grid.module.scss';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns: number;
    gap?: string;
    children: React.ReactElement[]
}

function Grid(props: GridProps) {
    const [elements, setElements] = useState<React.ReactElement[]>([]);

    useEffect(()=> {
        let temp = props.children.slice();

        for (let i = temp.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }
        setElements(temp)

    },[props.children])


    const columns = new Array(props.columns)
        .fill('1fr')
        .join(props.gap ? ` ${props.gap} ` : ' ');

    const numberOfRows = Math.ceil(React.Children.count(props.children) / props.columns);

    const rows = new Array(numberOfRows)
        .fill('auto')
        .join(props.gap ? ` ${props.gap} ` : ' ');

    const style = {
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        msGridColumns: columns,
        msGridRows: rows
    };

    const numberOfMissingElementsInTheLastRow = props.columns % (React.Children.count(props.children)% props.columns);

    const adjust = Math.ceil(numberOfMissingElementsInTheLastRow/ 2);

    const placedChildren = React.Children.map(elements, (child: React.ReactElement, index: number) => {
        const rawRow = Math.floor(index / props.columns) + 1;
        const rawColumn = (index % props.columns) + 1;
        let childStyle;

        if(rawRow === numberOfRows && numberOfMissingElementsInTheLastRow > 0) {
            childStyle = {gridColumn: rawColumn + adjust, msGridColumn: rawColumn + adjust, gridRow: rawRow , msGridRow: rawColumn}
        } else {
            childStyle  = {gridColumn: rawColumn, msGridColumn: rawColumn, gridRow: rawRow, msGridRow: rawColumn};
        }

        return React.cloneElement(child, {style: Object.assign({}, child.props.style, childStyle)});
    });

    return (
        <div className={styles.grid} style={style}>
            {placedChildren}
        </div>
    );
}

export default Grid;