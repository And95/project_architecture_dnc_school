import { useContext, useMemo, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import Button from '../Button/Button'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const appContext = useContext(AppContext)
  const [isFormValid, setIsFormValid] = useState(false)
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  console.log("APP: ", appContext)

  useMemo(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const isValid = 
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.message.trim()

    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      setFormSubmitLoading(true)
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...formData, access_key: '9754f4a0-4cb4-48cb-b9c9-50e5d5867bc3'}),
        })

        if (response.ok) {
          setFormSubmitted(true)
        } else {
          alert(appContext.languages[appContext.language].general.error)
          console.error('Form response: ', response.statusText)
        }
      } catch (e) {
          console.error('Form error: ', e)
          alert(appContext.languages[appContext.language].general.error)
        } finally {
        setFormSubmitLoading(false)
      }
    }
  }

  return (
    <div className="container">
      <div className="contact-form d-flex fd-column al-center">
        <h2>{appContext.languages[appContext.language].contact.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="d-flex form-group">
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder={appContext.languages[appContext.language].contact.pl1}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder={appContext.languages[appContext.language].contact.pl2}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex form-group">
            <textarea
              className="form-input"
              id="message"
              name="message"
              placeholder={appContext.languages[appContext.language].contact.pl3}
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <div className="al-center d-flex jc-end form-group">
              {formSubmitted && <p className="primary-color">{appContext.languages[appContext.language].contact.successMsg}</p>}
              <Button type="submit" buttonStyle="primary" disabled={!isFormValid || formSubmitted || formSubmitLoading} loading={formSubmitLoading}>
                  {appContext.languages[appContext.language].general.send}
              </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
