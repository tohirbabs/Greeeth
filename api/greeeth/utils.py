from django.core.mail import EmailMessage

from django.conf import settings
from sendy import gmail_send_message


def send_email(email, token, em_type):
    if em_type=="reset":    


        subject="Password Reset Token"
        t_messange = "Reset Your Password"



    else:
        subject="Account Activation Token"
        t_messange = "Activate Your Account"


    
    gmail_send_message(subject=subject,
                            body=f"Use the code to {t_messange} \n {token}",
                        recepient=[email])



