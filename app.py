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
from flask.ext.mail import Message, Mail
mail = Mail()

app = Flask(__name__)

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'x6dgbjldprk3lm52')

class MyForm(Form):
    name = StringField("Name", [validators.Required("Please Enter your name")])
    email = StringField("Email", [validators.Required("Please Enter your email"), validators.Email("Emails not valid")])
    subject = StringField("Subject", [validators.Required("Please Enter a Subject")])
    message = TextAreaField("Message", [validators.Required("Please Enter Message")])

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'ufr.server@gmail.com'
app.config["MAIL_PASSWORD"] = '/pepper62'

mail.init_app(app)

###
# Routing for your application.
###

@app.route('/')
def home():
    """Render website's home page."""
    title = "Home"
    return render_template('home.html', title=title)

@app.route('/about')
def about():
    title = "What We Do"
    """Render the website's about page."""
    return render_template('about.html', title=title)

@app.route('/who-are-we')
def team():
    title = "Who We Are"
    """Render the website's about page."""
    return render_template('who.html', title=title)

@app.route('/services')
def services():
    title = "Services"
    """Render the website's about page."""
    return render_template('services.html', title=title)

@app.route('/contact', methods=('GET', 'POST'))
def contact():
    form = MyForm()
    title = "Contact Us"

    if request.method == 'POST':
        if form.validate() == False:
            return render_template('contact.html', form=form, title=title)
        else:
            msg = Message(form.subject.data, sender='ufr.server@gmail.com', recipients=['ojhinton@gmail.co'])
            msg.body = """
            From: %s %s;

            Message:
            %s
            """ % (form.name.data, form.email.data, form.message.data)
            mail.send(msg)

            return render_template('contact.html', form=form, title=title, posted_redirect=True)

    elif request.method == 'GET':
        return render_template('contact.html', form=form, title=title)

###
# The functions below should be applicable to all Flask apps.
###

@app.route('/<file_name>.txt')
def send_text_file(file_name):
    """Send your static text file."""
    file_dot_text = file_name + '.txt'
    return app.send_static_file(file_dot_text)


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


if __name__ == '__main__':
    app.run(debug=True)
