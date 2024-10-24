import { useEffect } from "react";
import Plotly from "plotly.js-dist";

function KetinggianAirGraph({ id, ketinggianData = 0 }) {

    useEffect(() => {
        const initTime = new Date();
        const data = [
            {
                x: [initTime],
                y: [ketinggianData],
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
                title: "meter",
                range: [0, 10] 
            },
        };

        Plotly.newPlot(id, data, layout);

        return () => Plotly.purge(id);
    }, [id]);

    useEffect(() => {
        const time = new Date();

        const update = {
            x: [[time]],
            y: [[ketinggianData]],
        };

        const olderTime = new Date(time.getTime() - 60000); 
        const futureTime = new Date(time.getTime() + 60000); 

        const minuteView = {
            xaxis: {
                range: [olderTime, futureTime],
            },
        };

        Plotly.extendTraces(id, update, [0]); 
        Plotly.relayout(id, minuteView); 
    }, [ketinggianData, id]); // Only update when `ketinggianData` changes

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div id={id} />
        </div>
    );
}

export default KetinggianAirGraph;
