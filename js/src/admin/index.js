import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.initializers.add('justoverclock/flarum-ext-socialcards', () => {
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-socialcards.hide.facebook',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.showfacebook'),
    type: 'boolean',
  });
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-guestengagement.fblink',
    name: 'fblink',
    type: 'url',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.fblink'),
    help: 'e.g. https://www.facebook.com',
  });
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-socialcards.hide.youtube',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.showyoutube'),
    type: 'boolean',
  });
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-guestengagement.ytlink',
    name: 'ytlink',
    type: 'url',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.ytlink'),
    help: 'e.g. https://www.youtube.com',
  });
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-socialcards.hide.twitter',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.showtwitter'),
    type: 'boolean',
  });
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-guestengagement.twlink',
    name: 'twlink',
    type: 'url',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.twlink'),
    help: 'e.g. https://www.twitter.com',
  });
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-socialcards.hide.github',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.showGithub'),
    type: 'boolean',
  });
  app.extensionData.for('justoverclock-socialcards').registerSetting({
    setting: 'justoverclock-guestengagement.ghlink',
    name: 'ghlink',
    type: 'url',
    label: app.translator.trans('flarum-ext-socialcards.admin.settings.ghlink'),
    help: 'e.g. https://www.github.com',
  });
});
