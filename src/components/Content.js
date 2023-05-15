import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
function Content() {
  const [histogramData, setHistogramData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.terriblytinytales.com/test.txt"
      );
      const csvData = Papa.parse(response.data).data;
      const randomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
      };
      // get frequency of each word
      const freqMap = new Map();
      csvData.forEach((row) => {
        row[0].split(" ").forEach((word) => {
          if (freqMap.has(word)) {
            freqMap.set(word, freqMap.get(word) + 1);
          } else {
            freqMap.set(word, 1);
          }
        });
      });

      // sort by frequency and get top 20 words
      const sortedFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
      const topWords = sortedFreq.slice(1, 20).map((entry) => ({
        word: entry[0],
        count: entry[1],
        color: randomColor(),
      }));

      setHistogramData(topWords);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExport = () => {
    const csvString = Papa.unparse(histogramData);
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "histogram.csv";
    link.click();
  };

  const chartStyle = {
    margin: "0 auto",
  };

  return (
    <div className="container">
      {!isSubmitted && (
        <>
          {" "}
          <div style={{ textAlign: "center" }}>
            <h1
              style={{ fontSize: "48px", fontWeight: "bold", color: "#F44336" }}
            >
              {" "}
              Project made by
            </h1>
            <h1
              style={{ fontSize: "48px", fontWeight: "bold", color: "#F44336" }}
            >
              {" "}
              Nikhil Kumar Kataria
            </h1>

            <br />
            <br />

            <button onClick={fetchData} style={{ borderRadius: 5 }}>
              Submit
            </button>
          </div>
        </>
      )}
      {histogramData.length > 0 && (
        <div className="chart-container" style={chartStyle}>
          <h1
            style={{ fontSize: "48px", fontWeight: "bold", color: "#F44336" }}
          >
            Histogram of Top 20 Words
          </h1>
          <BarChart
            width={900}
            height={400}
            data={histogramData}
            animationBegin={0}
            animationDuration={1000}
          >
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8">
              {histogramData.map((dataPoint) => (
                <Cell key={dataPoint.word} fill={dataPoint.color} />
              ))}
            </Bar>
          </BarChart>
          <button onClick={handleExport} style={{ borderRadius: 5 }}>
            Export
          </button>
        </div>
      )}
    </div>
  );
}

export default Content;
