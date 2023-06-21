import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import Symptoms from './Symptoms'
import '../../App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'ehrbot',
            },
            {
              id: 'ehrbot',
              message:
                'Hi,{previousValue} I am EHR Bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'What are you ?', trigger: '4' },
                { value: 2, label: 'What do you do ?', trigger: '3' },
                { value: 3, label: 'What is your purpose ?', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
                { value: 5, label: 'Check For Symptoms', trigger: '7' },
              ],
            },
            {
              id: '3',
              message:
                "I provide healthcare advice, information, and assistance to help you manage your health and wellness. You can ask me questions and I'll do my best to provide helpful answers.",
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                'I am a healthcare chatbot designed to provide you with information and assistance related to your health and wellness.',
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'The purpose of a healthcare chatbot is to provide users with quick and convenient access to healthcare information and assistance, anytime and anywhere.',
              trigger: 'qtype',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: '7',
              component: <Symptoms />,
              // message:'Being a healthcare chatbot, I can provide you the results based on the datathat I have been trained on to provide you with information and assistance related to your health and wellness.But since my data is limited, I might not always be accurate',
              trigger: 'r-submit',
            },
            {
              id: 'r-submit',
              message:'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'What are you ?', trigger: '4' },
                { value: 2, label: 'What do you do ?', trigger: '3' },
                { value: 3, label: 'What is your purpose ?', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
                { value: 5, label: 'Check For Symptoms', trigger: '7' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
