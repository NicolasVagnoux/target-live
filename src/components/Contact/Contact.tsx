'use client';
import React, { useEffect, useMemo } from 'react';
import './contact.scss';
import { useForm } from 'react-hook-form';
import { useForm as useFormSpree } from '@formspree/react';

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
    return 'Envoyer';
  }, [state]);

  const onSubmit = async (data: FormValues) => {
    await sendToFormspree(data);
  };
  //

  return (
    <div className='section'>
    <section className='contact container' id='contact'>
      <h1>Contactez-nous !</h1>

      <form onSubmit={handleSubmit(onSubmit)} className=''>
        {/* Nom */}
        <div className='contact__form__name'>
          <label>Nom</label>
          <input
            type='text'
            {...register('name', { required: 'Le nom est requis.' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className='contact__form__email'>
          <label>Email</label>
          <input
            type='email'
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
          <label>Message</label>
          <textarea
            {...register('message', {
              required: 'Le message est requis.',
            })}
            rows={4}
            autoComplete={''}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <button
          type='submit'
          disabled={state.submitting || state.succeeded}
          className=''
        >
          {buttonMessage}
        </button>
      </form>
    </section>
    </div>
  );
};

export default Contact;
