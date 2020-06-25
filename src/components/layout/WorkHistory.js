import React, { Fragment } from 'react';
import Table from 'reactstrap';

function WorkHistory() {
    return(
        <Table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">InZone Holdings Inc.</th>
            <td>CEO/Chairman</td>
            <td>1997</td>
            <td>Present</td>
          </tr>
          <tr>
            <th scope="row">Alpha Products</th>
            <td>CEO</td>
            <td>1982</td>
            <td>1994 (Sold to Aladdin Industries)</td>
          </tr>
          <tr>
            <th scope="row">Bulldog Movers</th>
            <td>CEO</td>
            <td>1982</td>
            <td>1989 (Sold to management)</td>
          </tr>
        </tbody>
      </Table>
    )
}
export default WorkHistory;