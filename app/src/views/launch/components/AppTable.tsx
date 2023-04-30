import {FC} from "react";

export const AppTable: FC = ({ }) => {
    const data = [
        {
            app: 'App A',
            installs: 1200,
            appStatus: 'Active',
            updateStatus: 'Up to date',
            lastUpdated: '2023-04-24',
        },
        {
            app: 'App B',
            installs: 500,
            appStatus: 'Inactive',
            updateStatus: 'Pending',
            lastUpdated: '2023-04-22',
        },
        {
            app: 'App C',
            installs: 3000,
            appStatus: 'Active',
            updateStatus: 'Up to date',
            lastUpdated: '2023-04-21',
        },
    ];

    return (
        <div>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.header}>App</th>
                    <th style={styles.header}>Installs</th>
                    <th style={styles.header}>App Status</th>
                    <th style={styles.header}>Update Status</th>
                    <th style={styles.header}>Last Updated</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index} style={styles.row}>
                        <td style={styles.cell}>{row.app}</td>
                        <td style={styles.cell}>{row.installs}</td>
                        <td style={styles.cell}>{row.appStatus}</td>
                        <td style={styles.cell}>{row.updateStatus}</td>
                        <td style={styles.cell}>{row.lastUpdated}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const styles: any = {
    table: {
        borderCollapse: 'separate',
        borderSpacing: 0,
        borderRadius: '10px 0px 10px 10px', // Adjusted borderRadius to target only the top-right corner
        overflow: 'hidden',
        width: '100%',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    },
    header: {
        padding: '12px 15px',
        backgroundColor: '#f5f5f5',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#333', // Text color for table headers
    },
    row: {
        borderBottom: '1px solid #eee',
    },
    cell: {
        padding: '12px 15px',
        color: '#FFFFFF', // Text color for table cells
    },
};
