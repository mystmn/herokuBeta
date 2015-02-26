"""
Flask Documentation:     http://flask.pocoo.org/docs/
Jinja2 Documentation:    http://jinja.pocoo.org/2/documentation/
Werkzeug Documentation:  http://werkzeug.pocoo.org/documentation/

This file creates your application.
"""

import os
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_wtf import Form
from wtforms import StringField, validators, TextAreaField
#from flask_debugtoolbar import DebugToolbarExtension

''' Add-On for Heroku email sending API '''
import sendgrid
sg = sendgrid.SendGridClient('pcameron5', 'send.pepper62')

app = Flask(__name__)

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'x6dgbjldprk3lm52')

''' Change to False when Environment goes to Production'''
#app.debug = False
#toolbar = DebugToolbarExtension(app)

class MyForm(Form):
    name = StringField("Name", [validators.Required("Please Enter your name")])
    email = StringField("Email", [validators.Required("Please Enter your email"), validators.Email("Emails not valid")])
    subject = StringField("Subject", [validators.Required("Please Enter a Subject")])
    message = TextAreaField("Message", [validators.Required("Please Enter Message")])

###
# Routing for your application.
###

@app.route('/')
def home():
    """Render website's home page."""
    title = "Home"
    return render_template('home.html', title=title)

@app.route('/what-we-do')
def about():
    title = "What We Do"
    """Render the website's about page."""
    return render_template('what.html', title=title)

@app.route('/who-are-we')
def team():
    title = "About Us"
    """Render the website's about page."""
    return render_template('who.html', title=title)

@app.route('/services')
def services():
    title = "Services"
    """Render the website's about page."""
    return render_template('services.html', title=title)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = MyForm()
    title = "Contact Us"
    if request.method == 'POST':
        if not form.validate():
            return render_template('contact.html', form=form, title=title, posted_redirect=False)
        else:
            message=sendgrid.Mail()
            message.add_to("ufr.server@gmail.com")
            message.set_from("ufr.server@gmail.com")
            message.set_subject("Sending with SendGrid is Fun")
            mes_con="<p>Person of Interest: %s</p><p>Email: %s</p><p>Subject: %s</p><p>Message: %s</p>" % (form.name.data, form.email.data, form.subject.data, form.message.data)
            message.set_html(mes_con)
            sg.send(message)

            return redirect(url_for('successful'))

    elif request.method == 'GET':
        return render_template('contact.html', form=form, title=title)

@app.route('/successful', methods=['GET'])
def successful():
    return render_template('successful.html', posted_redirect=True)

###
# The functions below should be applicable to all Flask apps.
###

@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=600'
    return response


@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)
