import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleSendMessage = () => {
    const confirmation = window.confirm("Are you sure you want to send the message?\n\nDon't forget to include your name and email with your message or feedback.");

    if (confirmation) {
      alert("Initiating Dispatch ✌🏻");
      window.location.href = 'https://api.whatsapp.com/send/?phone=918074588232&text&type=phone_number&app_absent=0';
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3q1s7v', 'template_yf2qcph', form.current, 'DXwopCaIr_rZjjfm3')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Briem+Hand:wght@100..900&family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Marvel:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

                * {
                  font-family: "Marvel", sans-serif;
                  font-weight: 400;
                  font-style: normal;
                }

                body {
                  background-color:black;
                  margin: 0;
                  padding: 0;
                }

                h1 {
                  text-align: center;
                  color: #fca311;
                  margin-top: 20px;
                }

                .glass {
                  background-color: rgba(173, 216, 230, 0.5);
                  width: 50%;
                  margin: 20px auto;
                  border: none;
                  border-radius: 25px;
                  padding: 20px;
                  text-align: center;
                  color: black;
                }

                .formy input, .formy textarea {
                  width: 80%;
                  padding: 15px;
                  line-height: 1.5;
                  border: none;
                  border-radius: 25px;
                  margin-top: 20px;
                  font-family: cursive;
                }

                .formy label {
                  display: block;
                  margin-top: 20px;
                  font-weight: bold;
                  color: white;
                }

                .btn2 {
                  background-color: #000080;
                  color: white;
                  border: none;
                  border-radius: 25px;
                  width: 40%;
                  padding: 15px;
                  margin: 20px auto;
                  cursor: pointer;
                  display: block;
                }

                .btn2:hover {
                  background-color: skyblue;
                }

                .icon {
                  padding: 15px;
                }

                .icon i {
                  margin: 0 10px;
                  font-size: 20px;
                  transition: color 0.3s ease, transform 0.3s ease;
                }

                .fa-linkedin-in { color: blue; }
                .fa-envelope { color: #007bff; }
                .fa-instagram { color: #833ab4; }
                .fa-whatsapp { color: #25d366; }
                .fa-telegram { color: skyblue; }

                .icon i:hover {
                  color: white;
                  transform: scale(1.1);
                }

                @keyframes slideInFromTop {
                  0% {
                    transform: translateY(-100%);
                  }
                  100% {
                    transform: translateY(0);
                  }
                }

                .formy {
                  animation: slideInFromTop 0.5s ease;
                  background-color: rgba(255, 255, 255, 0.1);
                  border-radius: 25px;
                  padding: 20px;
                  margin: 20px auto;
                  width: 50%;
                }

                .tel {
                  text-decoration: none;
                }

                .em {
                  font-weight: bold;
                  color: black;
                }

                .p2 {
                  color: #000080;
                }

                .a1 {
                  text-decoration: none;
                }

                .a1:hover {
                  color: orange;
                }
                /* Styles for mobile devices (up to 600px) */
@media only screen and (max-width: 600px) {
    .glass, .formy {
        width: 90%;
        padding: 15px;
    }

    .formy input, .formy textarea {
        width: 90%;
    }

    .btn2 {
        width: 80%;
        padding: 10px;
    }

    .icon i {
        font-size: 18px;
    }
}

/* Styles for tablets (601px to 768px) */
@media only screen and (min-width: 601px) and (max-width: 768px) {
    .glass, .formy {
        width: 80%;
        padding: 18px;
    }

    .formy input, .formy textarea {
        width: 85%;
    }

    .btn2 {
        width: 60%;
        padding: 12px;
    }

    .icon i {
        font-size: 19px;
    }
}

/* Styles for laptops (769px to 1200px) */
@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .glass, .formy {
        width: 60%;
        padding: 20px;
    }

    .formy input, .formy textarea {
        width: 80%;
    }

    .btn2 {
        width: 50%;
        padding: 15px;
    }

    .icon i {
        font-size: 20px;
    }
}

/* Styles for extra large devices (above 1200px) */
@media only screen and (min-width: 1201px) {
    .glass, .formy {
        width: 50%;
        padding: 20px;
    }

    .formy input, .formy textarea {
        width: 80%;
    }

    .btn2 {
        width: 40%;
        padding: 15px;
    }

    .icon i {
        font-size: 20px;
    }
}
            `}</style>

      <h1>My Contact</h1>
      <div className='glass'>
        <p className='p2'><span className='em'>Email: </span>vallamkondabhargav@gmail.com</p>
        <p className='p2'><span className='em'>Mobile: </span>(+91) 8074588232</p>
        <p className='p2'><span className='em'>Github: </span><a href='https://github.com/bhargavnanicaptain' className='a1'>Git hub</a></p>
      </div>

      <h1>You can also contact me through</h1>
      <center>
        <div className='icon'>
          <a href='https://www.linkedin.com/in/v-t-bhargav-64bb51214/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B880db874-8522-479f-ae40-8b8b42e4ad44'>
            <i className="fa-brands fa-linkedin-in fa-beat"></i>
          </a>
          <a href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AaSxoQyk08wUAujKgtgnQrNCQd3FkYfBMG94C2st5IfYv46IB0XJq9Bvo7dx5IrNjlfN0l23YMXwHA&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S973572982%3A1715699465873356&ddm=0'>
            <i className="fa-regular fa-envelope fa-beat"></i>
          </a>
          <a href='https://www.instagram.com/nani_captainbhargav/#'>
            <i className="fa-brands fa-instagram fa-beat"></i>
          </a>
          <a href='https://api.whatsapp.com/send/?phone=918074588232&text&type=phone_number&app_absent=0'>
            <i className="fa-brands fa-whatsapp fa-beat"></i>
          </a>
          <a href='https://t.me/BHARGAVNANI'>
            <i className="fa-brands fa-telegram fa-beat"></i>
          </a>
        </div>
      </center>
      <center>
        <h1>If you have feedback, please kindly share it here</h1>

        <div className='formy'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className='btn2' />
          </form>
        </div>
      </center>

    </>
  );
};

export default Contact;