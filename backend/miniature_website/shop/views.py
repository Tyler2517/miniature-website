# backend/miniature_website/shop/views.py
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

@api_view(['POST'])
@csrf_exempt
def send_email_view(request):
    data = request.data
    subject = f"Contact Form Submission from {data.get('name') + ' ' + data.get('phone')}"
    body = data.get('message')  # Extract the message field for the body
    to = 'tylersora@gmail.com'  # Use your email address here
    from_email = data.get('email')

    # Use Django's send_mail function
    send_mail(
        subject,
        body,
        from_email,  # From email
        [to],  # To email
    )
    return Response({'message': 'Email sent successfully!'})