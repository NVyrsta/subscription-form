import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import './contact-form.scss'
import emailjs from 'emailjs-com'

const USER_ID = 'qVenSVyTLlLVAmyAO'
const SERVICE_ID = 'service_6pxgkio'
const TEMPLATE_ID = 'template_eza8cnr'

emailjs.init(USER_ID)

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Поле имени и фамилии является обязательным'),
  email: Yup.string()
    .email('Неправильный формат почты')
    .required('Поле почты является обязательным'),
  phone: Yup.string()
    .test('phone', 'Неправильный формат номера телефона', (value) => {
      const phoneNumber = value.replace(/[^\d+]/g, '')
      const country = 'UA'
      return isValidPhoneNumber(phoneNumber, country)
    })
    .required('Поле номера телефона является обязательным')
})

const ContactForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: ''
  }

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (values, { resetForm }) => {
    const templateParams = {
      from_name: values.fullName,
      message: `Name: ${values.fullName}\nEmail: ${values.email}\nPhone: ${values.phone}`
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setIsSubmitted(true)
        resetForm()

        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <h2 className="form__title">
            Запишитесь <span>бесплатно</span>
            <br />и получите подарок
          </h2>

          <div>
            <label htmlFor="fullName"></label>
            <Field
              className="form__input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Ваше имя и фамилия"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="form__error"
            />
          </div>

          <div>
            <label htmlFor="email"></label>
            <Field
              className="form__input"
              type="email"
              id="email"
              name="email"
              placeholder="Ваш email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="form__error"
            />
          </div>

          <div>
            <label htmlFor="phone"></label>
            <Field name="phone">
              {({ field, form }) => (
                <PhoneInput
                  {...field}
                  id="phone"
                  name="phone"
                  placeholder="Ваш номер телефона"
                  onChange={(value) => form.setFieldValue('phone', value)}
                  defaultCountry="UA"
                />
              )}
            </Field>
            <ErrorMessage
              name="phone"
              component="div"
              className="form__error"
            />
          </div>

          <button className="form__btn" type="submit" disabled={isSubmitting}>
            Записаться бесплатно
          </button>

          <span className="form__policy">
            Нажимая на кнопку я соглашаюсь
            <br />
            <a href="#">с политикой конфиденциальности</a>
          </span>

          {isSubmitted && (
            <div className="form__success">Ваше сообщение отправлено!</div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
