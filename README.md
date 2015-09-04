Free Params Plugin for CKEditor 4
=================================

This plugin allow you to insert params from multiples grouped richcombos.

These parameters can be used later as template variables.


## Installation

Extract the downloaded file into the CKEditor's **plugins** folder or use another path like:

```javascript
        CKEDITOR.plugins.addExternal('freeparams', 
          '/bower_components/ckeditor-freeparams-plugin/freeparams/');
```
## Configuration

Define multipe rich combos in config.freeparams array:

```javascript
    var config = {
      extraPlugins: 'freeparams',
      freeparams: [
      {
        label: 'mylabel1',
        title: 'mytitle1',
        groups: [
        {
          label: 'group11',
          values: [
          {
            value: '[value111]',
            label: 'text111'
          },
          {
            value: '[value112]',
            label: 'text112'
          }]
        },
        {
          label: 'group12',
          values: [
          {
            value: '[value121]',
            label: 'text121'
          },
          {
            value: '[value122]',
            label: 'text122'
          }]
        }]
      },
      {
        label: 'mylabel2',
        title: 'mytitle2',
        groups: [
        {
          label: 'group21',
          values: [
          {
            value: '[value211]',
            label: 'text211'
          },
          {
            value: '[value212]',
            label: 'text212'
          }]
        },
        {
          label: 'group22',
          values: [
          {
            value: '[value221]',
            label: 'text221'
          },
          {
            value: '[value222]',
            label: 'text222'
          }]
        }]
      }]
     };
```
