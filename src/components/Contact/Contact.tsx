'use client';
import React, { useEffect, useMemo } from 'react';
import './contact.scss';
import { useForm } from 'react-hook-form';
import { useForm as useFormSpree } from '@formspree/react';
import Section from '../Section/Section';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  // Formspree logic
  const [state, sendToFormspree] = useFormSpree(
    process.env.NEXT_PUBLIC_FORMSPREE_ID as string
  );

  useEffect(() => {
    if (state.succeeded) {
      reset();
    }
  }, [state.succeeded, reset]);

  const buttonMessage = useMemo(() => {
    if (state.submitting) return 'Envoi...';
    if (state.succeeded) return 'Message envoyé !';
    if (state.errors) return 'Erreur :(';
    return 'Contactez-nous';
  }, [state]);

  const onSubmit = async (data: FormValues) => {
    await sendToFormspree(data);
  };
  //

  return (
    <Section color='black'>
      <section className='contact container' id='contact'>
        <div className='contact__columns'>
          <div className='contact__title'>
            <h1>Contactez-nous !</h1>
            <p>
              Vous souhaitez organiser un concert ou collaborer avec nous ?{' '}
              <br />
              Le collectif est ouvert aux propositions et aux bonnes idées.
              <br />
              Laissez-vous un message, on vous répond vite !
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='contact__form'>
            {/* Nom */}
            <div className='contact__form__name'>
              <input
                type='text'
                placeholder='Votre nom'
                {...register('name', { required: 'Le nom est requis.' })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className='contact__form__email'>
              <input
                type='email'
                placeholder='Votre email'
                {...register('email', {
                  required: "L'email est requis.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Adresse email invalide.',
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div className='contact__form__message'>
              <textarea
                {...register('message', {
                  required: 'Le message est requis.',
                })}
                placeholder='Votre message'
                rows={4}
                autoComplete={''}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>

            <button
              type='submit'
              disabled={state.submitting || state.succeeded}
              className={state.submitting || state.succeeded ? 'disabled' : ''}
            >
              {!state.errors &&
                !state.result &&
                !state.submitting &&
                !state.succeeded && (
                  <img src='./assets/right_arrow.svg' alt='' />
                )}
              {buttonMessage}
            </button>
          </form>
        </div>
      </section>
    </Section>
  );
};

export default Contact;
