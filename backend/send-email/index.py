import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту info@tpglobal.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    raw = event.get('body', '{}')
    body = raw if isinstance(raw, dict) else json.loads(raw or '{}')
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все поля'}, ensure_ascii=False)
        }

    smtp_host = os.environ['SMTP_HOST']
    smtp_port = int(os.environ['SMTP_PORT'])
    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'info@tpglobal.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #1a1a2e; padding: 24px;">
      <h2 style="color: #1255cc;">📩 Новая заявка с сайта TARGET PROM GLOBAL</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px 12px; background:#f0f4ff; font-weight:bold; width:120px;">Имя</td>
            <td style="padding: 8px 12px; border-bottom:1px solid #dde;">{name}</td></tr>
        <tr><td style="padding: 8px 12px; background:#f0f4ff; font-weight:bold;">Email</td>
            <td style="padding: 8px 12px; border-bottom:1px solid #dde;"><a href="mailto:{email}">{email}</a></td></tr>
        <tr><td style="padding: 8px 12px; background:#f0f4ff; font-weight:bold; vertical-align:top;">Сообщение</td>
            <td style="padding: 8px 12px;">{message}</td></tr>
      </table>
      <p style="color:#888; font-size:12px; margin-top:24px;">Отправлено с сайта tpglobal.ru</p>
    </body></html>
    """

    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }