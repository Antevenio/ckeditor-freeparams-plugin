Free Params Plugin for CKEditor 4
=================================

This plugin allow you to insert params from a grouped richcombo.

These parameters can be used later as template variables.


## Installation

Extract the downloaded file into the CKEditor's **plugins** folder or use another path like:

```javascript
        CKEDITOR.plugins.addExternal('freeparams', 
          '/bower_components/ckeditor-freeparams-plugin/freeparams/');
```
## Configuration

Define the rich combo in config.freeparams:

```javascript
    var config = {
      extraPlugins: 'freeparams',
      freeparams:
      {
        label: 'mylabel',
        title: 'mytitle',
        groups: [
        {
          label: 'group1',
          values: [
          {
            value: '[value11]',
            label: 'text11'
          },
          {
            value: '[value12]',
            label: 'text12'
          }]
        },
        {
          label: 'group2',
          values: [
          {
            value: '[value21]',
            label: 'text21'
          },
          {
            value: '[value22]',
            label: 'text22'
          }]
        }]
      }
    };
```
