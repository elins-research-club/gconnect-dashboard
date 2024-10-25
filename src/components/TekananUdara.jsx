import { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";

function TekananUdara({ id, tekananUdaraData = 0 }) {
    const [lastTekananUdara, setLastTekananUdara] = useState(tekananUdaraData);

    useEffect(() => {
        const initTime = new Date();
        const data = [
            {
                // x: [initTime],
                // y: [lastTekananUdara],
                // mode: 'lines',
                // line: { 
                //     color: '#4B5563',
                //     shape: 'spline'
                // },


                type: 'indicator',
                mode: 'gauge+number',
                value: [lastTekananUdara],
                title: { text: 'Temperature (°C)', font: { size: 24 } },
                gauge: {
                  axis: { range: [-10, 40], tickwidth: 1, tickcolor: "darkblue" },
                  bar: { color: "darkblue" },
                  bgcolor: "white",
                  borderwidth: 2,
                  bordercolor: "gray",
                  steps: [
                    { range: [-10, 0], color: 'cyan' },
                    { range: [0, 15], color: 'royalblue' },
                    { range: [15, 25], color: 'lime' },
                    { range: [25, 35], color: 'yellow' },
                    { range: [35, 40], color: 'red' },
                  ],
                },
            },
        ];


        const layout = {
            width: 300,
            height: 250,
            margin: {
                t: 0,
                b: 0
            },

            // autosize: true,
            // margin: {
            //     l: 32,
            //     r: 0,
            //     b: 20,
            //     t: 0,
            //     pad: 0,
            // },
            // width: 472,
            // height: 128, 
            // xaxis: {
            //     type: "time"
            // },
            // yaxis: {
            //     type: "kecepatan angin"
            // },
        };

        Plotly.newPlot(id, data, layout);

        return () => Plotly.purge(id); // Clean up when component unmounts

    }, [id]);  // Only runs when `id` changes

    useEffect(() => {
        const time = new Date();

        const update = {
            x: [[time]],
            y: [[tekananUdaraData]],
        };

        const olderTime = time.setSeconds(time.getSeconds() - 60);
        const futureTime = time.setSeconds(time.getSeconds() + 60);

        const minuteView = {
            xaxis: {
                range: [olderTime, futureTime],
            },
            yaxis: {
                title: "km/jam"
            }
        };

        Plotly.extendTraces(id, update, [0]);
        Plotly.relayout(id, minuteView);

    }, [tekananUdaraData, id]); 

    return (
        <div className="p-0 w-full h-full col-span-5 overflow-hidden">
            <div id={id} />
        </div>
    );
}

export default TekananUdara;
