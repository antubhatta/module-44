import { LineChart, Line, XAxis,YAxis, Tooltip} from 'recharts';
import { BarChart, Bar} from 'recharts';

const NumberCharts = () => {
    const studentMarks = [
        { student: 'Student 1', math: 85, physics: 78, chemistry: 90 },
        { student: 'Student 2', math: 92, physics: 85, chemistry: 88 },
        { student: 'Student 3', math: 78, physics: 75, chemistry: 80 },
        { student: 'Student 4', math: 88, physics: 82, chemistry: 86 },
        { student: 'Student 5', math: 95, physics: 88, chemistry: 92 },
        { student: 'Student 6', math: 90, physics: 85, chemistry: 89 },
        { student: 'Student 7', math: 82, physics: 76, chemistry: 84 },
        { student: 'Student 8', math: 79, physics: 74, chemistry: 81 },
        { student: 'Student 9', math: 87, physics: 80, chemistry: 88 },
        { student: 'Student 10', math: 93, physics: 86, chemistry: 91 },
      ];
    return (
        <div>
            <LineChart width={400} height={400} data={studentMarks}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke="red" />
            <Line dataKey="physics" stroke="green" />
            <Line dataKey="chemistry" stroke="blue" />
            </LineChart>

            <BarChart width={500} height={400} data={studentMarks}>
                
            <Bar dataKey="math" fill="#8884d8"></Bar>
            
            
            </BarChart>
        </div>
    );
};

export default NumberCharts;