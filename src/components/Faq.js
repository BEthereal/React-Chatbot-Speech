import React from 'react'
import Faq from 'react-faq-component'
import { Container, Jumbotron } from 'react-bootstrap'

const data = {
  title: 'FAQs About Electronic Health Records (EHR)',
  rows: [
    {
      title: ' What is an electronic health record (EHR)?',
      content: `An electronic health record is a digital record of a patient's health information, including medical history, diagnoses, medications, and treatment plans.`,
    },
    {
      title:'Why are electronic health records important?',
      content: ` Electronic health records can improve the quality of healthcare by providing healthcare professionals with easy and timely access to patient information, reducing errors and duplications, and improving communication between healthcare providers.`,
    },
    {
      title: 'Who has access to electronic health records?How to get Birth and Death Certificate in English?',
      content: ` Only authorized healthcare professionals and organizations, such as doctors, nurses, and hospitals, have access to electronic health records. Patients can also access their own health records through patient portals.`,
    },
    {
      title: 'Are electronic health records secure?',
      content: `Yes, electronic health records are designed to be secure and comply with privacy laws and regulations, such as the Health Insurance Portability and Accountability Act (HIPAA). Healthcare organizations are responsible for protecting the privacy and security of patient health information.`,
    },
    {
      title:'Can electronic health records be shared between different healthcare providers?',
      content: `Yes, electronic health records can be shared between different healthcare providers, such as hospitals, clinics, and pharmacies. This can improve the coordination of care and reduce the risk of errors or duplications.`,
    },
    {
      title: 'Can patients make updates to their electronic health records?',
      content: `Some electronic health record systems allow patients to update their personal information, such as contact details, but patients generally cannot update medical information. Patients can, however, request updates or corrections to their medical information.`,
    },
  ],
  title: 'FAQs About Electronic Medical Records (EMR)',
  rows: [
    {
      title: 'What is an electronic medical record (EMR)?',
      content: `An electronic medical record is a digital record of a patient's medical history, diagnoses, medications, and treatment plans, created and stored by a single healthcare organization.`,
    },
    {
      title:
        'How is an EMR different from an EHR?',
      content: ` An EMR is a digital record of a patient's medical information created and stored by a single healthcare organization, while an EHR is a digital record of a patient's health information that can be shared between different healthcare organizations.Within a 15 days after submitting the application.`,
    },
    {
      title: 'Why are electronic medical records important?',
      content: `Electronic medical records can improve the quality of healthcare by providing healthcare professionals with easy and timely access to patient information, reducing errors and duplications, and improving communication between healthcare providers.`,
    },
    {
      title: 'Can patients access their electronic medical records?',
      content: `In most cases, patients can access their electronic medical records through patient portals provided by their healthcare organization. However, patients may not be able to access their complete medical record, as some information may be restricted due to privacy concerns.`,
    },
    {
      title:'How are electronic medical records stored and protected',
      content: `Electronic medical records are stored on secure servers and protected by encryption, firewalls, and other security measures. Healthcare organizations are responsible for protecting the privacy and security of patient medical information.`,
    },
    {
      title: 'Can healthcare providers share electronic medical records with each other?',
      content: ` In some cases, healthcare providers can share electronic medical records with each other through health information exchange networks or other secure methods. However, this may require patient consent and compliance with privacy laws and regulations.`,
    },
  ],
}

const styles = {
  bgColor: '#303030',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'white',
  arrowColor: 'white',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '10px',
}

const config = {
  animate: true,
  arrowIcon: 'v',
  // tabFocus: true,
}

const faq = () => {
  return (
    <Container>
      <Jumbotron>
        <Faq data={data} styles={styles} config={config} />
      </Jumbotron>
    </Container>
  )
}

export default faq
