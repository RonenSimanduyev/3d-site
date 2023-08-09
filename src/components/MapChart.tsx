import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

export const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-41.0, -35.0, 0],
                center: [-5, -3],
                scale: 2000
            }}
        >
            <Geographies
                geography="/features.json"
                fill="#2c065d"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[34.578, 31.227]}
                dx={-60}
                dy={30}
                connectorProps={{
                    stroke: "#da4ea2",
                    strokeWidth: 4,
                    strokeLinecap: "round"
                }}
            >
                <text className="text-3xl" x="-8" textAnchor="end" alignmentBaseline="middle" fill="#da4ea2">
                    {"Israel Ofakim"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};