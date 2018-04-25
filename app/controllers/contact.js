import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Contact Page',
  message: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address and message is in progress: ${this.get('emailAddress')}, ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address and message: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
