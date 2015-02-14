"""
Flask Documentation:     http://flask.pocoo.org/docs/
Jinja2 Documentation:    http://jinja.pocoo.org/2/documentation/
Werkzeug Documentation:  http://werkzeug.pocoo.org/documentation/

This file creates your application.
"""
from flask.ext.wtf import Form
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired

class ContactForm(Form):
    name = TextField("Name",  [validators.Required()])
    email = TextField("Email",  [validators.Required(), validators.Email()])
    subject = TextField("Subject",  [validators.Required()])
    message = TextAreaField("Message",  [validators.Required()])
    submit = SubmitField("Send")
