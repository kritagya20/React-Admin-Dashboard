import "./charts.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>

              { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> }
              <XAxis dataKey="name" stroke="#5550bd"/>
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
