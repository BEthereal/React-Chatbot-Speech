import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Help = () => {
  return (
    <Jumbotron>
      <h3>About Electronic health records (EHRs)</h3>
      <span>
      Electronic health records (EHRs) are digital versions of a patient's medical record that are stored in a computer system or electronic database. EHRs contain a patient's medical history, diagnoses, treatments, medications, lab results, imaging studies, and other health information that healthcare providers need to provide care.
      EHRs are designed to be accessed by healthcare providers, including doctors, nurses, and specialists, in order to provide coordinated care to patients. They can be accessed through secure online portals, electronic health record systems, or through a patient's healthcare provider. EHRs can also be used for population health management, research, and quality improvement initiatives.
      EHRs can help improve the quality and safety of healthcare by providing healthcare providers with up-to-date and accurate information about a patient's health status. EHRs can also help reduce medical errors and improve patient outcomes by enabling healthcare providers to quickly and easily access relevant health information. Additionally, EHRs can help reduce healthcare costs by streamlining administrative tasks and reducing duplicate testing and treatments.
      </span>
      <div className="mt-5">
        <h3>Help</h3>
        <ul>
          <li>Accessing records: How to access your records online.</li>
          <li>Updating info: How to update your health information.</li>
          <li>Protecting privacy: Tips for protecting your privacy.</li>
          <li>Requesting changes: How to request changes to your record.</li>
          <li>Reporting errors: How to report any errors or discrepancies.</li>
          <li>Sharing info: How to share your record with others.</li>
          <li>Troubleshooting: Tips for common issues.</li>
          <li>Contacting support: How to get help if you need it.</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3>Contact</h3>
        <p> Fax: +91-281-2224258</p>
        <p>
          {' '}
          E-Mail:<a href="mailto:mc_ehr@yahoo.co.in"> mc_ehr@rmc.gov.in</a>{' '}
        </p>
        <p>
          {' '}
          Website:{' '}
          <a href="https://www.nhp.gov.in/">
            {' '}
            www.nhp.gov.in
          </a>
        </p>
      </div>
    </Jumbotron>
  )
}

export default Help
