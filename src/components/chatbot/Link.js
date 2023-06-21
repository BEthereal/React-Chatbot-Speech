import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Link = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Useful Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.healthit.gov/faq/what-electronic-health-record-ehr"
                target="_blank"
              >
                More Information On EHR
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.healthit.gov/faq/what-are-advantages-electronic-health-records"
                target="_blank"
              >
                EHR And Its Benefits
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://digital.ahrq.gov/electronic-medical-record-systems"
                target="_blank"
              >
                Information On EMR
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.healthit.gov/buzz-blog/electronic-health-and-medical-records/emr-vs-ehr-difference"
                target="_blank"
              >
                EHR vs EMR
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://main.mohfw.gov.in/"
                target="_blank"
              >
                Online Services Provided By The Indian Government
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}



export default Link
