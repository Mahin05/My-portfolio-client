import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const Result = () => {
        return(
            <p className='text-2xl text-white mt-3'>Your email has been successfully sent! I will contact you soon. Good Luck.</p>
        )
    }
    let messages = 'Done'
    const [result,showResult]= useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sva12ve', 'template_xtuo1pm', e.target, 'ljA-iboKCTbgPI3z3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            showResult(true);
    };
    setTimeout(() => {
        showResult(false);
    },5000)
    return (
        <form id='contact' action='' onSubmit={sendEmail}>
            <div className='py-14 contact-form-bg-set'>
                <div className='text-center pb-14 text-white'>
                    <p className='text-xl text-white font-bold bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                        Contact Form
                    </p>
                    <h1 className='text-4xl text-white'>Stay connected with Me</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        style={{ 'width': '80%' }}
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        className='input w-full max-w-md'
                    />
                    <input
                        style={{ 'width': '80%' }}
                        type='text'
                        name='phone'
                        placeholder='Phone Number'
                        className='input w-full max-w-md'
                    />
                    <input
                        style={{ 'width': '80%' }}
                        type='text'
                        name='email'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        style={{ 'width': '80%' }}
                        className='textarea w-full max-w-md'
                        name='message'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button style={{'padding':'20px 40px'}} class="btn btn-outline bg-white">Send</button>
                </div>
                <div>{ result ? <Result/> : null}</div>
            </div>
        </form>
    );
};

export default Contact;