'use client'
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";
const ReadBooks = () => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "black",
  ];

  const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
  };

  const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};


// #region Sample data

const {readBooks} = useContext(BooksContext)

console.log(readBooks);





const data = readBooks.map((book : IBook, index : number) => {
    return {
        name: book.bookName,
        uv: book.totalPages,
        pv: index + 1,
        amt: index +1
    }
})

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};



  return (
    <div className="container mx-auto my-10 flex justify-center">
      {
        data.length>0? <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
          textAlign: 'center'
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <Tooltip cursor={{ fillOpacity: 0.5 }} />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Bar dataKey="uv" shape={TriangleBar} activeBar>
          <LabelList content={CustomColorLabel} position="top" />
        </Bar>
        {/* <RechartsDevtool /> */}
      </BarChart>: <p className="text-center my-10 font-bold">No read books to Display. </p>
      }
    </div>
  );
};

export default ReadBooks;