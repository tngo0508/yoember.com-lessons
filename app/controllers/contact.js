import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Contact Page',
  message: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address and message is in progress: ${this.get('emailAddress')}, ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address and message: ${this.get('emailAddress')}, ${this.get('message')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
