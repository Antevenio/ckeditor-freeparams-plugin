Free Params Plugin for CKEditor 4
=================================

This plugin allow you to insert a value from a grouped rich combo.

## Installation

Extract the downloaded file into the CKEditor's **plugins** folder or use another path like:

```javascript
        CKEDITOR.plugins.addExternal('freeparams', '/bower_components/ckeditor-freeparams-plugin/freeparams/');
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
                id: '[id11]',
                text: 'text11'
              },
              {
                id: '[id12]',
                text: 'text12'
              }]
            },
            {
              label: 'group2',
              values: [
              {
                id: '[id21]',
                text: 'text21'
              },
              {
                id: '[id22]',
                text: 'text22'
              }]
            }]
          }
        };
```
