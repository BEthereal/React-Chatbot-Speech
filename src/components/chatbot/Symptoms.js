import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Symptoms = () => {
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
                href="https://www.mayoclinic.org/diseases-conditions/typhoid-fever/symptoms-causes/syc-20378661"
                target="_blank"
              >
                Typhoid
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759"
                target="_blank"
              >
                Fever
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605"
                target="_blank"
              >
                Common Cold
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.mayoclinic.org/diseases-conditions/measles/symptoms-causes/syc-20374857"
                target="_blank"
              >
                Measles
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.mayoclinic.org/diseases-conditions/malaria/symptoms-causes/syc-20351184"
                target="_blank"
              >
                Malaria
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Symptoms