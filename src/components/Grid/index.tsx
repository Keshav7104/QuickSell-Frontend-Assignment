import React, { useMemo, useEffect,useState } from 'react';
import './grid.css'
import Column from '../Column/Column';
import { Ticket, User } from '../../interfaces';

function Grid({ gridData, grouping, userIdToData }: { gridData: Record<string, Ticket[]>, grouping: string, userIdToData: Record<string, User> }) {
    const keys: string[] = useMemo(() => Object.keys(gridData), [gridData]);
    const [animate, setanimate] = useState(false);
    useEffect(()=>{
        setanimate(false);
        const timer = setTimeout(() => {
            setanimate(true);
        }, 50);
        return ()=> clearTimeout(timer);
    },[gridData]);
    return (
        <div className='grid'>
            {keys.map((k: string,index:number) => (
                <div key={k} style={{animationDelay : `${index * 0.2}s`}} className={`cols ${animate ? 'animate':''}`}>
                    <Column tickets={gridData[k] as Ticket[]} grouping={grouping} groupBy={k} userIdToData={userIdToData} />
                </div>
            ))}
        </div>
    );
}

export default Grid;
