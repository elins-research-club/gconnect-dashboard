import { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";

function KetinggianAirGraph({ id, ketinggianAirData = 0 }) {
    const [lastKetinggianAir, setLastKetinggianAir] = useState(ketinggianAirData);

    useEffect(() => {
        const initTime = new Date();
        const data = [
            {
                x: [initTime],
                y: [lastKetinggianAir],
                mode: 'lines',
                line: { 
                    color: '#4B5563',
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
                type: "ketinggian air"
            },
        };

        Plotly.newPlot(id, data, layout);

        return () => Plotly.purge(id);

    }, [id]); 

    useEffect(() => {
        const time = new Date();

        const update = {
            x: [[time]],
            y: [[ketinggianAirData]],
        };

        const olderTime = time.setSeconds(time.getSeconds() - 60);
        const futureTime = time.setSeconds(time.getSeconds() + 60);

        const minuteView = {
            xaxis: {
                range: [olderTime, futureTime],
            },
            yaxis: {
                title: "meter"
            }
        };

        Plotly.extendTraces(id, update, [0]);
        Plotly.relayout(id, minuteView);

    }, [ketinggianAirData, id]); 

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div id={id} />
        </div>
    );
}

export default KetinggianAirGraph;
