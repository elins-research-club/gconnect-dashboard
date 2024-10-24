import { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";

function KelembabanGraph({ id, kelembabanData = 0 }) {
    const [lastKelembaban, setLastKelembaban] = useState(kelembabanData);

    useEffect(() => {
        const initTime = new Date();
        const data = [
            {
                x: [initTime],
                y: [lastKelembaban],
                mode: 'lines',
                line: { 
                    color: '#4B5563' ,
                    shape: 'spline'
                },
            },
        ];

        const layout = {
            autosize: true,
            margin: {
                l: 32,
                r: 0,
                b: 20,
                t: 0,
                pad: 0,
            },
            width: 472,
            height: 128, 
            xaxis: {
                type: "time"
            },
            yaxis: {
                type: "kelembaban",
                title: "persen (%)",
                range: [0, 100]
            },
        };

        Plotly.newPlot(id, data, layout);

        return () => Plotly.purge(id); // Clean up when component unmounts

    }, [id]);  // Only runs when `id` changes

    useEffect(() => {
        const time = new Date();

        const update = {
            x: [[time]],
            y: [[kelembabanData]],
        };

        const olderTime = time.setSeconds(time.getSeconds() - 60);
        const futureTime = time.setSeconds(time.getSeconds() + 60);

        const minuteView = {
            xaxis: {
                range: [olderTime, futureTime],
            },
        };

        Plotly.extendTraces(id, update, [0]);
        Plotly.relayout(id, minuteView);

    }, [kelembabanData, id]); 

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div id={id} />
        </div>
    );
}

export default KelembabanGraph;
