
const quickEmail = () => {

    const emailMe = document.getElementById('email-me');
    const span = document.getElementById('span-email-me');
    const emailWindow = document.getElementById('email-window');
    const sendButton = document.getElementById('submit-email');
    const backgroundBlur = document.getElementById('background-blur');

    const sendMail = () => {
        const info = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        }
        emailjs.send("service_6a1lsn8", "template_rs0uh0i", info)
            .then(() => {
                alert("Message sent successfully!");
            }, (error) => {
                alert("Failed to send email: " + error.text);
            });
    }

    const resetForm = () => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }

    const autoReply = () => {
        const autoReplyInfo = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
        }
        emailjs.send("service_6a1lsn8", "template_9rp089a", autoReplyInfo)
            .then(() => {
                console.log("Auto-reply sent successfully!");
            }, (error) => {
                console.error("Failed to send auto-reply: " + error.text);
            });
    }

    emailMe.addEventListener('mouseenter', () => {
        emailMe.style.transform = 'scale(1.1)';
        emailMe.style.opacity = '1';
        span.style.display = 'block';
    });

    emailMe.addEventListener('mouseleave', () => {
        emailMe.style.transform = 'scale(1)';
        emailMe.style.opacity = '0.75';
        span.style.display = 'none';
    });

    emailMe.addEventListener('click', () => {
        if (emailWindow.style.display === 'none' || emailWindow.style.display === '') {
            
            emailWindow.style.display = 'flex';
            backgroundBlur.style.display = 'block';

            // Pop up and Fade in
            emailWindow.animate([
                { transform: 'translate(-50%, -40%) scale(0.9)', opacity: 0 },
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
            ], { duration: 300, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' });

            // Fade in
            backgroundBlur.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 }); 
        } else {

            const closeAnim = emailWindow.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: 'translate(-50%, -45%) scale(0.95)', opacity: 0 }
            ], { duration: 200, easing: 'ease-in' });

            backgroundBlur.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200 });

            closeAnim.finished.then(() => {
                emailWindow.style.display = 'none';
                backgroundBlur.style.display = 'none';
            });
        }
    });

    sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        sendMail();
        autoReply();
        resetForm();
    });

    backgroundBlur.addEventListener('mouseenter', () => {
        backgroundBlur.style.backdropFilter = 'blur(0px)';
    });

    backgroundBlur.addEventListener('mouseleave', () => {
        backgroundBlur.style.backdropFilter = 'blur(5px)';
    });

    backgroundBlur.addEventListener('click', () => {
        emailWindow.style.display = 'none';
        backgroundBlur.style.display = 'none';
    });

};

export default quickEmail;