import React from 'react';
import { Table } from 'reactstrap';

function AboutTable() {
    return (
        <Table borderless>
            <tbody>
                <th>
                    <tr>
                        <th scope="row"></th>
                        <td>Revenues below 50 million.</td>
                    </tr>
                </th>
                <th>
                    <tr>
                        <th scope="row"></th>
                        <td>Operating Income: ~ $2 million - $7 million</td>
                    </tr>
                </th>
                <th>
                    <tr>
                        <th scope="row"></th>
                        <td>No minimum for add-ons to existing portfolio companies.</td>
                    </tr>
                </th>
            </tbody>
        </Table>
    )
}
export default AboutTable;
