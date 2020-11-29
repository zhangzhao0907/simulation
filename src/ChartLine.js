import React from "react";
import {Chart, Line, Point, Tooltip, Axis, LineAdvance} from "bizcharts"

const data = [
	{
		x: "01",
		value: 3,
	},
	{
		x: "02",
		value: 4,
	},
	{
		x: "03",
		value: 3.5,
	},
	{
		x: "04",
		value: 5,
	},
	{
		x: "05",
		value: 4.9,
	},
	{
		x: "06",
		value: 6,
	},
	{
		x: "07",
		value: 7,
	},
	{
		x: "08",
		value: 9,
	},
	{
		x: "10",
		value: 13,
	},
	{
		x: "11",
		value: 6,
	},
	{
		x: "12",
		value: 5,
	},
	{
		x: "13",
		value: 4,
	},
	{
		x: "14",
		value: 5,
	},
];

function ChartLine() {
	return (
		<Chart
			padding={[20, 20, 50, 50]}
			autoFit
			height={320}
			data={data}
			scale={{ value: { min: 0 } }}
		>
			<LineAdvance area position="x*value"/>
			<Point position="x*value" />
			<Tooltip showCrosshairs shared />
			<Axis name='value' title={{position: 'center'}} />
		</Chart>
	);
}

export default ChartLine;