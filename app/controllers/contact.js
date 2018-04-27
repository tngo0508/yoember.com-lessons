import Controller from '@ember/controller';
import {
  match,
  not
} from '@ember/object/computed';
import {
  gte
} from '@ember/object/computed';
import {
  and
} from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Contact Page',
  message: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {

    saveMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', {
        email,
        message
      });

      newContact.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('message', '');
      });

    }
  }
});
